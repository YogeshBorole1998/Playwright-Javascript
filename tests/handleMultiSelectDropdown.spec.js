const { test, expect } = require('@playwright/test');

test('Handling Multiselect Dropdown : https://playwright.dev/docs/input#select-options', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select multiple options from the multi select dropdown
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

    // Assertions : 
    // 1. check number of options in dropdown
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(5);

    // 2. check number of options in dropdown - Using JS Array
    const allOptions = await page.$$('#colors option');
    console.log('Number of options available: ', allOptions.length);
    await expect(allOptions.length).toBe(5);

    // 3. check presence of value in the dropdown 
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();

    await page.waitForTimeout(5000);
    await page.close();
});
