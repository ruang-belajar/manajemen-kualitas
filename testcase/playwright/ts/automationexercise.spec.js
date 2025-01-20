import { test, expect } from '@playwright/test';

// run:
// npx playwright test automationexercise.spec.ts

test('automation exercise 1', async ({ page }) => {
  var email = 'afawerw@dsdsfawera.com';
  var password = 'budirewkqrwe';
  var name = 'budi';

  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto('http://automationexercise.com/');

  // 3. Verify that home page is visible successfully
  await expect(page).toHaveTitle(/Automation Exercise/);

  // 4. Click on 'Signup / Login' button
  await page.locator('[href*="/login"]').click();

  // 5. Verify 'New User Signup!' is visible
  await expect(page.getByText('New User Signup!')).toBeVisible();

  // 6. Enter name and email address
  await page.locator('[data-qa="signup-name"]').fill(name);
  await page.locator('[data-qa="signup-email"]').fill(email);

  // 7. Click 'Signup' button
  await page.locator('[data-qa="signup-button"]').click();

  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.getByText('Enter Account Information')).toBeVisible();

  await page.locator("#id_gender1").check();
  await page.locator("#passwor").fill(password);
  await page.locator("#uniform-days").selectOption("1");
  await page.locator("#uniform-months").selectOption("1");
  await page.locator("#uniform-years").selectOption("2021");
  await page.locator("#newsletter").check();
  await page.locator("#optin").check();

});