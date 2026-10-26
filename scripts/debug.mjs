import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
});
const page = await context.newPage();
const failed = [];
page.on("requestfailed", (request) => {
  failed.push({
    url: request.url(),
    failure: request.failure()?.errorText,
    type: request.resourceType(),
  });
});
page.on("console", (message) => {
  console.log("CONSOLE", message.type(), message.text().slice(0, 300));
});
page.on("pageerror", (error) => console.log("PAGEERROR", error.message));

await page.goto("http://localhost:3001", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(4000);

const info = await page.evaluate(() => ({
  readyState: document.readyState,
  scripts: Array.from(document.scripts).map((script) => script.src).filter(Boolean),
  hasNext: Boolean(window.next),
  reactRoot: Boolean(document.querySelector("#__next")),
  buttons: Array.from(document.querySelectorAll("button")).map((button) => ({
    text: button.textContent?.trim().slice(0, 50),
    aria: button.getAttribute("aria-label"),
    expanded: button.getAttribute("aria-expanded"),
  })),
  dialogCount: document.querySelectorAll('[role="dialog"]').length,
  cssLoaded: Array.from(document.styleSheets).length,
}));

console.log(JSON.stringify(info, null, 2));
console.log("FAILED", JSON.stringify(failed.slice(0, 20), null, 2));

const menu = page.getByRole("button", { name: "Open menu" });
console.log("menu count", await menu.count());
await menu.click();
await page.waitForTimeout(800);
console.log("dialog count after", await page.locator('[role="dialog"]').count());
console.log("expanded after", await menu.getAttribute("aria-expanded").catch(() => "gone"));
console.log(
  "dialog visible",
  await page
    .getByRole("dialog", { name: "Site menu" })
    .isVisible()
    .catch((error) => `ERR ${error.message}`),
);

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(500);
await page.locator("#postcode-check").fill("GU7 1AA");
await page.getByRole("button", { name: "Check", exact: true }).click();
await page.waitForTimeout(500);
const statusText = await page.locator('[aria-live="polite"]').last().innerText();
console.log("STATUS", JSON.stringify(statusText));

await page.screenshot({ path: "qa/debug-mobile.png" });
await browser.close();
