# Lab prompts

Every prompt in the lab guide, ready to copy. They work the same in VS Code and in the GitHub Copilot app.

- Replace `<form>` with your form's folder name under `forms`.
- Replace other values in `<angle brackets>` with your own.
- Use made-up data only.

## Lab 1

### Check Copilot

```
Reply with the single word READY.
```

### A form from your ministry only: create the outline

```
Run tools/extract-form/extract_form_outline.py on forms/my-form/form.pdf.
If Python is not installed, stop and tell me. Do not install Python.
Install its one dependency first if it is missing.
Tell me how many fields it found.
```

### A form from your ministry, without Python: outline from screenshots

```
The screenshots attached are the pages of a blank Ontario government PDF form.
Create forms/my-form/outline.md from them: every section heading, question, label,
option and instruction, in page order and in the form's own wording.
Do not guess. Write "unclear" where you cannot read something.
Finish with a note: rules that show, hide or enable fields cannot be seen in
screenshots and must be checked in the PDF.
```

### Write the form spec

```
Read forms/<form>/outline.md. It is the content of an Ontario government PDF form:
sections, fields, labels, options and the scripts behind its rules.
Create docs/form-spec.md from it. Use docs/form-spec-template.md as the layout.
Do not write any application code.

List every question a person answers, grouped by section, with: ID, label as on the
form, type, required (yes or no), options or format, rule or condition, and
who completes it (applicant, organization or office).
Then list the rules that show, hide, enable or disable fields, the groups that repeat,
the calculations and format checks, and the signatures.
Leave out buttons, fonts, page layout and navigation scripts.
Finish with anything you could not work out from the outline, including each required
answer you chose without evidence in the form.
```

### Correct the form spec

```
In docs/form-spec.md, field <ID> is wrong: <what the PDF shows>.
Correct that row and any row the same fact changes. Tell me which rows you changed.
```

## Lab 2

### Pull your user story from your GitHub issue

```
Use the GitHub MCP server. In repository <organization>/<repository>, get issue <number>.
Read the issue with that server only. If it has no tool that reads an issue, stop and
tell me. Do not use the gh command or the web instead.
Show its title and description exactly as written.
Do not create or change anything on GitHub.
Then save that text as docs/story.md.
```

### Plan the application

```
Plan a small web application that puts the form in docs/form-spec.md online and
meets docs/story.md. Follow .github/copilot-instructions.md.

Stack: <your stack, or: the simplest option in the project instructions>.
Build only the questions the applicant answers. Leave out sections completed by an
organization or an office, and any section the spec marks "not today".
Show the form's notice of collection as text above the questions, in the form's own
wording.
Include the required and format checks, the rules that show or hide fields,
the repeating groups, and a declaration checkbox with a typed full name in place of
each signature.
The design system does not disable or lock controls. Where the PDF does, show the field
when it applies, or keep it available and say what is needed in a message.
On submit, check every rule again on the server, store the submission in a local
file and show a confirmation page with a reference number.
Plain pages are fine for now. The Ontario Design System comes in the next lab.
Add a test for every rule. Unit and server tests only: browser tests come in Lab 4.
List the files you will create, the commands that start the application and run
the tests, and any decision you need from me.
```

### Run the application

```
If a copy of the application is already running, stop it first: find it by the port
it listens on.
Then start the application and give me the address to open in my browser.
Tell me how to stop it.
```

### Fix one gap

```
In the web form, field <ID> is wrong: <what happens now>.
The form spec says: <the rule>.
Fix it. If the form spec is wrong too, correct it. Add a test that fails before the
fix and passes after it. Run the tests.
```

### Optional: record progress on your GitHub issue

```
Use the GitHub MCP server to add this comment to issue <number> in
<organization>/<repository>:
"First version built. <n> of <m> questions were right after one prompt."
Do not change anything else on GitHub.
```

## Lab 3

### Apply the Ontario Design System

```
Restyle the web form with the Ontario Design System.
Read docs/ontario-design-system.md first. Add the design system as web
components, unless this stack needs another option.
Use its application header, simple footer, fieldsets, labels, hint text, text inputs, text
areas, radio buttons, checkboxes, dropdown lists, buttons and error messaging.
The footer sits at the bottom of the window when the page is short, and after the content
when it is long. Use each component from its own source: a web component from its readme
and properties, an HTML component from the design system's sample.
Group the questions under the same section headings as the PDF.
Show errors as the design system describes: a summary at the top of the page that
links to each field, and a message at each field.
Write custom CSS only where no component fits, and tell me where you did.
If the design system has no component for something, build it as plain HTML and CSS in
the spirit of the design system, including its guidance, and tell me what you built.
Do not reach into or change a component: if one does not do what you need, tell me.
Keep every question, rule and test working. Run the tests before you finish.
```

