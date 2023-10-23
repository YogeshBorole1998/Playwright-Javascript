const { test } = require('@playwright/test');

test('Handling Auto Suggest Dropdown : https://playwright.dev/docs/input', async ({ page }) => {

    await page.goto('https://www.redbus.in/');

    await page.locator('#src').fill('Delhi');
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");

    const fromCity = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");

    for (let option of fromCity) {
        const value = await option.textContent();
        console.log(value);

        if (value.includes('Anand Vihar')) {
            await option.click();
            break;
        }
    }

    await page.close();
});
