const { test, expect } = require('@playwright/test');

test('Upload Single File : https://playwright.dev/docs/input#upload-files', async ({ page }) => {

    await page.goto('https://www.foundit.in/');

    await page.waitForSelector('.mqfihd-upload');
    await page.locator('.mqfihd-upload').click();

    // await page.locator('#file-upload').setInputFiles('tests\\Upload_Data\\Demo.pdf');
    // await page.locator('#file-upload').setInputFiles('tests/Upload_Data/Demo.pdf');

    await page.waitForTimeout(5000);
});

// test.only means only this test will run other tests in the same file will be skipped.
test.only('Upload Multiple Files : https://playwright.dev/docs/input#upload-files', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['tests/Upload_Data/Demo.pdf', 'tests/Upload_Data/Demo_2.pdf']);

    await page.waitForTimeout(3000);
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Demo.pdf');
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('Demo_2.pdf');
    await page.waitForTimeout(3000);

    // Removing files
    await page.locator('#filesToUpload').setInputFiles([]);
    await page.waitForTimeout(3000);

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
    await page.waitForTimeout(3000);
});
