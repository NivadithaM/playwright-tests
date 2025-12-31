import test, { chromium } from "@playwright/test";
test('Launch Browser', async()=>{
    //1.launch the browser

    const browser=await chromium.launch({channel:'chrome',headless:false})

    //2.Open the window/context

    const context=await browser.newContext()

    //3.Open the page or tab

    const page=await context.newPage()

    //4.load the url

     await page.goto("https://playwright.dev/docs/intro")
})