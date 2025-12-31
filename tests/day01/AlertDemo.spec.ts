import { test, expect } from '@playwright/test';

test('Handle alert using page.once on LeafGround', async ({ page }) => {
  // 1. Navigate to the LeafGround alerts page
  await page.goto('https://leafground.com/alert.xhtml');

  // 2. Set up a one-time dialog handler (for alert box)
  page.once('dialog', async (dialog) => {
    // Log the alert message for visibility
    console.log(`Alert text: ${dialog.message()}`);
     // Accept the alert (click "OK")
    await dialog.accept();
  });

  // 3. Click the button that triggers a simple alert
  // This button has text 'Show' under "Alert (Simple Dialog)"
  await page.click('button:has-text("Show")');
})