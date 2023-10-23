const { test } = require('@playwright/test');

test('Mouse Drag & Drop : https://playwright.dev/docs/input#drag-and-drop', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const sourceElement = await page.locator('#box6'); // Rome
    const targetElement = await page.locator('#box106'); // Italy

    // // Approch-1
    // await sourceElement.hover();
    // await page.mouse.down();

    // await targetElement.hover();
    // await page.mouse.up();

    // Approch-2
    await sourceElement.dragTo(targetElement);
    // await page.locator('#box6').dragTo(page.locator('#box106'));

    // Oslo to Norway 
    const oslo = await page.locator('#box1');
    const norway = await page.locator('#box101');

    await oslo.dragTo(norway);


    await page.waitForTimeout(5000);
    await page.close();
});
