import test from "@playwright/test";

test("Sequential demo",async({context,page})=>{

    //load the url
    await page.goto("https://www.leafground.com/window.xhtml")
    //create promise
    await page.waitForTimeout(5000)
    const createPromise=context.waitForEvent('page')
    //click on the open button

    await page.locator("(//button[contains(@class,'ui-button ui')])[1]").click()

    //resolve the promise
    const childPage= await createPromise

    await page.waitForTimeout(5000)

    // get the titile of the child page
   
    console.log(await childPage.title())

    //enter the message
    await page.waitForTimeout(2000)
    await childPage.locator("#message").fill("Hi how are you")

    //close the child page
    await childPage.close()

    await page.waitForTimeout(3000)
})