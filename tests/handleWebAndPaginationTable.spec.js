const { test, expect } = require('@playwright/test');

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check();
}

test('Handling Web Table and Pagination Table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // 1. Total Numbers of rows & colums in table
    const columns = await table.locator('thead tr th');
    const rows = await table.locator('tbody tr');

    console.log('Number of Columns: ', await columns.count());
    console.log('Number of Rows: ', await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);
    await page.waitForTimeout(5000);

    // 2. Select checkbox for product 4
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    await matchedRow.locator('input').check();
    await page.waitForTimeout(5000);

    // 3. Select multiple products by re-usable function
    await selectProduct(rows, page, 'Product 1');
    await selectProduct(rows, page, 'Product 3');
    await selectProduct(rows, page, 'Product 5');
    await page.waitForTimeout(5000);

    /* // 4. Print all product details using loop 
    for (let i = 0; i < await rows.count(); i++) {
        // nth function start with 0 because of that we want to make this i as 0. otherwise 1 also fine
        const currentRow = rows.nth(i);
        const tds = currentRow.locator('td');

        for (let j = 0; j < await tds.count() - 1; j++) {

            console.log(await tds.nth(j).textContent());
        }
    }
    */

    // 5. Read data from all the pages in the table
    const pages = await page.locator('.pagination li a');
    console.log('Number of Pages in the Table : ', await pages.count());

    // nth function start with 0 because of that we want to make this p as 0. bcz 0 means it will consider as 1
    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i < await rows.count(); i++) {
            const currentRow = rows.nth(i);
            const tds = currentRow.locator('td');

            for (let j = 0; j < await tds.count() - 1; j++) {

                console.log(await tds.nth(j).textContent());
            }
        }
    }

    await page.waitForTimeout(3000);
    await page.close();
});
