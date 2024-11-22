import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Lab/);
});

test('can login', async ({ page }) => {
  await page.goto('https://saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  // Click the get started link.
  await page.locator('#login-button').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText('Products')).toBeVisible();

});

test('fail login', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
  
    await page.locator('#user-name').fill('a');
    await page.locator('#password').fill('a');
  
    // Click the get started link.
    await page.locator('#login-button').click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByText('Username and password do not match any user in this service')).toBeVisible();
  
  });