### Accessibility review (Accessibility Reviewer agent)

```
Review the web form's pages for accessibility problems against WCAG 2.0 Level AA
and docs/accessibility-checklist.md. For each finding give the file and line, who
is affected and the fix. Do not edit files.
```

### Fix the accessibility findings

```
Fix the findings listed in docs/a11y-findings.md.
Change only what each finding needs. Keep every rule and test working.
Then mark each finding in that file as fixed or not fixed, with the reason.
```

## Lab 4

### Build the address lookup service

```
Build the shared address lookup service described in
docs/address-lookup-contract.md, in services/address-lookup.
Follow the contract exactly. Keep the service separate from the web application:
its own start command and its own tests.
Add a test for each response in the contract. Run the tests.
Tell me how to start the service, and give me three addresses to try in my browser:
one found, one not found and the one that simulates an outage.
```

### Connect the form to the service

```
Connect the address questions in the web form to the address lookup service at
http://localhost:4000, as docs/address-lookup-contract.md describes.
When the user enters a postal code, fill in the city and province. The user can
still change them.
If the service finds nothing, is down or is slow, say so in plain words and let
the user type the address.
Keep the format checks from the form spec. If the address block repeats, the
lookup works in every copy.
Add tests for found, not found and unavailable. Run the tests.
```

### Test the form with Playwright

```
Add end-to-end tests with Playwright in app/e2e.
Read docs/testing-with-playwright.md first.
Use the Microsoft Edge that is installed on this computer (channel "msedge").
Do not download other browsers.
Write these tests, with made-up data:
1. Complete the form with valid answers and submit: a reference number is shown.
2. Submit with a required question empty: the error summary appears and links to
   the field.
3. Each rule in docs/form-spec.md that shows or hides a field, and each rule the web form
   turns into a message.
4. Add and remove a repeating group, if the form has one.
5. Complete and submit the form using the keyboard only.
6. Address lookup: found, not found and unavailable, if the form has an address.
7. Footer: on a short page it sits at the bottom of the window, and on a long page it is
   below the last content and covers nothing.
Leave out a test that does not apply to this form, and tell me which you left out.
Find elements by their label or role, as a user would.
Run the tests. If a test finds a real fault, fix the application. If the test is
wrong, fix the test. Tell me which was which.
```

### Add an accessibility check to the tests

```
Add an accessibility check to the Playwright tests with @axe-core/playwright, for
WCAG 2.0 Level A and AA. Check the empty form, the form showing errors and the
confirmation page.
Run the tests and list each violation with the element it is on. Then fix the
violations and run the tests again.
```

### Optional: let Copilot explore the form in a browser

```
Open the web form in a browser and try to break it: unexpected input, very long
answers, the Back button, submitting twice. Use made-up data.
List what you find, with the steps to reproduce each one. Do not change any code.
```

### Write the hand-off note

```
Write docs/handoff.md, one page, using only what is in this repository.
No estimates and no praise.
1. What the web form does now.
2. What was converted from the PDF: number of questions, rules and repeating groups.
3. What was left out and why.
4. Test and accessibility results, from the last test run and docs/a11y-findings.md.
   Write "not run" for anything that is missing.
5. What is still needed before real use: sign-in, the real back end, privacy and
   security review, French, records retention, testing with users.
6. Shared services this form could use.
```

### Optional, only if your table lead says you can push: push and open a pull request

```
Create a branch named <your-name> from my current commit and push it to the lab
repository <organization>/<repository>. Push to no other branch or repository.
Then open a draft pull request from that branch. In its description write
"Closes #<number>", with the number of my issue. Do not merge it.
```

## Advanced track

### Capture the process as a skill

```
Create a project skill named form-to-app in .github/skills/form-to-app.
It converts one Ontario government PDF form into a web form in this repository, in
the order used today: write the form spec and stop for my review, plan, build,
apply the Ontario Design System, check accessibility, then test with Playwright.
It stops and asks me before each stage that changes files.
Include a description of when to use the skill.
```
