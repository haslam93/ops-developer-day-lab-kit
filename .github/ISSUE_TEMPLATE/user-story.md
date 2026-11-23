---
name: "User story: put a form online"
about: "The user story for the Developer Day labs. Put your form's number and your initials in the title."
title: "Put form <form number> online (<your initials>)"
---

## Description

As a person who has to complete this form,
I want to fill it in and submit it in my browser,
so that I do not have to download a PDF, fill it in and send it by email.

Out of scope: sign-in, file uploads, payments, digital signatures, French, deployment,
and any connection to AEM or another OPS system.

## Acceptance criteria

1. The web form asks every question that the applicant answers in the sections the form spec lists for today,
   with the same wording, grouped under the same section headings. Sections the spec marks "not today",
   and sections completed by an organization or an office, are left out.
2. Required questions and format rules are enforced. Each error message says what is wrong and how to fix it.
3. Rules that show, hide, enable or disable a question work as they do on the PDF.
4. A group that repeats on the PDF, such as several addresses, can be added and removed.
5. Each signature is replaced by a declaration checkbox and a typed full name.
6. The form follows the Ontario Design System.
7. The form can be completed with the keyboard alone, and meets WCAG 2.0 Level AA as far as today's checks can show.
8. On submit, the data is stored on this computer and a confirmation page shows a reference number.
9. The server rejects invalid data, even when the browser checks are bypassed.
10. Tests cover every rule. Tests and samples use made-up data only.
