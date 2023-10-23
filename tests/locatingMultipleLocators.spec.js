// const { test, expect } = require('@playwright/test');
import { test } from '@playwright/test' // we can use anything above or this one both correct

async function asyncForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        await callback(array[i], i, array);
    }
}

test('Locating Multiple Locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    // Check Available Links on Webpage
    const availableLinksOnPage = await page.$$('a');
    await asyncForEach(availableLinksOnPage, async (link) => {
        const linkText = await link.textContent();
        console.log(linkText);
    });


    // Check Available Products on Webpage
    await page.waitForSelector('//div[@id="tbodyid"]//div//h4/a');
    const availableProducts = await page.$$('//div[@id="tbodyid"]//div//h4/a');
    const productNames = [];
    for (const productElement of availableProducts) {
        const productName = await productElement.textContent();
        productNames.push(productName);
    }
    console.log('Product Names:', productNames);
});
