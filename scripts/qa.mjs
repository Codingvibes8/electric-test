import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const base = process.env.QA_URL ?? "http://localhost:3001";
const outDir = path.resolve("qa");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});

const consoleErrors = [];

async function preparePage(viewport, label) {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  page.on("console", (message) => {
    if (
      message.type() === "error" &&
      !message.text().includes("WebSocket connection")
    ) {
      consoleErrors.push(`[${label}] console: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    consoleErrors.push(`[${label}] pageerror: ${error.message}`);
  });

  await page.goto(base, { waitUntil: "networkidle", timeout: 60_000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);
  return { context, page };
}

const { context: desktopContext, page: desktop } = await preparePage(
  { width: 1440, height: 1000 },
  "desktop",
);

const desktopMetrics = await desktop.evaluate(() => {
  const h1 = document.querySelector("h1");
  const sections = Array.from(document.querySelectorAll("main > section")).map(
    (section) => ({
      id: section.id || null,
      height: Math.round(section.getBoundingClientRect().height),
      top: Math.round(section.getBoundingClientRect().top + window.scrollY),
    }),
  );

  const overflowing = Array.from(document.querySelectorAll("body *"))
    .filter((element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.width > 0 && (rect.right > window.innerWidth + 2 || rect.left < -2)
      );
    })
    .slice(0, 20)
    .map((element) => ({
      tag: element.tagName,
      className: String(element.className).slice(0, 120),
      left: Math.round(element.getBoundingClientRect().left),
      right: Math.round(element.getBoundingClientRect().right),
    }));

  return {
    title: document.title,
    h1: h1?.textContent?.trim(),
    h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    pageHeight: document.documentElement.scrollHeight,
    sections,
    overflowing,
    imageCount: document.images.length,
    loadedImages: Array.from(document.images).filter(
      (image) => image.complete && image.naturalWidth > 0,
    ).length,
    jsonLd: Array.from(
      document.querySelectorAll('script[type="application/ld+json"]'),
    ).map((script) => {
      try {
        return JSON.parse(script.textContent || "{}");
      } catch {
        return { error: "invalid json" };
      }
    }),
    navSingleLine:
      document.querySelector("header .container-page")?.getBoundingClientRect()
        .height ?? null,
  };
});

await desktop.screenshot({
  path: path.join(outDir, "desktop-hero.png"),
  fullPage: false,
});
await desktop.screenshot({
  path: path.join(outDir, "desktop-full.png"),
  fullPage: true,
});

const sectionIds = [
  "trust",
  "quote",
  "services",
  "standard",
  "why",
  "projects",
  "areas",
  "reviews",
  "pricing",
  "faq",
  "contact",
];

const sectionShots = {};
for (const id of sectionIds) {
  const locator = desktop.locator(`#${id}`);
  if (await locator.count()) {
    await locator.scrollIntoViewIfNeeded();
    await desktop.waitForTimeout(250);
    const box = await locator.boundingBox();
    if (box) {
      await locator.screenshot({
        path: path.join(outDir, `section-${id}.png`),
        animations: "disabled",
      });
      sectionShots[id] = Math.round(box.height);
    }
  }
}

await desktop.locator("footer").scrollIntoViewIfNeeded();
await desktop.waitForTimeout(250);
await desktop.screenshot({
  path: path.join(outDir, "footer.png"),
  fullPage: false,
});

// Postcode check
await desktop.locator("#postcode-check").scrollIntoViewIfNeeded();
await desktop.locator("#postcode-check").fill("GU7 1AA");
await desktop.getByRole("button", { name: "Check", exact: true }).click();
await desktop.waitForTimeout(400);
const postcodeCovered = await desktop
  .locator("#areas [aria-live='polite']")
  .getByText("is on our patch")
  .isVisible();

await desktop.locator("#postcode-check").fill("SW1A 1AA");
await desktop.getByRole("button", { name: "Check", exact: true }).click();
await desktop.waitForTimeout(400);
const postcodeOutside = await desktop
  .locator("#areas [aria-live='polite']")
  .getByText("isn't on our regular route")
  .isVisible();

// Accordion
const faqButtons = desktop.locator("#faq button[aria-expanded]");
await faqButtons.nth(1).click();
await desktop.waitForTimeout(400);
const secondFaqOpen = await faqButtons
  .nth(1)
  .evaluate((element) => element.getAttribute("aria-expanded") === "true");

// Before/after
const range = desktop.locator("#before-after-range");
await range.scrollIntoViewIfNeeded();
await range.fill("80");
const rangeValue = await range.inputValue();

// Quote form
await desktop.locator("#quote").scrollIntoViewIfNeeded();
await desktop.locator("#quote-name").fill("Test Lead");
await desktop.locator("#quote-phone").fill("07700 900123");
await desktop.locator("#quote-postcode").fill("GU1 4TE");
await desktop.locator("#quote-service").selectOption({ label: "EV chargers" });
await desktop.locator("#quote-details").fill("QA test submission.");
await desktop.locator('input[name="consent"]').check();
await desktop.getByRole("button", { name: /Get my free quote/i }).click();
await desktop.waitForTimeout(2000);
const formSuccess = await desktop
  .getByText("Request received")
  .isVisible()
  .catch(() => false);

// Mobile
const { context: mobileContext, page: mobile } = await preparePage(
  { width: 390, height: 844 },
  "mobile",
);

const mobileMetrics = await mobile.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
  pageHeight: document.documentElement.scrollHeight,
  navHeight: document
    .querySelector("header .container-page")
    ?.getBoundingClientRect().height,
  h1FontSize: document.querySelector("h1")
    ? getComputedStyle(document.querySelector("h1")).fontSize
    : null,
}));

await mobile.screenshot({
  path: path.join(outDir, "mobile-hero.png"),
  fullPage: false,
});
await mobile.screenshot({
  path: path.join(outDir, "mobile-full.png"),
  fullPage: true,
});

const mobileMenuButton = mobile.getByRole("button", { name: "Open menu" });
await mobileMenuButton.click();
await mobile.waitForTimeout(500);
const menuVisible = await mobile
  .getByRole("dialog", { name: "Site menu" })
  .isVisible();
await mobile.keyboard.press("Escape");
await mobile.waitForTimeout(500);
const menuClosed = !(await mobile
  .getByRole("dialog", { name: "Site menu" })
  .isVisible()
  .catch(() => false));
const focusReturned = await mobile.evaluate(
  () => document.activeElement?.getAttribute("aria-label") === "Open menu",
);

await mobile.locator("#quote").scrollIntoViewIfNeeded();
await mobile.waitForTimeout(400);
await mobile.screenshot({
  path: path.join(outDir, "mobile-quote.png"),
  fullPage: false,
});
await mobile.locator("#projects").scrollIntoViewIfNeeded();
await mobile.waitForTimeout(400);
await mobile.screenshot({
  path: path.join(outDir, "mobile-projects.png"),
  fullPage: false,
});

const navOverflow = await desktop.evaluate(() => {
  const header = document.querySelector("header");
  return {
    height: header?.getBoundingClientRect().height,
    navLinks: document.querySelectorAll('header nav[aria-label="Primary"] a')
      .length,
  };
});

const result = {
  desktopMetrics: {
    title: desktopMetrics.title,
    h1: desktopMetrics.h1,
    h1FontSize: desktopMetrics.h1FontSize,
    scrollWidth: desktopMetrics.scrollWidth,
    clientWidth: desktopMetrics.clientWidth,
    pageHeight: desktopMetrics.pageHeight,
    navSingleLine: desktopMetrics.navSingleLine,
    sections: desktopMetrics.sections,
    overflowing: desktopMetrics.overflowing,
    imageCount: desktopMetrics.imageCount,
    loadedImages: desktopMetrics.loadedImages,
    jsonLdTypes: desktopMetrics.jsonLd.flatMap((item) =>
      Array.isArray(item["@graph"])
        ? item["@graph"].map((node) => node["@type"])
        : item["@type"],
    ),
  },
  mobileMetrics,
  interactions: {
    postcodeCovered,
    postcodeOutside,
    secondFaqOpen,
    rangeValue,
    formSuccess,
    menuVisible,
    menuClosed,
    focusReturned,
  },
  navOverflow,
  consoleErrors,
  sectionShots,
};

fs.writeFileSync(
  path.join(outDir, "qa-report.json"),
  JSON.stringify(result, null, 2),
);

console.log(JSON.stringify(result, null, 2));

await desktopContext.close();
await mobileContext.close();
await browser.close();
