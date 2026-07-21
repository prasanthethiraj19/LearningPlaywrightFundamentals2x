import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    // ① Single — searchable
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
    await page.locator("#rs-single").click();
    await page.getByText("Selenium").click()
    // await page.pause();

    // ②  Multi — chips with remove
    await page.locator("#rs-multi").click();
    await page.getByText("Mocha", { exact: true }).click();
    await page.getByText("TestNG", { exact: true }).click();
    await page.keyboard.press("Escape");
    // await page.pause();

    // ③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByText("accessibility", { exact: true }).click();
    await page.getByText("visual-regression", { exact: true }).click();
    await page.keyboard.press("Escape");
    //await page.pause();


    // 4 Grouped
    await page.locator("#rs-grouped").click();
    await page.getByText("AWS", { exact: true }).click();
    // await page.pause();


    await page.locator("#rs-async").click();
    await page.getByTestId('rs-async-input').fill('che');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Chennai');
    await page.getByRole('option', { name: 'Chennai' }).click();
    // await page.pause();

    const submissionOP = await page.locator("#select-output").textContent();
    if (submissionOP) {
        const data = JSON.parse(submissionOP);
        console.log(`Single: ${data["rs-single"]}`);
        console.log(`Multi: ${data["rs-multi"].join(", ")}`);
        console.log(`Creatable: ${data["rs-creatable"].join(", ")}`);
        console.log(`Grouped: ${data["rs-grouped"]}`);
        console.log(`Async: ${data["rs-async"]}`);
        // await page.pause();

        // console.log(submissionOP);
    }


});