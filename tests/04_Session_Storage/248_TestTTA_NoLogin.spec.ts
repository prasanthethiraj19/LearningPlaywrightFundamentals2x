import { test, expect } from "@playwright/test"

test.use({ storageState: "./user-session.json" });

test("go directly to dashboard - no login", async ({ page }) => {
  await test.step("Navigate to bike-light product page", async () => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/inventory-item?id=tta-bike-light");
  });

  await test.step("Verify bike-light URL contains product ID", async () => {
    await expect(page).toHaveURL(/bike-light/);
  });

  await test.step("Confirm page loaded without login", async () => {
    console.log("bike-light page loaded no login required");
    await page.waitForTimeout(3000);
  });
});

test("go directly to dashboard - no login - backpack", async ({ page }) => {
  await test.step("Navigate to backpack product page", async () => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/inventory-item?id=tta-practice-backpack");
  });

  await test.step("Verify backpack URL contains product ID", async () => {
    await expect(page).toHaveURL(/tta-practice-backpack/);
  });

  await test.step("Confirm page loaded without login", async () => {
    console.log("backpack page loaded no login required");
    await page.waitForTimeout(3000);
  });
});
