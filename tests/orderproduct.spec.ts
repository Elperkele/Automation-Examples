import { test, expect } from '@playwright/test';
import config from '../playwright.config'

test('Oder a product from the site', async ({ page }, testInfo) => {
  await test.step('Navigate to homepage', async () => {
    await page.goto(`${config.baseURL}`);
  });
  await test.step('Open product page by selecting the first available product', async () => {
    await page.locator(`//html/body/app-root/div/app-overview/div[3]/div[2]/div[1]/a[1]`).click();
  });
  await test.step('Increase item quantity by five', async () => {
    await page.locator('//*[@id="btn-increase-quantity"]').click({clickCount: 5});
  });
  await test.step('Click buy button to add items to the cart', async () => {
    await page.locator('//*[@id="btn-add-to-cart"]').click();
  });
  await test.step('Open checkout page', async () => {
    await page.locator('//*[@id="navbarSupportedContent"]/ul/li[5]/a/i').click();
  });
  await test.step('Proceed to checkout', async () => {
    await page.locator('//html/body/app-root/div/app-checkout/aw-wizard/div/aw-wizard-step[1]/app-cart/div/div/button').click();
  });
  await test.step('Input valid credentials and proceed with login process', async () => {
    await page.locator('//*[@id="email"]').fill('customer@practicesoftwaretesting.com');
    await page.locator('//*[@id="password"]').fill('welcome01');
    await page.locator('//html/body/app-root/div/app-checkout/aw-wizard/div/aw-wizard-step[2]/app-login/div/div/div/div/form/div[3]/input').click();
  });
  await test.step('Continue with checkout process after logging in', async() => {
    await page.locator('//html/body/app-root/div/app-checkout/aw-wizard/div/aw-wizard-step[2]/app-login/div/div/div/div/button').click();
  });
  await test.step('Fill out billing address data and proceed to the next step', async() => {
    await page.locator('//*[@id="address"]').fill('Długa 1/2');
    await page.locator('//*[@id="city"]').fill('Warszawa');
    await page.locator('//*[@id="state"]').fill('VistulaState');
    await page.locator('//*[@id="country"]').fill('Polska');
    await page.locator('//*[@id="postcode"]').fill('01-123');
    await page.locator('//html/body/app-root/div/app-checkout/aw-wizard/div/aw-wizard-step[3]/app-address/div/div/div/div').click();
  });
  await test.step('Select payment method', async () => {
    await page.locator('//*[@id="payment-method"]').selectOption('Gift Card');
    await page.locator('//html/body/app-root/div/app-checkout/aw-wizard/div/aw-wizard-completion-step/app-payment/div/div/div/form/div[2]/input[1]').fill('12345');
    await page.locator('//html/body/app-root/div/app-checkout/aw-wizard/div/aw-wizard-completion-step/app-payment/div/div/div/form/div[2]/input[2]').fill('54321');
    await page.locator('//html/body/app-root/div/app-checkout/aw-wizard/div/aw-wizard-completion-step/app-payment/div/div/div/div').click();
    await expect(page.locator('//html/body/app-root/div/app-checkout/aw-wizard/div/aw-wizard-completion-step/app-payment/div/div/div/form/div[3]/div')).toBeVisible();
  });
  await test.step('Take the screenshot after finishing the whole ordering process', async() =>{
    const finalscreenshot = await page.locator('body').screenshot({ path: 'tests/utilities/finalscreenshot.png' });
    await testInfo.attach('Final screenshot', { body: finalscreenshot, contentType: 'image/png' });
  });
});