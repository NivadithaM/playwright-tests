import test from "@playwright/test";

test("Handle frame with Frame Object",async({page})=>{

    //how to handle single frame with Frame Object

    await page.goto("https://www.leafground.com/frame.xhtml")

    const firstFrame= page.frame({url:"https://www.leafground.com/default.xhtml"})
    await firstFrame?.locator("#Click").click()

    //how to handle nested frames with frame object

    const nestedFrames=page.frame({name:"frame2"})
    await nestedFrames?.locator("#Click").click()
})