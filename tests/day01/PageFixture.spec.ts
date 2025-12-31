import test from "@playwright/test"

test('Page Fixture',async({page})=>{

   await page.goto("https://playwright.dev/docs/intro")
})