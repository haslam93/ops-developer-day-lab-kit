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
  // Screenshots, video and trace are off unless you turn them on. Leave them off: see "If a policy gets in the way".
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
| Trigger each rule from the form spec | Fields show and hide as the PDF does, and a rule the PDF enforces by locking a field shows a message instead |
| Add and remove a repeating group, if the form has one | Repeating groups keep their data |
| Complete the form with the keyboard only | No mouse is needed |
| Address lookup: found, not found, unavailable, if the form has an address | The form copes with all three answers |
| Footer position, on a short and a long page | The footer is at the bottom of the window on a short page, and below the last content on a long one |

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

## The Playwright MCP server

In Lab 4, Copilot also opens your form through the Playwright MCP server from the OPS registry.
It is a different thing from the tests: Copilot drives the browser itself, one step at a time.

- It reads a page as text, with a snapshot (`browser_snapshot`). It does not need a screenshot.
- It opens a browser window that you can watch. Leave the window in view.
- It looks for Google Chrome unless it is set to use Microsoft Edge (`--browser msedge`).
  If it says that a browser is not installed, do not install one: tell your table lead and
  carry on with the tests. The tests do not need the server.

## If a policy gets in the way

On an OPS laptop, a browser policy can stop a browser that a program drives.
Do not try to get around a policy. Do this instead.

| What you see | What it means | What to do |
| --- | --- | --- |
| The browser does not start in headless mode, or a test stops as it starts | The policy does not allow headless mode: a browser with no window | Run the browser in a window: `npx playwright test --headed`, or `headless: false` under `use` in the configuration |
| A screenshot fails or never finishes | The policy blocks it, or the browser window is minimized or hidden | Leave `screenshot`, `video` and `trace` off: they are off unless you turn them on. Keep the browser window in view. Do not compare screenshots in tests. With the MCP server, read the page with a snapshot |
| The browser closes at once, even in a window, or the error says "DevTools remote debugging is disallowed by the system admin" | The policy does not let a program drive the installed browser | Only ITOD can change this. Tell your table lead and test by hand with the list in "What to test" |
| Playwright asks to download a browser, or a download fails | The configuration does not name the installed Edge | Set `channel: 'msedge'` under `use`. Do not download a browser |

You do not need headless mode or screenshots today. The tests check what the page says, and axe needs neither.
