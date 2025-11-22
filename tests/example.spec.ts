import { test, expect } from "@playwright/test";

test("has valid period format regex", async ({ page }) => {
  await page.goto("/");

  const text = await page.locator("p").textContent();
  expect(text).toMatch(/Period: \d{2}\/\d{2}\/\d{4} – \d{2}\/\d{2}\/\d{4}/);
});

test("has valid date format with aria snapshot without regex", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator("p")).toMatchAriaSnapshot(`
    - paragraph: "Period: 11/24/2025 – 11/30/2029"
  `);
});
test("has valid date format with aria snapshot", async ({ page }) => {
  await page.goto("/");

  // The colon after "Period" throws the
  // "Nested mappings are not allowed in compact mappings" error
  // How to escape the colon in the yaml snapshot?
  await expect(page.locator("p")).toMatchAriaSnapshot(`
    - paragraph: /Period: \d{2}\/\d{2}\/\d{4} – \d{2}\/\d{2}\/\d{4}/
  `);
});
