import { Page } from 'playwright';
import { expect } from '@playwright/test';

export async function playwrightTest(page: Page) {
    await page.goto('https://www.google.com/');
    await page.locator('//*[@id="APjFqb"]').fill('testowo');
    await page.locator('//html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center/input[1]').click();
    await expect(page.locator('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3')).toBeVisible();
}