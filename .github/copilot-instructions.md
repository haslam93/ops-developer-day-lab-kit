# Project instructions for GitHub Copilot

This repository is the OPS Developer Day lab kit. The developer is converting one Ontario
government PDF form into a small, accessible web application. Follow these rules in every request.

## Source of truth

- Build from `docs/form-spec.md`. It lists what the form asks and the rules it applies.
- Do not invent fields, options, rules or wording. If the spec is unclear, ask.
- The user story is in `docs/story.md`.

## Where things go

- The web application: `app/`
- The shared address lookup service: `services/address-lookup/`
- End-to-end tests: `app/e2e/`
- Notes, findings and the hand-off note: `docs/`

## Technology

- Use the stack the developer asks for.
- If they have no preference: plain HTML, CSS and JavaScript in the browser, and a small Node.js
  server with no framework and as few dependencies as possible.
- Say which commands start the application and run the tests. Add them to `app/README.md`.

## Ontario Design System

- All pages use the Ontario Design System. Read `docs/ontario-design-system.md` first.
- Copy the markup and class names from the design system's own samples. Do not guess class names.
- Do not add another CSS framework. Write custom CSS only where no component fits, and say where.

## Accessibility

- Target WCAG 2.0 Level AA, which the AODA requires. Use `docs/accessibility-checklist.md`.
- Every input has a visible label. Groups of radio buttons or checkboxes sit in a fieldset with a legend.
- Errors: a summary at the top of the page that links to each field, and a message at each field.
- Everything works with the keyboard alone, and the focus is always visible.

## Data and safety

- Made-up data only, in code, tests and samples. Never real names, birth dates or licence numbers.
- No secrets in the repository.
- Nothing is deployed or pushed. The application talks only to services on this computer.
- Check every rule on the server as well as in the browser, from one shared definition.

## Quality

- Every rule in the spec has a test.
- Run the tests before you say the work is done. Report failures and anything you could not do.
- Keep user-facing text in one place so that French can be added later.
- Out of scope: sign-in, file uploads, payments and digital signatures.
