import { test, expect } from '@playwright/test';

test.use({ permissions: ['geolocation'] });

test('SpiceJet Ticket Booking', async ({ page }) => {
    await page.goto('https://www.spicejet.com/', { waitUntil: 'networkidle' });

    await page.getByTestId('to-testID-origin').getByRole('textbox').fill('Ch');
    await page.getByText('ChennaiChennai International AirportMAA').click();

    await page.getByTestId('to-testID-destination').getByRole('textbox').fill('b');
    await page.getByText('BengaluruKempegowda International AirportBLR').click();

    await page.getByTestId('undefined-month-July-2026').getByText('29').click();

    const fromLoca = await page.getByTestId('to-testID-origin').getByRole('textbox').inputValue();
    console.log(fromLoca);
    const toLoca = await page.getByTestId('to-testID-destination').getByRole('textbox').inputValue();
    console.log(toLoca);
    const departureDate = await page.getByTestId('departure-date-dropdown-label-test-id').textContent();
    console.log(departureDate);

});