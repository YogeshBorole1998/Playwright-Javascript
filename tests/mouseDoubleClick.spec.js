const { test, expect } = require('@playwright/test');

test('Mouse Double Click : https://playwright.dev/docs/input#mouse-click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const doubleClickCopyBtn = await page.locator('//button[normalize-space()="Copy Text"]');
    await doubleClickCopyBtn.dblclick();

    const f2 = await page.locator('#field2');
    await expect(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);
    await page.close();
});
