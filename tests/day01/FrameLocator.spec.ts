import test from "@playwright/test";

test("Handle Frame with Frame locator",async({page})=>{

    // how to handle single frame with Frame locator

    await page.goto("https://www.leafground.com/frame.xhtml")

    await page.frameLocator("(//iframe)[1]").locator("#Click").click()

    await page.waitForTimeout(3000)

    // how to handle Nested frames with Frame locator

    await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()

    await page.waitForTimeout(3000)


})