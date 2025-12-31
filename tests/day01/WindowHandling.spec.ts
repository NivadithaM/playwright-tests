import test, { chromium } from "@playwright/test";

test("Multiple context",async()=>{

    //launch the browser
    const browser=await chromium.launch()

    //open the window
    const context=await browser.newContext()

    //open page1
    const page1=await context.newPage()
    await page1.goto("https://www.google.com/")
    await page1.waitForTimeout(3000)

    //open page2
    const page2=await context.newPage()
    await page2.goto("https://www.leafground.com/frame.xhtml")
    await page2.waitForTimeout(2000)
})