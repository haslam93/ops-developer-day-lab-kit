# Accessibility checklist for a web form

Ontario's accessibility law, the AODA, requires Government of Ontario websites, public and internal,
to meet WCAG 2.0 Level AA. Source: https://www.ontario.ca/page/how-make-websites-accessible

Use this list when you build, when you review and when you test.
Passing it does not certify conformance. It catches the common problems in forms.

## Structure

- [ ] The page has a language (`<html lang="en">`) and a title that names the form. (3.1.1, 2.4.2)
- [ ] One main heading, then section headings in order. (1.3.1, 2.4.6)
- [ ] A "skip to main content" link is the first thing the Tab key reaches. (2.4.1)

## Questions

- [ ] Every input has a visible label that is tied to it in the code. (1.3.1, 3.3.2)
- [ ] Radio buttons and checkboxes that belong together sit in a fieldset with a legend. (1.3.1)
- [ ] Required questions say so in text, not by colour or an asterisk alone. (1.4.1, 3.3.2)
- [ ] The expected format is shown before the user types, for example "yyyy/mm/dd". (3.3.2)
- [ ] Nothing changes unexpectedly when a field gets the focus or a value is entered. (3.2.1, 3.2.2)

## Errors

- [ ] A summary at the top of the page lists every error and links to each field. (3.3.1)
- [ ] Each field with an error has a message beside it that says how to fix it. (3.3.1, 3.3.3)
- [ ] The focus moves to the error summary when errors appear. (2.4.3)
- [ ] Errors are shown in text, not by colour alone. (1.4.1)
- [ ] The user can review and correct answers before the final submit. (3.3.4)

## Keyboard

- [ ] Every field and button can be reached and used with the keyboard alone. (2.1.1)
- [ ] The focus is never trapped, and you can always see where it is. (2.1.2, 2.4.7)
- [ ] The Tab order follows the order on screen. (2.4.3)

## Seeing the page

- [ ] Text has a contrast of at least 4.5 to 1 against its background. (1.4.3)
- [ ] At 200% zoom nothing is cut off and nothing overlaps. (1.4.4)
- [ ] Images that carry meaning have a text alternative. (1.1.1)

## Code

- [ ] Custom controls expose a name, a role and a state. Prefer native HTML controls. (4.1.2)

## How to test

| Check | Tool | Finds |
| --- | --- | --- |
| Automated audit | Lighthouse in Edge DevTools (F12), or axe in a Playwright test | Missing labels, contrast, language, some structure problems |
| Keyboard only | Tab, Shift+Tab, Space, Enter and the arrow keys | Unreachable controls, lost focus, wrong order |
| Zoom | Ctrl and + to 200% | Cut-off and overlapping content |
| Screen reader (optional) | Narrator: Windows key + Ctrl + Enter | Missing or confusing announcements |

An automated audit finds only some problems. Always do the keyboard check as well.
