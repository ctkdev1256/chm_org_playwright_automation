import { test, expect } from "playwright/test";

test('Playwright Automation Framework Demo', async({page}) => {
    await page.goto('https://google.com');

    await expect(page).toHaveTitle('Google');

    // await page.goto('#APjFqb').
})