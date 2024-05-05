import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow();
  await page.goto('https://chministries.org/');
  await page.locator('#menu-item-37').getByRole('link', { name: 'Programs' }).click({timeout: 2000});
  await page.getByRole('link', { name: 'explore your options' }).click();
  await page.getByRole('button', { name: 'Explore Combinations' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('main').getByRole('link', { name: 'CHM Gold' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'LEARN MORE' }).click();
  await page1.getByText('Faith-based healthcare').click();
  await page1.getByText('Any age or stage').click();
  await page1.locator('#menu-item-1784').getByRole('link', { name: 'Health and Wellness' }).click();
});