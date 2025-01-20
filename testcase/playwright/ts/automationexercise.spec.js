import { test, expect } from '@playwright/test';

// run:
// npx playwright test automationexercise.spec.ts

test('automationexercise test 1', async ({ page }) => {
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto('http://automationexercise.com/');

  // 3. Verify that home page is visible successfully
  await expect(page).toHaveTitle(/Automation Exercise/);

  // 4. Click on 'Signup / Login' button
  await page.locator('[href*="/login"]').click();

  // 5. Verify 'New User Signup!' is visible
  await expect(page.getByText('New User Signup!')).toBeVisible();

  // 6. Enter name and email address
  await page.locator('[data-qa="signup-name"]').fill('budi');
  await page.locator('[data-qa="signup-email"]').fill('afawerw@dsdsfawera.com');

  // 7. Click 'Signup' button
  await page.locator('[data-qa="signup-button"]').click();

  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.getByText('Enter Account Information')).toBeVisible();

});