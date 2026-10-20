import { chromium } from "playwright";
import fs from "node:fs/promises";

const baseUrl = process.argv[2] ?? "http://localhost:3005";
const output = process.argv[3] ?? "/tmp/life-assessment";
const sizes = [{ name: "375", width: 375, height: 1000 }, { name: "768", width: 768, height: 1100 }, { name: "1440", width: 1440, height: 1100 }];
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });

for (const size of sizes) {
  const context = await browser.newContext({ viewport: { width: size.width, height: size.height } });
  await context.addInitScript(() => localStorage.setItem("life_assessment_email", "visual-test@example.com"));
  const page = await context.newPage();
  await page.goto(`${baseUrl}/assessment`, { waitUntil: "networkidle" });
  await assertNoHorizontalScroll(page, `hero ${size.name}`);
  await page.screenshot({ path: `${output}/hero-${size.name}.png`, fullPage: true });
  const start = page.getByRole("button", { name: /Find My Number|Start Assessment|Resume/ });
  await start.click();
  await page.waitForTimeout(250);
  await assertNoHorizontalScroll(page, `question ${size.name}`);
  await page.screenshot({ path: `${output}/question-${size.name}.png`, fullPage: true });
  await completeAssessment(page);
  await assertNoHorizontalScroll(page, `results ${size.name}`);
  await page.screenshot({ path: `${output}/results-${size.name}.png`, fullPage: true });
  await context.close();
}

async function assertNoHorizontalScroll(page, label) {
  const dimensions = await page.evaluate(() => ({ width: window.innerWidth, scrollWidth: document.documentElement.scrollWidth }));
  if (dimensions.scrollWidth > dimensions.width) throw new Error(`${label} has horizontal scroll: ${dimensions.scrollWidth} > ${dimensions.width}`);
}

await browser.close();

async function completeAssessment(page) {
  const started = Date.now();
  for (let step = 0; step < 60; step += 1) {
    if ((await page.getByText(/Your LIFE expectancy/i).count() && await page.locator("#add-years").count()) || await page.getByText("Your LIFE Score", { exact: true }).count()) {
      await fs.writeFile(`${output}/timing.txt`, `${Date.now() - started}\n`);
      return;
    }
    const heading = (await page.locator("h2").first().textContent().catch(() => "")) ?? "";
    const radios = page.locator('input[type="radio"]');
    if (await radios.count()) {
      let choice = 0;
      if (/biological sex/i.test(heading)) choice = 1;
      if (/cigarette-smoking/i.test(heading)) choice = 2;
      if (/moderate-to-vigorous/i.test(heading)) choice = 0;
      if (/hours of sleep/i.test(heading)) choice = Math.max(0, (await radios.count()) - 1);
      await radios.nth(choice).check({ force: true });
      await page.waitForTimeout(240);
      continue;
    }
    const numberInputs = page.locator('input[type="number"]');
    if (await numberInputs.count()) {
      if (/height/i.test(heading)) {
        await numberInputs.nth(0).fill("5"); await numberInputs.nth(1).fill("5");
      } else if (/age/i.test(heading)) await numberInputs.first().fill("50");
      else if (/weight/i.test(heading)) await numberInputs.first().fill("220");
      else if (/alcohol/i.test(heading)) await numberInputs.first().fill("20");
      else await numberInputs.first().fill("1");
      await page.getByRole("button", { name: "Next", exact: true }).click();
      await page.waitForTimeout(80);
      continue;
    }
    const textInput = page.locator('input[type="text"]');
    if (await textInput.count()) {
      await textInput.first().fill("Alex");
      await page.getByRole("button", { name: "Next", exact: true }).click();
      continue;
    }
    const continueButton = page.getByRole("button", { name: /Continue|Calculate|View My Results|See My Results|See Results/ }).last();
    if (await continueButton.count()) {
      await continueButton.click(); await page.waitForTimeout(2100); continue;
    }
    throw new Error(`Unable to advance assessment at step ${step}: ${heading}`);
  }
  throw new Error("Assessment did not complete");
}
