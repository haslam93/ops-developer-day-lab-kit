# Testing the form with Playwright

Playwright drives a real browser the way a person would: it opens the form, types, clicks and
checks what the page shows. In Lab 4 you ask Copilot to write and run these tests.
Docs: https://playwright.dev/docs/intro

## Set up

Run these in the folder that holds the application, for example `app/`.

```
npm install --save-dev @playwright/test @axe-core/playwright
```

Use the Edge browser that is already on your laptop, so nothing large is downloaded:

```js
// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL: 'http://localhost:3000', channel: 'msedge' },
  webServer: { command: 'npm start', url: 'http://localhost:3000', reuseExistingServer: true },
});
```

Change the address and the start command to match your application.

## Run

```
npx playwright test                 # run every test
npx playwright test --headed        # watch the browser while it runs
npx playwright show-report          # open the HTML report
```

## What to test

| Test | It proves |
| --- | --- |
| Fill in every question with valid made-up data and submit | The main path works and shows a reference number |
| Submit with a required question empty | The error summary appears, links to the field, and nothing is stored |
| Trigger each rule from the form spec | Fields show, hide, enable and disable as the PDF does |
| Add and remove a repeating group, if the form has one | Repeating groups keep their data |
| Complete the form with the keyboard only | No mouse is needed |
| Address lookup: found, not found, unavailable, if the form has an address | The form copes with all three answers |

Leave out a test that does not apply to your form.

Find elements the way a user does, by label or role, not by CSS class:

```js
await page.getByLabel('Last name').fill('Sample');
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByRole('heading', { name: 'There is a problem' })).toBeVisible();
```

## Add an accessibility check

axe scans the page for accessibility problems. Add it to the same tests:

```js
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test('the form has no accessibility violations axe can detect', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  expect(results.violations).toEqual([]);
});
```

Scan the page again after you submit it empty, so that the error state is checked too.
axe finds only some problems. Keep doing the keyboard check by hand.
