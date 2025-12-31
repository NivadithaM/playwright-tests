import test from "@playwright/test";

test.use({storageState:"utils/LoginStorage.json"})

test("Test Annotation only",async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main?")
    await page.locator("//a[text()='Leads']").click()
    console.log(await page.title())
})

test.skip("Test Annotation skip",async({page})=>{
    await page.goto("https://www.facebook.com/")
})

test.fail("Test Annotation fail",async({page})=>{
    await page.goto("https://www.google.com/")
})

test.fixme("Test Annotation Fixme",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/login")

    await page.fill("#username","DemoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    await page.getByText("CRM/SFA").click()
})

test("Test annotation info",async({page})=>{
    test.info().annotations.push({type:"Smoke",description:"Checking the information"})

   await page.goto("https://www.google.com/")
})