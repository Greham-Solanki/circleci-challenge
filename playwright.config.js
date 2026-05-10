// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 15000,
  reporter: [
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['html']
  ],
  use: { headless: true },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ],
});
