import test from "@playwright/test";

test("storage state",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/login")

    await page.fill("#username","DemoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    await page.getByText("CRM/SFA").click()

    //How to store this information

    await page.context().storageState({path:"utils/LoginStorage.json"})
})