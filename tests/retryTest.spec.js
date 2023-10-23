const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

// Doc : https://playwright.dev/docs/pom
test('Page Object Model Test', async ({ page }) => {
  // Login
  const login = new LoginPage(page);
  await login.gotoLoginPage('https://www.demoblaze.com/index.html');
  await login.login('pavanol', 'test@123');
  await page.waitForTimeout(3000);

  // Home
  const home = new HomePage(page);
  await home.addProductToCart("Nexus 6");
  await page.waitForTimeout(3000);
  await home.gotoCart();

  // // Cart
  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart('Nexus 6');
  expect(status).toBe(true);
});
