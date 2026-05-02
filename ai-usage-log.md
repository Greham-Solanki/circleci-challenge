# AI Usage Log — CircleCI Support Engineer Technical Challenge

All AI assistance was provided by Claude (Anthropic) via claude.ai.

---

## Part 1: Build and Test

**Prompt 1:**
> Help me understand this task [pasted full challenge brief]

*Claude explained the 3 parts, suggested an order of attack, and outlined what each deliverable requires.*

**Prompt 2:**
> This is the kubeconfig.yaml [...] I want you to help me build this and solve this task. Assume you are appearing for the technical challenge in a company interview. I want to perform all the tasks.

*Claude asked clarifying questions (language/framework, test tool, existing accounts), then generated all Part 1 files:*
- `index.html` — plain HTML/JS web app with button and hidden message
- `tests/app.spec.js` — Playwright test verifying button click reveals message
- `playwright.config.js` — Playwright configuration (chromium, headless)
- `package.json` — dependencies
- `.circleci/config.yml` — CircleCI pipeline using Playwright Docker image

**Follow-up / decisions made with AI:**
- Chose `file://` protocol in Playwright tests to avoid needing a local server
- Used CSS `opacity` transition for the reveal effect so Playwright can assert on it reliably
- Used the official `mcr.microsoft.com/playwright` Docker image in CircleCI to avoid manual browser installation issues

---

## Part 2: Kubernetes Troubleshooting

**Prompt:**
> Help me investigate the three Kubernetes clusters using the kubeconfig. Walk me through the commands and document findings.

*Claude provided the investigation strategy and kubectl commands. Actual cluster investigation was performed by running kubectl locally with the provided kubeconfig. Findings were documented based on real cluster output.*

*(Fill in actual findings here after running kubectl commands)*

---

## Part 3: Customer Communication

**Prompt:**
> Write a professional customer support reply to Jo Build explaining how to trigger specific workflows based on file path changes in a monorepo using CircleCI.

*Claude drafted the full reply using CircleCI's Dynamic Configuration feature and the `path-filtering` orb, including a working YAML example with setup config and continue config.*

---

## Notes

- All code was reviewed and understood before submission
- The AI-generated Playwright test approach (asserting CSS opacity) was verified locally
- CircleCI config was validated against the official docs before pushing
