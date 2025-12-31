import test, { expect } from "@playwright/test";

// test("Auto Retry",async({page})=>{
//     await page.goto("https://leafground.com/input.xhtml")

//     await expect(page.getByPlaceholder("Babu Manickam")).toBeEnabled()

//     //hard assertion
//     console.log("completed")
// })

// test.only("Soft Assertion",async({page})=>{

//     await page.goto("https://leafground.com/input.xhtml")

//     await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled

//     console.log("Soft Assertion")
// })

test.only("Non Retry Assertion",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    const title=await page.title()
    console.log(title)
 
    const actualTitle="leaftaps - TestLeaf Automation Platform"
    expect.soft(title).toEqual(actualTitle)
    await page.waitForTimeout(3000)
    console.log("Title Verifed")
})

 