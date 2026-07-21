import { test, expect, chromium } from '@playwright/test';

test('MMT Ticket Booking', async () => {
  const context = await chromium.launchPersistentContext(
    'C:\\Users\\Prasanth\\AppData\\Local\\Google\\Chrome\\User Data',
    {
      channel: 'chrome',
      headless: false,
      args: ['--disable-http2'],
    }
  );
  const page = await context.newPage();
  await page.goto('https://www.makemytrip.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.keyboard.press('Escape');
  await page.locator("#fromCity").fill('chenn');
  await page.pause();
  await context.close();
});
