# Form extractor (optional tool)

Most forms in the [Central Forms Repository](https://forms.mgcs.gov.on.ca/en/) are Adobe XFA forms.
A PDF reader, and GitHub Copilot, see only a page that says the file needs Adobe Reader.
The real form sits inside the file as XML. This script writes it out as `outline.md`,
a text file Copilot can read: sections, fields, labels, options and the scripts behind the rules.

## Use it

You need Python 3.9 or later.

```
pip install "pypdf[crypto]"
python tools/extract-form/extract_form_outline.py forms/my-form/form.pdf
```

The outline is written beside the PDF as `forms/my-form/outline.md`.

You can also ask Copilot to do it:

```
Run tools/extract-form/extract_form_outline.py on forms/my-form/form.pdf.
Install its one dependency first if it is missing. Tell me how many fields it found.
```

## If it does not work

- **No Python on your laptop, or the install is blocked:** open the PDF in Adobe Acrobat Reader,
  take a screenshot of each page and attach the screenshots to the Copilot chat. Copilot reads the
  labels and layout from the images. It cannot see hidden rules that way, so test each rule by hand.
- **"no form fields found":** the PDF is a flat, print-only form. Use screenshots.
- **Still stuck:** use the example form in `forms/example-security-screening-check`.

## What the outline does not tell you

- Which fields are mandatory. Many forms enforce that in scripts, not in the field definition.
- Who fills in each section. Read the section headings and the PDF.

Check the outline against the PDF before you rely on it.
