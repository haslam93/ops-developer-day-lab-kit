# OPS Developer Day lab kit

Optional assets for the OPS Developer Day hands-on labs (1 December 2026).
In the labs you turn one Ontario government PDF form into a small web application with
GitHub Copilot. You build the application yourself, in this folder. The kit gives Copilot
the context it needs and gives you reference material. Use what helps and ignore the rest.

The lab guide has the steps: `OPS-Developer-Day-Lab-Guide`.

## Get started

```
git clone https://github.com/haslam93/ops-developer-day-lab-kit.git
cd ops-developer-day-lab-kit
```

Open the folder in **VS Code**, in the **GitHub Copilot app**, or in both at once.
Both read the same instructions, agent and files from this folder.

## What is in the kit

| Path | What it is | Use it in |
| --- | --- | --- |
| `.github/copilot-instructions.md` | Project rules that Copilot reads on every request | Every lab |
| `.github/agents/accessibility-reviewer.agent.md` | A custom agent that reviews pages for accessibility and cannot edit | Lab 3 |
| `docs/lab-prompts.md` | Every prompt in the lab guide, ready to copy | Every lab |
| `forms/` | The forms to convert, each with an outline Copilot can read | Lab 1 |
| `tools/extract-form/` | Creates an outline from your own form's PDF | Lab 1, own form only |
| `docs/form-spec-template.md` | Layout for the form spec | Lab 1 |
| `docs/user-story.md` | Offline copy of the Azure DevOps user story | Lab 2 |
| `docs/ontario-design-system.md` | Where to find the Ontario Design System and how to add it | Lab 3 |
| `docs/accessibility-checklist.md` | AODA and WCAG 2.0 Level AA checklist for a form | Lab 3 |
| `docs/address-lookup-contract.md` | Contract for the shared address lookup service you build | Lab 4 |
| `docs/testing-with-playwright.md` | How to test the form with Playwright and axe | Lab 4 |

## What you add

| Path | What it is |
| --- | --- |
| `docs/form-spec.md` | What your form asks and the rules it applies |
| `docs/story.md` | The user story from Azure DevOps |
| `app/` | Your web application |
| `services/address-lookup/` | Your address lookup service |
| `docs/a11y-findings.md`, `docs/handoff.md` | Your accessibility findings and hand-off note |

## Details for the day

| Item | Value |
| --- | --- |
| Azure DevOps organization and project | To be confirmed |
| Work item numbers for the user stories | To be confirmed |
| Help channel | To be confirmed |

## Rules

- Sign in with your OPS account only.
- Made-up data only. Never type real personal information.
- Use approved tools only: this kit and MCP servers from the ITOD registry.
- Do not push or deploy what you build, and do not submit anything to AEM or another OPS system.
- Read what Copilot changed before you keep it.

Forms are published by the Government of Ontario, © King's Printer for Ontario.
