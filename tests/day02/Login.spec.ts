import test from "@playwright/test"

test("Login Test", async({page})=>{

    await page.goto("https://ecommerce-playground.lambdatest.io/")

    await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')

    await page.click('//*[@id="widget-navbar-217834"]/ul/li[6]/ul/li[1]/a/div/span')

    await page.waitForTimeout(4000)
})