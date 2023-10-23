// Bootstrap dropdown means not having any select tag in html, we can see button or div tag
const { test, expect } = require('@playwright/test');

test('Handling Bootstrap Dropdown : https://playwright.dev/docs/input#select-options', async ({ page }) => {

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator('.multiselect').click();


    // Assertions : 
    // 1. check number of options in dropdown
    const options = await page.locator('ul>li label input');
    await expect(options).toHaveCount(11);

    // 2. check number of options in dropdown - Using JS Array
    const allOptions = await page.$$('ul>li label input');
    console.log('Number of options available: ', allOptions.length);
    await expect(allOptions.length).toBe(11);

    // 3. select options from the dropdown 
    const availableOptions = await page.$$('ul>li label');

    for (let option of availableOptions) {
        const value = await option.textContent();

        console.log('Dropdown Value is : ', value);

        if (value.includes('Angular') || value.includes('Java')) {
            await option.click();
        }
    }

    // 4. deselect options from the dropdown 

    for (let option of availableOptions) {
        const value = await option.textContent();

        console.log('Dropdown Value is : ', value);

        if (value.includes('HTML') || value.includes('CSS')) {
            await option.click();
        }
    }

    await page.waitForTimeout(5000);
    await page.close();
});
