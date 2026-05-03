# CircleCI Support Engineer Challenge: Part 1

A minimal web app with a button interaction, tested with Playwright and built on CircleCI.

## App

Open `index.html` in a browser. Click the **Click Me** button, A message appears.

## Tests

Tests use [Playwright](https://playwright.dev/) and verify:
- The message is hidden before the button is clicked
- Clicking the button reveals the message text

### Run locally

```bash
npm install
npx playwright install --with-deps chromium
npm test
```

## CI

Built and tested automatically on CircleCI via `.circleci/config.yml`.
