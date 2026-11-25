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
- The lab guide: `guide/`. It is a web page for the developer to read. Do not change it,
  and do not use its files in the application.

## Technology

- Use the stack the developer asks for.
- If they have no preference: plain HTML, CSS and JavaScript in the browser, and a small Node.js
  server with no framework and as few dependencies as possible.
- Use the Ontario Design System web components (see `docs/ontario-design-system.md`), unless the
  developer asks for another option.
- Say which commands start the application and run the tests. Add them to `app/README.md`.

## Ontario Design System

- All pages use the Ontario Design System. Read `docs/ontario-design-system.md` first.
- Every page has the application header, one `main` and the simple footer. The footer is at the
  bottom of the window on a short page and after the content on a long page.
- HTML components: copy the markup and class names from the design system's own samples. Do not
  guess class names. If a page mixes HTML and web components, each follows its own source.
- Not everything is in the design system. If it has no component for something (a skip link, the
  page layout, a confirmation page), build it as plain, accessible HTML and CSS, specific to what
  is needed and in the spirit of the design system: its guidance, directions and ideas as well as
  its look, so that it feels like one cohesive system. It is custom work, so it can be flexible.
  Tell me what you built.
- Web components: use only their documented properties, slots and events, as in each component's
  readme. Never reach into a component's shadow DOM, inject styles into it, or fork or patch it.
  If a component does not do what you need, use what it documents and tell me what is missing.
- Do not add another CSS framework. Write custom CSS only where no component fits, and say where.

## Accessibility

- Target WCAG 2.0 Level AA, which the AODA requires. Use `docs/accessibility-checklist.md`.
- Every input has a visible label. Groups of radio buttons or checkboxes sit in a fieldset with a legend.
- Errors: a summary at the top of the page that links to each field, and a message at each field.
- Everything works with the keyboard alone, and the focus is always visible.

## Data and safety

- Made-up data only, in code, tests and samples. Never real names, birth dates or licence numbers.
- No secrets in the repository.
- Nothing is deployed. The application talks only to services on this computer.
- Push only when the developer asks, and only to the lab repository they name in the event's
  GitHub organization. Never push anywhere else.
- On GitHub, read freely. Create or change an issue, a comment or a pull request only when
  the developer asks for that change.
- Check every rule on the server as well as in the browser, from one shared definition.

## Quality

- Every rule in the spec has a test.
- Run the tests before you say the work is done. Report failures and anything you could not do.
- Keep user-facing text in one place so that French can be added later.
- Out of scope: sign-in, file uploads, payments and digital signatures.
