const { test, expect } = require('@playwright/test');

test('Handling Calender | Date Picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // // Type as appropriate format
    // await page.fill('#datepicker', '10/05/2024');
    // await page.waitForTimeout(5000);

    // date picker
    const year = '2024';
    const month = 'June';
    const date = '11';

    await page.click('#datepicker'); // opens calender
    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear == year && currentMonth == month) {
            break;
        }

        await page.locator('[title="Next"]').click(); // click on next btn
        // await page.locator('[title="Prev"]').click(); // click on Previous btn
    }

    /*
    // date selection using loop
    const dates = await page.$$("//a[@class='ui-state-default']");
    for (const dte of dates) {
        if (await dte.textContent() == date) {
            await dte.click();
            break;
        }
    }
    */

    // date selection without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`);


    await page.waitForTimeout(5000);
    await page.close();
});
