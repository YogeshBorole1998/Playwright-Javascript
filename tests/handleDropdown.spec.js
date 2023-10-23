const { test, expect } = require('@playwright/test');

test('Handling Dropdown : https://playwright.dev/docs/input#select-options', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // // Multiple ways to select option from the dropdown
    // await page.locator('#country').selectOption({ label: 'India' }); // Single selection matching the label
    // await page.locator('#country').selectOption('India'); // Single selection matching the value
    // await page.locator('#country').selectOption({ value: 'uk' }); // Single selection matching the value 
    // await page.locator('#country').selectOption({ index: 2 }); // Single selection matching the index 
    // await page.selectOption('#country', 'India'); // Single selection matching by text

    // Assertions : 
    // 1. check number of options in dropdown - Approach-1
    const options = page.locator('#country option');
    await expect(options).toHaveCount(10);

    // 2. check number of options in dropdown - Approach-2
    const allOptions = page.$$('#country option');
    expect((await allOptions).length).toBe(10);

    // 3. check presence of value in the dropdown - Approach-1
    // Note that this approach will not work if there are multiple values with same name (eg: India)
    const content = await page.locator('#country').textContent();
    expect(content.includes('India')).toBeTruthy();

    // 4. check presence of value in the dropdown - Approach-2 - Understanding purpose
    const presenceOptions = await page.$$('#country option');
    let status = false;
    for (const option of presenceOptions) {
        // console.log(await option.textContent());
        let value = await option.textContent();
        if (value.includes('France')) {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();

    // 5. select option from dropdown using loop 
    for (const option of presenceOptions) {
        let value = await option.textContent();
        if (value.includes('France')) {
            await page.selectOption('#country', value);
            break;
        }
    }

    await page.waitForTimeout(5000);
    await page.close();
});
