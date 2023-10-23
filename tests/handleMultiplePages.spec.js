const { test, expect, chromium } = require('@playwright/test');

test('Handling Multiple Pages OR Windows : https://playwright.dev/docs/pages', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    // Create a page.
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log('No of Pages Created: ', allPages.length);

    // Navigate explicitly, similar to entering a URL in the browser.
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    await page2.goto('https://www.google.com/');
    await expect(page2).toHaveTitle('Google');
});

test('Handling New Pages : https://playwright.dev/docs/pages#handling-new-pages', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    // Create a page.
    const page1 = await context.newPage();
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    // Start waiting for new page before clicking. Note no await.
    const pagePromise = context.waitForEvent('page');
    // Click on link that opens in a new window or tab.
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle('OrangeHRM HR Software | OrangeHRM');

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    await browser.close();
});
