const { test, expect } = require('@playwright/test');

// Doc : https://playwright.dev/docs/test-reporters 

test('Test-1', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page).toHaveTitle('STORE');
});

test('Test-2', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  await expect(page).toHaveTitle('Your Store');
});

test('Test-3', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await expect(page).toHaveTitle('nopCommerce demo store');
});
