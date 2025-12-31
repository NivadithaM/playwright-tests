import test from "@playwright/test";

test('XPath',async({page})=>{

    //launch leaftaps app
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(2000)
    
    // enter the user name
    await page.locator("//input[@id='username']").fill("demoSalesManager")
    await page.waitForTimeout(2000)

    //enter the password
    await page.locator("//input[@id='password']").fill("crmsfa")
    await page.waitForTimeout(2000)

    //click on the login
    await page.locator("//input[@class='decorativeSubmit']").click
    await page.waitForTimeout(2000)

    //click on CRM/SFA
    await page.locator("//a[contains(text(),'/SFA')]").click
    await page.waitForTimeout(2000)

    //click on leads
    await page.locator("//a[text()='Leads']").click
    await page.waitForTimeout(2000)
})
