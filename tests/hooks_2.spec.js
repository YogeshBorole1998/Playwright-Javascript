/**
 * 1. beforeEach : this hook is executed before each individual test.
 * 2. afterEach : this hook is executed after each individual test.
 * 3. beforeAll : this hook is executed once before any of the tests start running.
 * 3. afterAll : this hook is executed once after all the tests start running.
 */

const { test, expect } = require('@playwright/test');

let page;

// In any hooks we are no able to take page fixture we want to take browser fixture here
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://www.demoblaze.com/index.html');

  // Login
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('//button[normalize-space()="Log in"]').click();
});

test.afterAll(async () => {
  // Logout
  await page.locator('#logout2').click();
});


test('Hooks : Home Page Test : https://playwright.dev/docs/api/class-test', async () => {
  const products = await page.$$('.hrefch');
  expect(products).toHaveLength(9);
});

test('Hooks : Add Product to cart : https://playwright.dev/docs/api/class-test', async () => {
  await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
  await page.locator('//a[normalize-space()="Add to cart"]').click();

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Product added.');
    await dialog.accept();
  })
});
