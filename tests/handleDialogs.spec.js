const { test, expect } = require('@playwright/test');

test('Handling Dialogs - Alerts : https://playwright.dev/docs/dialogs', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Alert Handling OR Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.click('//button[normalize-space()="Alert"]');
    await page.waitForTimeout(5000);
    await page.close();
});

test('Handling Dialogs - Confirm : https://playwright.dev/docs/dialogs', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // close by using OK Btn
        // await dialog.dismiss(); // close by using Cancel Btn
    })

    await page.click('//button[normalize-space()="Confirm Box"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000);
    await page.close();
});

test('Handling Dialogs - Prompt : https://playwright.dev/docs/dialogs', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Yogesh');
    })

    await page.click('//button[normalize-space()="Prompt"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Yogesh! How are you today?')
    await page.waitForTimeout(5000);
    await page.close();
});
