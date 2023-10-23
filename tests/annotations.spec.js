const { test } = require('@playwright/test');

// Doc : https://playwright.dev/docs/test-annotations

/*
test.only('Only Test', async () => {
  console.log('This is a test 1...!!');
});
*/


/*
test.skip('Skip Test', async () => {
  console.log('This is a test 2...!!');
});

test('Skip Test', async ({ browserName }) => {
  console.log('This is a test 3...!!');
  if (browserName === 'chromium') {
    test.skip();
  }
});
*/


/*
// This test case will skipped
test('Fixme Test', async () => {
  test.fixme();
  console.log('This is a test 4...!!');
});
*/


/*
test('Fail Test', async () => {
  test.fail(); // Expected
  console.log('This is a test 5...!!');

  // If both expected & actual is failed then test pass
  // expect(1).toBe(1); // Actual
  expect(1).toBe(2); // This time Test Case Passed
});
*/



test('Fail Test', async ({ browserName }) => {
  console.log('This is a test 6...!!');
  if (browserName === 'chromium') {
    test.fail(); // expected
  }
});


/*
test('Slow Test', async ({ page }) => {
  test.slow();
  test.setTimeout(5000);
  console.log('This is a test 7...!!');
  await page.goto('https://www.demoblaze.com/index.html');
});
*/
