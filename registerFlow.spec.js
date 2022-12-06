// @ts-check
const { test, expect } = require('@playwright/test');

test('Homepage Register button', async ({ page }) => {
await page.goto("http://localhost:3000")
await page.locator("text=Register").click()
});

test('Register Form', async ({ page }) => {
await page.goto("http://localhost:3000")
await page.locator("text=Register").click()

await page.locator("#name").fill("John")
    await expect(page.locator("#name")).toHaveValue("John")

await page.locator("#surname").fill("Smith")
    await expect(page.locator("#surname")).toHaveValue("Smith")

await page.locator("#DD").fill("21")
    await expect(page.locator("#DD")).toHaveValue("21")

await page.locator(".dropdown-select").first().click()
await page.locator("text=January").click()

await page.locator("#YYYY").fill("1999")
    await expect(page.locator("#YYYY")).toHaveValue("1999")

await page.locator("#phone").fill("0123456789")
    await expect(page.locator("#phone")).toHaveValue("012 345 6789")

await page.getByText("State*").click()
await page.locator("text=Abuja").click()

await page.locator("#email").fill("test@email.com")
    await expect(page.locator("#email")).toHaveValue("test@email.com")

await page.locator("#password").fill("Password123")
    await expect(page.locator("#password")).toHaveValue("Password123")

await page.getByLabel("Confirm Password*").fill("Password123")
    await expect(page.getByLabel("Confirm Password*")).toHaveValue("Password123")


await page.getByText("Lorem ipsum").first().click()
await page.getByText("Lorem ipsum").nth(1).click()
await page.getByText("Lorem ipsum").nth(2).click()


await page.pause()
await page.getByText("SIGN UP").click()

});