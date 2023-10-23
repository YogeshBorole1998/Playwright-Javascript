const { test, expect } = require('@playwright/test');
// import{ test, expect } from '@playwright/test' // we can use anything above or this one both correct

test('Locators: https://playwright.dev/docs/locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    // click on loging button - locate single element
    // await page.locator('id=login2').click(); // property as a locator
    await page.click('id=login2'); // we can use below line or this both works same.

    // provide  username - input box
    // await page.locator('#loginusername').fill('pavanol'); // css as a locator
    await page.fill('#loginusername', 'pavanol'); // we can use below line or this both works same.

    // provide password - input box
    await page.fill("input[id='loginpassword']", 'test@123'); // css as a locator

    //click on login button
    await page.click("//button[.='Log in']"); // xpath as a locator

    // verify logout
    const logoutElem = page.locator("//a[@id='logout2']"); // xpath as a locator
    await expect(logoutElem).toBeVisible();
    await page.close();
});
