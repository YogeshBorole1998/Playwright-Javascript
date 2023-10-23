const { test, expect } = require('@playwright/test');

// Doc : https://playwright.dev/docs/api-testing

var userId;

test('Get Users', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');

  console.log('User : ', await response.json());
  expect(response.status()).toBe(200);
});


test('Create Users', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users',
    {
      data: { "name": 'Yogesh', "Job": 'Automation Engineer' },
      headers: { "Accept": "application/json" }
    });

  console.log('Created Data: ', await response.json());
  expect(response.status()).toBe(201);

  var res = await response.json();
  console.log('User ID: ', res.id);
});


test('Update Users', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/' + userId,
    {
      data: { "name": 'Sama Dharma', "Job": 'Software Engineer' },
      headers: { "Accept": "application/json" }
    });

  console.log('Updated Data :', await response.json());
  expect(response.status()).toBe(200);
});


test('Delete Users', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/' + userId);
  expect(response.status()).toBe(204);
});
