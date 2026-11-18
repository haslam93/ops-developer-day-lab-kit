"""Turn an Ontario forms-repository PDF into a text outline that GitHub Copilot can read.

Usage:
    python extract_form_outline.py <form.pdf> [outline.md]

Why this exists: most forms in the Central Forms Repository are Adobe XFA forms. A PDF reader,
and Copilot, see only a page that says "Please wait..." or "requires Adobe Reader". The real
form (sections, fields, labels, options and scripts) is an XML template stored inside the file.
This script writes that template out as a compact outline.

Needs Python 3.9 or later and:  pip install "pypdf[crypto]"
"""
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

try:
    from pypdf import PdfReader
except ImportError:
    sys.exit('Missing dependency. Run:  pip install "pypdf[crypto]"')

MAX_TEXT = 300
MAX_SCRIPT_LINES = 40


def local(el):
    return el.tag.rsplit("}", 1)[-1] if isinstance(el.tag, str) else ""


def text_of(el):
    return "" if el is None else re.sub(r"\s+", " ", " ".join(el.itertext())).strip()


def child(el, name):
    return next((c for c in el if local(c) == name), None)


def children(el, name):
    return [c for c in el if local(c) == name]


def looks_like_binary(value):
    return len(value) > 120 and " " not in value[:120]


def script_lines(code):
    lines = [re.sub(r"[ \t]+", " ", ln).strip() for ln in code.strip().splitlines()]
    return [ln[:200] for ln in lines if ln][:MAX_SCRIPT_LINES]


def emit_scripts(el, depth, out):
    ind = "  " * depth
    for ev in children(el, "event"):
        sc = child(ev, "script")
        if sc is not None and (sc.text or "").strip():
            lang = (sc.get("contentType") or "formcalc").split("/")[-1].replace("x-", "")
            out.append(f"{ind}SCRIPT on {ev.get('activity')} ({lang}):")
            out.extend(f"{ind}  | {ln}" for ln in script_lines(sc.text))
    for tag in ("calculate", "validate"):
        x = child(el, tag)
        if x is None:
            continue
        sc = child(x, "script")
        if sc is not None and (sc.text or "").strip():
            out.append(f"{ind}SCRIPT {tag}:")
            out.extend(f"{ind}  | {ln}" for ln in script_lines(sc.text))
        msg = text_of(child(x, "message"))
        if msg:
            out.append(f'{ind}MESSAGE {tag}: "{msg[:200]}"')


def emit(el, depth, out, stats):
    ind = "  " * depth
    for c in el:
        name = local(c)
        if name in ("subform", "area", "exclGroup", "subformSet"):
            extra = []
            if c.get("presence"):
                extra.append(f"presence={c.get('presence')}")
            occ = child(c, "occur")
            if occ is not None:
                extra.append("repeats " + "/".join(f"{k}={v}" for k, v in occ.attrib.items()))
                stats["repeating"] += 1
            kind = "RADIO GROUP" if name == "exclGroup" else "SECTION"
            cap = text_of(child(c, "caption"))
            line = f"{ind}{kind} {c.get('name') or '(unnamed)'}"
            if cap:
                line += f' - "{cap[:160]}"'
            if extra:
                line += f" [{', '.join(extra)}]"
            out.append(line)
            emit_scripts(c, depth + 1, out)
            emit(c, depth + 1, out, stats)
        elif name == "draw":
            value = text_of(child(c, "value"))
            if value and not looks_like_binary(value):
                out.append(f'{ind}TEXT "{value[:MAX_TEXT]}"')
        elif name == "field":
            ui = child(c, "ui")
            kinds = [local(x) for x in ui if local(x) not in ("picture", "extras")] if ui is not None else []
            kind = kinds[0] if kinds else "unknown"
            bits = [f"FIELD {c.get('name')}", f"type={kind}"]
            cap = text_of(child(c, "caption"))
            if cap:
                bits.append(f'label="{cap[:160]}"')
            for attr in ("presence", "access"):
                if c.get(attr):
                    bits.append(f"{attr}={c.get(attr)}")
            val = child(c, "validate")
            if val is not None and val.get("nullTest") in ("error", "warning"):
                bits.append("REQUIRED")
                stats["required"] += 1
            value = child(c, "value")
            if value is not None:
                for t in value:
                    if t.get("maxChars"):
                        bits.append(f"maxChars={t.get('maxChars')}")
            fmt = text_of(child(c, "format"))
            if fmt:
                bits.append(f"format={fmt}")
            items = children(c, "items")
            if items:
                opts = [text_of(x) for x in items[0]]
                if opts:
                    more = "..." if len(opts) > 30 else ""
                    bits.append("options=[" + " | ".join(o[:40] for o in opts[:30]) + more + "]")
            assist = child(c, "assist")
            if assist is not None:
                tip = text_of(child(assist, "toolTip")) or text_of(child(assist, "speak"))
                if tip and tip != cap:
                    bits.append(f'help="{tip[:160]}"')
            out.append(ind + "; ".join(bits))
            stats["buttons" if kind == "button" else "fields"] += 1
            before = len(out)
            emit_scripts(c, depth + 1, out)
            stats["scripts"] += sum(1 for ln in out[before:] if ln.strip().startswith("SCRIPT"))


