import { chromium } from "@playwright/test";        

async function saveSession(){

 let browser=await chromium.launch({headless:false});
 let context=await browser.newContext();
 let page=await context.newPage();

 await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
 await page.waitForTimeout(1000);

 await page.locator("#user-name").fill("standard_user");
 await page.locator("#password").fill("tta_secret");
await page.locator("#login-button").click();

// await page.getByText("Products").isVisible();
let title = await page.title();
console.log("Title:", title);

await context.storageState({path: "./user-session.json"});
console.log("Session saved to user-session.json");

await page.waitForTimeout(2000);
await browser.close();

}

saveSession();
