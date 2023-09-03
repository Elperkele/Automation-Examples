import { test, expect } from '@playwright/test';

test('test', async ({ page }, testInfo) => {
  await page.goto('http://localhost/L9_Czyz_53275_re2/MainKC/indexKC.php');
  await page.getByRole('heading', { name: 'Konrad Czyż 53275 - "Radosna Zabawa"' }).isVisible();
  await page.getByRole('heading', { name: 'Organizacja imprez - Warszawa ul. Długa 1' }).isVisible();
  await page.getByText('Witamy na stronie firmy "Radosna zabawa" Specjalizujemy się w organizacji imprez').isVisible();
  await page.getByRole('link', { name: 'Strona główna' }).isVisible();
  await page.getByRole('link', { name: 'Zobacz Klientów' }).isVisible();
  await page.getByRole('link', { name: 'Zobacz Płatności' }).isVisible();
  const article_screenshot = await page.locator('body > article').screenshot({ path: 'screenshot.png' });
  await testInfo.attach('Article screenshot', { body: article_screenshot, contentType: 'image/png' });
});