def xfa_template(reader):
    acro = reader.trailer["/Root"].get("/AcroForm")
    if acro is None:
        return None
    xfa = acro.get_object().get("/XFA")
    if xfa is None:
        return None
    xfa = xfa.get_object()
    if not isinstance(xfa, list):
        return xfa.get_data()
    for i in range(0, len(xfa), 2):
        if str(xfa[i]) == "template":
            return xfa[i + 1].get_object().get_data()
    return None


def acroform_outline(reader, out, stats):
    for name, field in (reader.get_fields() or {}).items():
        bits = [f"FIELD {name}", f"type={field.get('/FT', 'unknown')}"]
        if field.get("/TU"):
            bits.append(f'label="{str(field.get("/TU"))[:160]}"')
        if int(field.get("/Ff", 0)) & 2:
            bits.append("REQUIRED")
            stats["required"] += 1
        if field.get("/Opt"):
            bits.append("options=[" + " | ".join(str(o)[:40] for o in list(field.get("/Opt"))[:30]) + "]")
        out.append("; ".join(bits))
        stats["fields"] += 1


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    pdf = Path(sys.argv[1])
    target = Path(sys.argv[2]) if len(sys.argv) > 2 else pdf.with_name("outline.md")
    try:
        reader = PdfReader(str(pdf))
        template = xfa_template(reader)
    except Exception as error:  # pypdf raises several unrelated types for unreadable or encrypted files
        sys.exit(f'ERROR: could not read {pdf.name}: {error}\nIf this mentions AES, run:  pip install "pypdf[crypto]"')
    stats = {"fields": 0, "buttons": 0, "required": 0, "repeating": 0, "scripts": 0}
    out = []
    if template:
        kind = "Adobe XFA form"
        try:
            root = ET.fromstring(template)
        except ET.ParseError as error:
            sys.exit(f"ERROR: the form definition inside {pdf.name} is not valid XML: {error}")
        emit(root, 0, out, stats)
    else:
        kind = "AcroForm"
        acroform_outline(reader, out, stats)
    if not stats["fields"]:
        sys.exit(f"ERROR: no form fields found in {pdf.name}. It may be a flat, print-only PDF. "
                 "Attach screenshots of the form to the Copilot chat instead.")
    header = [
        f"# Form outline: {pdf.name}",
        "",
        f"Source type: {kind}. Fields: {stats['fields']}. Buttons: {stats['buttons']}. "
        f"Repeating groups: {stats['repeating']}. Scripts on fields: {stats['scripts']}. "
        f"Fields flagged required in the form definition: {stats['required']}.",
        "A required count of 0 does not mean nothing is mandatory: many forms enforce it in scripts. Check the PDF.",
        "",
        "```",
    ]
    target.write_text("\n".join(header + out + ["```", ""]), encoding="utf-8")
    print(f"{pdf.name}: {kind}; {stats['fields']} fields, {stats['buttons']} buttons, "
          f"{stats['repeating']} repeating groups, {stats['scripts']} field scripts -> {target}")


if __name__ == "__main__":
    main()
