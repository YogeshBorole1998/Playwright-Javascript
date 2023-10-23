const { test } = require('@playwright/test');

test('Keyboard Actions : https://playwright.dev/docs/api/class-keyboard', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill('Welcome Yogesh');
    // await page.type('[name="text1"]', 'Welcome to Automation');


    // Press Ctrl + A
    await page.keyboard.press('Control+A');

    // Press Ctrl + C
    await page.keyboard.press('Control+C')

    // Press Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Press Ctrl + V
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);
    await page.close();
});
