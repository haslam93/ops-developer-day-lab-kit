# Forms

Each folder here holds one form to convert. Choose a sample form, or bring a form from your own ministry.

| File | What it is |
| --- | --- |
| `README.md` | The form's name and number, and where its blank PDF is |
| `outline.md` | The form's sections, fields, labels, options and scripts, as text Copilot can read |
| `form.pdf` | The blank PDF. Open it in Adobe Acrobat Reader. It does not open in a browser. |

## Sample forms

Three sample forms, shortest first. Each folder holds the blank PDF and a ready outline.

| Folder | Form | Notes |
| --- | --- | --- |
| `marriage-licence-fee-affidavit` | 11010, Affidavit to Waive Provincial Fee for a Marriage Licence (Ministry of Public and Business Service Delivery and Procurement) | 30 fields. The shortest. |
| `place-of-business-questionnaire` | 023-5026, Established Place of Business and Residence Questionnaire (Ministry of Transportation) | 37 fields. Short, with rules to build. |
| `amend-business-name` | 5295, Amend a Business Name for a Corporation (Ministry of Public and Business Service Delivery and Procurement) | 332 fields. Long: build two or three sections. Its README lists them. |
| `example-security-screening-check` | 026-LE221, Security Screening Check (Ontario Provincial Police) | A longer form, kept as a worked example. Its README says which sections to build and where to download its PDF. |

New to Copilot? Take one of the first two.

## A form from your own ministry

1. Open the Central Forms Repository and select **Ministries**, then your ministry:
   https://forms.mgcs.gov.on.ca/en/organization/
2. Choose a form that people fill in, not a guide or a set of guidelines, of one or two pages.
   A longer form does not fit in the day. Allow yourself 5 minutes, then take a sample form.
3. Create the folder `forms/my-form` and save the blank English PDF there as `form.pdf`.
4. Create the outline with the tool in `tools/extract-form`.
   If the tool finds no fields, the PDF is a guide or a print-only form: choose another.
   No Python? Attach a screenshot of each page to the Copilot chat and send the screenshot prompt
   in `docs/lab-prompts.md`.

If the site does not load, use a sample form. If a PDF will not download, ask your table lead for it.

Forms are published by the Government of Ontario. © King's Printer for Ontario.
The PDFs stored here are unchanged copies from the Central Forms Repository.
Each `outline.md` is a text extract made with `tools/extract-form`, not an official version of the form.
Use blank forms and made-up data only. Never use a form that someone has filled in.
