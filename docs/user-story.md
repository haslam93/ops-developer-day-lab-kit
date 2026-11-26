# User story: the layout

In Lab 2, Copilot writes your user story from your form spec, `docs/form-spec.md`, and saves it
as `docs/story.md`, in the layout below. Copilot then creates the story as an issue in the lab
repository through the GitHub MCP server. You check the issue on GitHub, and Copilot works from it.

- Lab repository: `OPS-Community/ops-dev-day-dec-1-2026`. Every attendee's issue is there.
- The title starts with your alias in square brackets, so that you can find your issue.
  Your alias is the first part of your ontario.ca email address, before the @.
- In `docs/story.md` the title is the first line, a level 1 heading. Everything below it is the
  body of the issue.

No tool that creates an issue? Create the issue by hand: open the lab repository on GitHub, select
**Issues**, then **New issue**, and paste the title and the body from `docs/story.md`.
Cannot reach GitHub issues at all? Carry on from `docs/story.md`.

## Title

[<your alias>] Put form <form number> online

## Description

As a person who has to complete <the form's name>,
I want to fill it in and submit it in my browser,
so that I do not have to download a PDF, fill it in and send it by email.

## Scope

- Build today: <each section the applicant answers that the form spec lists for today, with its number of questions>
- Left out: <each section the spec marks "not today", and each section completed by an organization or an office>
- Out of scope: sign-in, file uploads, payments, digital signatures, French, deployment,
  and any connection to AEM or another OPS system.

## Where

- The form spec: `docs/form-spec.md`. Build from it.
- The application: `app/`. Follow `.github/copilot-instructions.md`.

## Acceptance criteria

1. The web form asks every question that the applicant answers in the sections to build today,
   with the same wording, grouped under the same section headings. The sections left out are not built.
2. Required questions and format rules are enforced. Each error message says what is wrong and how to fix it.
3. Rules that show or hide a question work as they do on the PDF. Where the PDF disables or locks a question, the web form keeps it available and says what is needed in a message.
4. A group that repeats on the PDF, such as several addresses, can be added and removed.
5. Each signature is replaced by a declaration checkbox and a typed full name.
6. The form follows the Ontario Design System, including the application header and a footer at the bottom of the page.
7. The form can be completed with the keyboard alone, and meets WCAG 2.0 Level AA as far as today's checks can show.
8. On submit, the data is stored on this computer and a confirmation page shows a reference number.
9. The server rejects invalid data, even when the browser checks are bypassed.
10. Tests cover every rule. Tests and samples use made-up data only.
