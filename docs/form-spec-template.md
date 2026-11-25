# Form spec: <form number and name>

Reviewed by <your initials> against the PDF on <date>.

The form spec is the list of what the form asks and the rules it applies.
Copilot builds the web form from this file, so check it against the PDF before you build.

## Summary

- Purpose of the form:
- Who fills it in:
- Sections built today:
- Sections left out today, and why:

## Fields

One row for every question a person answers. Leave out buttons and page layout.

| ID | Section | Label, as on the form | Type | Required | Options or format | Rule or condition | Completed by |
| --- | --- | --- | --- | --- | --- | --- | --- |
| APP-01 | Applicant information | Last name | Text | Yes | Up to 50 characters | None | Applicant |
| APP-07 | Applicant information | Driver's licence number | Text | No | None | Enabled only when "Driver's Licence History" is ticked | Applicant |
| APP-08 | Applicant information | Date of birth (yyyy/mm/dd) | Date | Yes | yyyy/mm/dd | Must be in the past | Applicant |
| ORG-01 | Identification | Form checked for completeness | Checkbox | No | None | None | Organization |

Type is one of: Text, Long text, Number, Date, Email, Telephone, One choice, Several choices, Checkbox, Signature.

Required is Yes or No: the web form has no third state. An asterisk in the label, or a script that
blocks submission, means Yes. When the PDF does not settle it, write the answer you chose and add
a question below so that it gets checked.

## Rules

1. Rules that show, hide, enable or disable fields:
2. Groups that repeat, such as several addresses:
3. Calculations and format checks:
4. Signatures and attachments, and how the web form replaces them:

Write each rule as the PDF has it, including rules that enable or lock a field. The web form
does not disable or lock controls, so the build turns such a rule into a rule that shows the
field, or into a message.

## Questions for the form's owner

-
