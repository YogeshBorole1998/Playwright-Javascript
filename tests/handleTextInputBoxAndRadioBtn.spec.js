const { test, expect } = require('@playwright/test');

test('Handle Actions - Text input Box & Radio Buttons: https://playwright.dev/docs/input', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    // Handle inputBox - first name

    const firstNameInputBox = page.locator("//input[@id='FirstName']");
    await expect(firstNameInputBox).toBeVisible();
    await expect(firstNameInputBox).toBeEmpty();
    await expect(firstNameInputBox).toBeEditable();
    await expect(firstNameInputBox).toBeEnabled();

    await firstNameInputBox.fill('Yogesh');
    // await page.fill("//input[@id='FirstName']", 'Yogesh'); 

    // Handle RadioButton 
    
    // await page.locator("//input[@id='gender-male']").check();
    await page.check("//input[@id='gender-male']");
    await expect(page.locator("//input[@id='gender-male']")).toBeChecked();
    expect(page.locator("//input[@id='gender-female']").isChecked()).toBeTruthy(); // male radio btn
    expect(await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy(); // female radio btn

    await page.waitForTimeout(5000);
    await page.close();
});
