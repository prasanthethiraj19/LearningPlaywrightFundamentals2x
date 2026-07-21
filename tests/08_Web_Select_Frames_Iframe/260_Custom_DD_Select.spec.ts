import { test, expect } from '@playwright/test';


test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    // open the dropdown
    await page.getByTestId("lang-trigger").click();
    await page.getByRole('option', { name: 'TypeScript' }).click();
    //   await page.getByText("JavaScript").click();

    await page.getByTestId("framework-trigger").click();
    await page.getByRole('option', { name: 'Svelte' }).click();

    await page.getByTestId('experience-trigger').click();
    await page.getByText("Senior (7+ years)", { exact: true }).click();

    await page.getByTestId("dropdown-save").click();
    const submissionOP = await page.locator("#dropdown-output").textContent();
     if (submissionOP) {
      const data = JSON.parse(submissionOP);
      console.log(`Language: ${data["dropdown-language"]}`);
      console.log(`Framework: ${data["dropdown-framework"]}`);
      console.log(`Experience: ${data["dropdown-experience"]}`);
    //   console.log(submissionOP);
    }

    await page.pause();


});