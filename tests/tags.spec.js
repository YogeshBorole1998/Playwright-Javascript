const { test } = require('@playwright/test');

// Doc : https://playwright.dev/docs/test-annotations#tag-tests

// Bug for this concept : https://github.com/microsoft/playwright/issues/9667

test('Test 1 @sanity', async () => {
  console.log('This is a test 1...!!');
});

test('Test 2 @sanity', async () => {
  console.log('This is a test 2...!!');
});

test('Test 3 @regression', async () => {
  console.log('This is a test 3...!!');
});

test('Test 4 @regression', async () => {
  console.log('This is a test 4...!!');
});

test('Test 5 @sanity@regression', async () => {
  console.log('This is a test 5...!!');
});
