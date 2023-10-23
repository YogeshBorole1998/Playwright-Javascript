const { test } = require('@playwright/test');

test('Handling Hidden Items in Dropdown : https://playwright.dev/docs/input', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator("//a[.='PIM']").click();
    await page.locator("//div[@class='oxd-grid-4 orangehrm-full-width-grid']/div[6]//div[@class='oxd-select-text-input']").click();

    await page.waitForTimeout(3000);
    const options = await page.$$("//div[@role='listbox']//span");

    for (let option of options) {
        const jobTitle = await option.textContent();
        console.log(jobTitle);

        if (jobTitle.includes('QA Engineer')) {
            await option.click();
            break;
        }
    }

    await page.close();
});
