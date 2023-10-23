const { test, expect } = require('@playwright/test');

test('Handling Checkboxes : https://playwright.dev/docs/input#checkboxes-and-radio-buttons', async ({ page }) => {

    await page.goto('https://only-testing-blog.blogspot.com/');

    // single checkbox
    await page.locator("(//input[@type='checkbox'])[8]").check();
    // await page.check("//div[@id='primary']//input[1]");
    await expect(page.locator("(//input[@type='checkbox'])[8]")).toBeChecked();
    expect(await page.locator("(//input[@type='checkbox'])[8]").isChecked()).toBeTruthy();

    // multiple checkboxes
    const multipleCheckboxes = ["(//input[@type='checkbox'])[7]", "(//input[@type='checkbox'])[8]", "(//input[@type='checkbox'])[9]"];

    for (let checkbox of multipleCheckboxes) { // select multiple checkboxes
        await page.locator(checkbox).check();
    }

    await page.waitForTimeout(5000);

    for (let checkbox of multipleCheckboxes) { // unselect multiple checkboxes which are already selected
        if (await page.locator(checkbox).isChecked()) {
            await page.locator(checkbox).uncheck();
        }
    }

    await page.waitForTimeout(5000);
});
