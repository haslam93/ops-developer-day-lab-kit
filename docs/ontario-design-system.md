# Ontario Design System: where to look

The Ontario Design System (ODS) is the design and coding standard for Government of Ontario
websites and applications. Use it for every page you build today.

> [!IMPORTANT]
> Not everything is in the design system. Where it has no component for something, such as a skip
> link, the page layout or a confirmation page, build that piece as plain, accessible HTML and CSS,
> specific to what is needed. Keep it in the spirit of the design system. That is more than its look
> and its classes (for example `ontario-show-on-focus`): it is the guidance, directions and ideas that
> make it one cohesive system, so read the guidance pages closest to what you are building. It is
> custom work, so it can be flexible. Say what you built.
> Never do it by changing a component: do not reach into a web component's shadow DOM, inject
> styles into it, or fork or patch it. If a component does not do what you need, use what it
> documents and say what is missing.

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
| Complete styles package | You need the HTML components instead of web components | `npm install @ongov/ontario-design-system-complete-styles`. The compiled CSS is in the package at `dist/styles/css/compiled/ontario-theme.min.css`. Fonts and other assets are under `dist`. |
| Web component library (use this one today) | You want ready-made elements such as `<ontario-button>` | `npm install @ongov/ontario-design-system-component-library` (React: `...-component-library-react`, Angular: `...-component-library-angular`) |
| Distribution package | No npm, or you want the HTML samples | Download the ZIP from the "Getting started for developers" page, unzip it into your project and import `styles/ds-theme.min.css` |

The distribution package includes an `html-samples` folder with the HTML for each component.
Whichever option you use, serve the files from your own application. Do not link to a CDN.

## Using the web components in plain HTML

Add these to the head of every page. Serve the two `node_modules` folders from your own
application, or copy them into a public folder. Do not link to a CDN.

```html
<link rel="stylesheet" href="/node_modules/@ongov/ontario-design-system-global-styles/dist/styles/css/compiled/ontario-theme.css" />
<script type="module" src="/node_modules/@ongov/ontario-design-system-component-library/dist/ontario-design-system-components/ontario-design-system-components.esm.js"></script>
```

The header and footer load their own logos. Do not add `<img>` tags or CSS for them.

- Served this way, the components find the logos in the `assets` folder next to their own script
  (`dist/ontario-design-system-components/assets`).
- If you copy those files somewhere else, or use a bundler, set `asset-base-path` on the header and
  the footer to the folder that holds them, for example `asset-base-path="/assets"`.
  In React you can call `setAssetPath` once instead.

## Components a form needs

Each has a page under https://designsystem.ontario.ca/components/detail/ with guidance and code.

| Need | Component page |
| --- | --- |
| Top of the page | `application-header.html` (see Page layout) |
| Bottom of the page | `simple-footer.html` (or `expanded-footer.html`) |
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
| A date | `dates.html` (web component: `ontario-date-input`) |
| A summary of answers, such as on the confirmation page | `summary-list.html` |
| Review answers before submitting | `form-review.html`, a pattern built from `summary-list.html` (not built today) |

## Page layout

Every page has the header, one `main` and the footer, in that order.

- Header: use the `application` header. With the web component, give it the application's name
  and link in `application-header-info`, and set `menu-items` explicitly (use `[]` for none): if
  it is left out, the component falls back to its built-in ontario.ca topic links.
  The `ontario` header is for ontario.ca pages. If it is used, leave `menu-items` out to get its
  built-in menu, and set `disable-dynamic-menu="true"`: by default it also tries to fetch the
  menu from the internet, and logs an error when it cannot.
- Footer: use the simple footer. It is the last element on the page. If the content is
  shorter than the window, the footer sits at the bottom of the window. If the content is
  longer, it sits at the bottom of the content and covers nothing. See the "Technical note"
  at <https://designsystem.ontario.ca/components/detail/simple-footer.html>. The design system
  offers two ways to do this and neither is required. One way:

  ```css
  body { min-height: 100vh; display: flex; flex-direction: column; margin: 0; }
  main { flex: 1 0 auto; }
  footer, ontario-footer { margin-top: auto; }
  ```

- Skip link: the first thing the Tab key reaches is a "Skip to main content" link to
  `<main id="main-content" tabindex="-1">`. The design system has no skip link. Build it as plain
  HTML with the `ontario-show-on-focus` class, as the design system's own guidance pages do.

## Disabled and read-only

The design system's inputs, radio buttons and buttons have no disabled or read-only state,
on purpose. Do not add one with `disabled`, `readonly` or CSS, and do not lock a control so
that the user has to work out what to do first.

- Showing a field when an earlier answer makes it relevant is fine.
- Otherwise keep the control available, and say what is wrong or missing in an error message.

Source: https://designsystem.ontario.ca/components/detail/buttons.html#disabled-buttons

## Rules for Copilot

- HTML components (the complete styles package or the distribution package): before you write
  markup, open the component's sample (the `html-samples` folder of the distribution package,
  or the component page) and copy the structure and class names exactly. Class names start
  with `ontario-`, for example `ontario-input`.
- Web components (`<ontario-input>` and the rest): these are not HTML samples. Read the
  component's `readme.md` in
  `node_modules/@ongov/ontario-design-system-component-library/src/components/<name>/`
  and set its properties, slots and events as it describes. Write no class names for them
  and do not paste in an HTML sample.
- Mixing both: each component follows its own source. An HTML component follows its sample, and
  a web component follows its readme and properties.
- Never reach into a web component's shadow DOM, inject styles into it, or fork or patch a component.
  If a component does not do what you need, use what it documents and say what is missing.
- If the design system has no component for something, build it as plain HTML and CSS, specific
  to the need and in the spirit of the design system, and say what you built (see the note at the top).
- Do not write your own version of a component that exists.
- Every question must say whether it is required or optional: put "(required)" or "(optional)" in
  brackets at the end of the label, as the design system's label guidance says. The web components
  do this from their `required` property. Do not use asterisks.
- Do not add another CSS framework.

## Errors, as the design system describes them

- Put an error summary at the top of the page, above the main heading. Its heading is "There is a problem".
- Give the summary `role="alert"` and move the focus to it when the page shows errors.
- Each line in the summary links to the field it is about.
- Show a message directly above each field that has an error. Say what went wrong and how to fix it.
- Add "Error: " to the start of the page title.
- The error summary is a page alert (`page-alerts.html`). There is no separate component.
- List the errors in the summary in the order of the fields.
- Put each field's message directly above the field and after its hint text, never below or beside it.
- Do not use tooltips for errors, and do not clear a field because it has an error.
- Do not turn on HTML5 validation: put `novalidate` on the form.
- Web components: set the component's `errorMessage` property to show its built-in inline error, and
  do not write that markup yourself. Use it for errors found on submit. You can also use live
  validation (`enable-live-validation` with `inputValidator`): see the component's readme.
  The error summary is still yours to build.
- Each error in the summary links to its field by the field's `id`. Known issue: the web components
  do not yet pass focus from that link to the input inside them. Keep the link as it is. Do not work
  around it by reaching into the component.
