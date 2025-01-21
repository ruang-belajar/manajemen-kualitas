import { test, expect } from '@playwright/test';
import * as crypto from "node:crypto";

// run:
// npx playwright test automationexercise.spec.ts --project=chromium -ui

test('automation exercise 1', async ({ page }) => {
    // generate random domain untuk email
    const domain = crypto.randomBytes(20).toString('hex');

    // init data yang akan di test
    const email = 'afawerw@'+domain+'.com';
    const password = 'budirewkqrwe';
    const name = 'budi';
    const firstname = "budi";
    const lastname = "raharjo";
    const company = "PT ABC";
    const address = "Jalan ABC";
    const address2 = "Jalan ABC";
    const country = "India";
    const state = "Delhi";
    const city = "Delhi";
    const zipcode = "98342";
    const mobile = "098342324";

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

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    await page.locator("#id_gender1").check();
    await page.locator("#password").fill(password);
    await page.locator("#days").selectOption("1");
    await page.locator("#months").selectOption("1");
    await page.locator("#years").selectOption("2021");

    // 10. Select checkbox 'Sign up for our newsletter!'
    await page.locator("#newsletter").check();

    // 11. Select checkbox 'Receive special offers from our partners!'
    await page.locator("#optin").check();

    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await page.locator("#first_name").fill(firstname);
    await page.locator("#last_name").fill(lastname);
    await page.locator("#company").fill(company);
    await page.locator("#address1").fill(address);
    await page.locator("#address2").fill(address2);
    await page.locator("#country").selectOption(country);
    await page.locator("#state").fill(state);
    await page.locator("#city").fill(city);
    await page.locator("#zipcode").fill(zipcode);
    await page.locator("#mobile_number").fill(mobile);

    // 13. Click 'Create Account button'
    await page.locator('[data-qa="create-account"]').click();

    // 14. Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();

});
