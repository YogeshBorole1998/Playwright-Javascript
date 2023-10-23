const { test, expect } = require('@playwright/test');

/**
 * In Soft Assertion suppose any one assertion get failed then it will exceute the next assertion or continue rest of the code.
 */

test('Soft Assertion: https://playwright.dev/docs/test-assertions#soft-assertions', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');

  await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register'); // page has url
  await expect.soft(page).toHaveTitle('nopCommerce demo store'); // this is failed scenario but still next steps will execute bcz of soft assert.

  const logo = page.locator("//img[@alt='nopCommerce demo store']");
  await expect.soft(logo).toBeVisible(); // element is visible

  // Note : Much More Assertions will be there we want to see in suggestions & Documentations.
});
