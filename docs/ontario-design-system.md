# Ontario Design System: where to look

The Ontario Design System (ODS) is the design and coding standard for Government of Ontario
websites and applications. Use it for every page you build today.

## Links

| What | Where |
| --- | --- |
| Home | https://designsystem.ontario.ca/ |
| All components, with guidance and code | https://designsystem.ontario.ca/components/detail/components.html |
| Getting started for developers | https://designsystem.ontario.ca/docs/documentation/develop/for-developers.html |
| npm packages | https://designsystem.ontario.ca/docs/documentation/develop/npm-packages.html |
| Web components (HTML, React, Angular) | https://designsystem.ontario.ca/docs/documentation/develop/web-components.html |
| Error messaging | https://designsystem.ontario.ca/components/detail/error-messaging.html |

## Three ways to add it

| Option | Use it when | How |
| --- | --- | --- |
| Complete styles package | Plain HTML, or any server-rendered pages | `npm install @ongov/ontario-design-system-complete-styles` |
| Web component library | You want ready-made elements such as `<ontario-button>` | `npm install @ongov/ontario-design-system-component-library` (React: `...-component-library-react`, Angular: `...-component-library-angular`) |
| Distribution package | No npm, or you want the HTML samples | Download the ZIP from the "Getting started for developers" page, unzip it into your project and import `styles/ds-theme.min.css` |

The distribution package includes an `html-samples` folder with the HTML for each component.

## Components a form needs

Each has a page under https://designsystem.ontario.ca/components/detail/ with guidance and code.

| Need | Component page |
| --- | --- |
| Top of the page | `ontario-header.html` or `application-header.html` |
| Short answer | `text-inputs.html` |
| Long answer | `text-areas.html` |
| Label for an input | `labels.html` |
| Help with a question | `hint-text.html` |
| One choice from a few | `radio-buttons.html` |
| Several choices | `checkboxes.html` |
| One choice from many | `dropdown-lists.html` |
| A group of related questions | `fieldsets.html` |
| Actions | `buttons.html` |
| Errors | `error-messaging.html` and `page-alerts.html` |
| Progress through several pages | `step-indicator.html` |

## Rules for Copilot

- Before you write markup for a component, open its sample (the `html-samples` folder of the
  distribution package, the installed npm package, or the component page) and copy the structure
  and class names exactly. Class names start with `ontario-`, for example `ontario-input`.
- Do not write your own version of a component that exists.
- Do not add another CSS framework.

## Errors, as the design system describes them

- Put an error summary at the top of the page, above the main heading. Its heading is "There is a problem".
- Give the summary `role="alert"` and move the focus to it when the page shows errors.
- Each line in the summary links to the field it is about.
- Show a message directly above each field that has an error. Say what went wrong and how to fix it.
- Add "Error: " to the start of the page title.
