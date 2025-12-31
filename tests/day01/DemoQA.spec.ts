import test from "@playwright/test";

test('Demo QA',async({page})=>{
   // go to leaftaps page
   await page.goto("https://demoqa.com/text-box")
   await page.waitForTimeout(3000)
   //enter the full name
   await page.locator("[id='userName']").fill("Nivaditha")
   await page.waitForTimeout(3000)
   //enter email id
   await page.locator("#userEmail").fill("xxx@gmail.com")
   await page.waitForTimeout(3000)

   //enter the temp address
   await page.locator("#currentAddress").fill("abc nagar, pudukkotai")
   await page.waitForTimeout(3000)

   //enter permenent address
   await page.locator("#permanentAddress").fill("abc nagar, pudukkotai")
   await page.waitForTimeout(3000)

   //click submit button
   await page.locator(`text="Submit"`).click
   await page.waitForTimeout(3000)

   //get the title of the page
   const pageTitle=await page.title()
   console.log("Page title is:"+pageTitle)
   await page.waitForTimeout(5000)

})