import { test, expect } from '@playwright/test';

test('test', async ({ page }, testInfo) => {
  await page.goto('http://www.youtube.com');
});