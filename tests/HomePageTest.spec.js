const { test, expect } = require('@playwright/test');

test('Home Page: https://playwright.dev/docs/intro', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    const pageTitlePromise = page.title(); 
    const pageTitle =  await pageTitlePromise;
    console.log('Page Title is : ', pageTitle); // STORE
    const pageUrl = page.url();
    console.log('Page URL is : ', pageUrl); // https://www.demoblaze.com/

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await page.close();
});
