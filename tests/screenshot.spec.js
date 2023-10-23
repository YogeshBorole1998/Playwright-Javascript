const { test } = require('@playwright/test');

test('Page Screenshot : https://playwright.dev/docs/screenshots', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  await page.screenshot({ path: 'tests/Screenshots/' + Date.now() + 'HomePage.png' })
});

test('Full Page Screenshot : https://playwright.dev/docs/screenshots#full-page-screenshots', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  await page.screenshot({ path: 'tests/Screenshots/' + Date.now() + 'FullPage.png', fullPage: true })
});

test('Element Screenshot : https://playwright.dev/docs/screenshots#element-screenshot', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({ path: 'tests/Screenshots/' + Date.now() + 'Macbook.png' })
});
