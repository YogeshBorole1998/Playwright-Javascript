const { test } = require('@playwright/test');

test('Mouse Hover : https://playwright.dev/docs/input#mouse-click', async ({ page }) => {

    await page.goto('https://demo.opencart.com/');

    // Approach -1 
    const desktopSection = await page.locator("//a[normalize-space()='Desktops']");
    const macElement = await page.locator("//a[normalize-space()='Mac (1)']");

    await desktopSection.hover();
    await macElement.hover();

    await page.waitForTimeout(5000);
    await page.close();
});
