const { test } = require('@playwright/test');

test('Mouse Right Click : https://playwright.dev/docs/input#mouse-click', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    // Approach -1 
    const rightClickMeBtn = await page.locator("//span[@class='context-menu-one btn btn-neutral']");
    await rightClickMeBtn.click({ rightClickMeBtn: 'right' });

    await page.waitForTimeout(5000);
    await page.close();
});
