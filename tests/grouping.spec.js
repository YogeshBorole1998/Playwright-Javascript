/**
 * 1. beforeEach : this hook is executed before each individual test.
 * 2. afterEach : this hook is executed after each individual test.
 * 3. beforeAll : this hook is executed once before any of the tests start running.
 * 3. afterAll : this hook is executed once after all the tests start running.
 */

import { test } from '@playwright/test';

test.beforeAll(async () => {
  console.log('This is beforeAll Hook..!!');
});

test.afterAll(async () => {
  console.log('This is afterAll Hook..!!');
});

test.beforeEach(async () => {
  console.log('This is beforeEach Hook..!!');
});

test.afterEach(async () => {
  console.log('This is afterEach Hook..!!');
});

// If i want to run only Group-1 then i will use only keyword OR we can use skip also to another group that we no need to run. & also we can skip the tests also.
test.describe.only('Group-1', () => {
  test('Test 1 : https://playwright.dev/docs/test-annotations', async () => {
    console.log('This is a test 1...!!');
  });

  test('Test 2 : https://playwright.dev/docs/test-annotations', async () => {
    console.log('This is a test 2...!!');
  });
});

test.describe.skip('Group-2', () => {
  test('Test 3 : https://playwright.dev/docs/test-annotations', async () => {
    console.log('This is a test 3...!!');
  });

  test('Test 4 : https://playwright.dev/docs/test-annotations', async () => {
    console.log('This is a test 4...!!');
  });
});
