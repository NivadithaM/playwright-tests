import test from "@playwright/test";

test.only('Label', async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(2000)

    await page.getByLabel("Username").fill("DemoSalesManager")
    await page.waitForTimeout(3000)

})