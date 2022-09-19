import { test, expect } from "@playwright/test";

test("Open Demoqa Page and validate", async ({ page }) => {
  await page.goto("https://shop.demoqa.com/");

  await expect(page).toHaveTitle(
    "ToolsQA Demo Site – ToolsQA – Demo E-Commerce Site"
  );

  //Create a locator and Perform click action
  const mywhishlist = page.locator('//a[text()="My Wishlist"]');
  mywhishlist.click();

  //Verify Url
  await expect(page).toHaveURL("https://shop.demoqa.com/wishlist/");
});
