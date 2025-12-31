import test from "@playwright/test";

test("Axes XPath",async({page})=>{
    
    await page.goto("https://www.myntra.com/men-jeans")

   const fmach= await page.locator("(//label[@class='vertical-filters-label common-customCheckbox']/parent::li)[2]")
   fmach.click()
   await page.waitForTimeout(3000)
})




