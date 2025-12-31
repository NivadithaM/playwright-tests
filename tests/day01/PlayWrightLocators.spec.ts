import test from "@playwright/test";

test('Locators',async({page})=>{


    //go to parabank page
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    await page.waitForTimeout(3000)

    // click on admin page
    await page.getByText("Admin Page").click
    await page.waitForTimeout(3000)

    //click on forget info
    await page.getByRole('link',{name:'Forgot login info?'}).click
    await page.waitForTimeout(3000)

    //Click on the image
    await page.getByAltText("ParaBank").click
    await page.waitForTimeout(3000)

    //click on the location
    await page.getByText("Locations").click
     await page.waitForTimeout(3000)


    


})