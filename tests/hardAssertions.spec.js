
const { test, expect } = require('@playwright/test');

/**
 * In Hard Assertion suppose any one assertion get failed then it will not exceute the next assertion or terminate the code.
 */

test('Hard Assertion: https://playwright.dev/docs/test-assertions', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register'); // page has url
  await expect(page).toHaveTitle('nopCommerce demo store. Register'); // page has title
  await expect(page).not.toHaveTitle('nopCommerce demo store'); // page has title- negative

  const logo = page.locator("//img[@alt='nopCommerce demo store']");
  await expect(logo).toBeVisible(); // element is visible

  const searchBar = page.locator('#small-searchterms');
  await expect(searchBar).toBeEnabled(); // element is enabled

  const maleRadioBtn = page.locator('#gender-male');
  const newsLetterCheckbox = page.locator('#Newsletter');
  await maleRadioBtn.click();
  await expect(maleRadioBtn).toBeChecked(); // radio or checkbox is checked
  await expect(newsLetterCheckbox).toBeChecked(); // radio or checkbox is checked
  await newsLetterCheckbox.click();
  await expect(newsLetterCheckbox).not.toBeChecked(); // radio or checkbox is checked

  const registerBtn = page.locator('#register-button');
  await expect(registerBtn).toHaveAttribute('type', 'submit'); // element has attriute

  const registerHeading = page.locator('.page-title h1');
  await expect(registerHeading).toHaveText('Register'); // full text
  await expect(registerHeading).toContainText('Reg'); // actual text

  const emailInput = page.locator('#Email');
  await emailInput.fill('dummy123@domain.com');
  await expect(emailInput).toHaveValue('dummy123@domain.com'); // input has a value

  const dayDropdown = page.locator('select[name="DateOfBirthDay"] option');
  await expect(dayDropdown).toHaveCount(32);
  await expect(dayDropdown).not.toHaveCount(10);

  // Note : Much More Assertions will be there we want to see in suggestions & Documentations.
});
