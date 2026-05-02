const { test, expect } = require('@playwright/test');
const path = require('path');

const filePath = 'file://' + path.resolve(__dirname, '../index.html');

test('message is hidden before button click', async ({ page }) => {
  await page.goto(filePath);
  const message = page.locator('#message');
  await expect(message).toHaveCSS('opacity', '0');
});

test('clicking the button reveals the message', async ({ page }) => {
  await page.goto(filePath);
  const message = page.locator('#message');
  const button = page.locator('#reveal-btn');

  // Message not visible before click
  await expect(message).toHaveCSS('opacity', '0');

  // Click the button
  await button.click();

  // Wait for CSS transition and check opacity
  await expect(message).toHaveCSS('opacity', '1', { timeout: 2000 });

  // Verify the text content
  await expect(message).toContainText('Hello from CircleCI!');
});
