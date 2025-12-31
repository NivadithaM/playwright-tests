import test from "@playwright/test";

test("Handle Window using Sequential Approach",async({context,page})=>{

    await page.goto("https://www.flipkart.com/")

    const search=page.locator("//input[@class='Pke_EE']")
    await search.fill("Phone")
    await search.press("Enter")

    //create a promise - Event Listner
    await page.waitForTimeout(5000)
    const createPromise=context.waitForEvent('page')

    //click on the action
    
    await page.locator("(//div[@class='KzDlHZ'])[1]").click()

    //resolve(Switch the control to child page) the promise - to access the element in the child window, we need to resolve

    const childPage= await createPromise

    await page.waitForTimeout(5000)

    console.log(await childPage.title())

    await page.waitForTimeout(2000)

    //get the price of the phone

    const price= await childPage.locator("//div[@class='Nx9bqj CxhGGd']").innerText()
    console.log(price)

    //close the child page
    await childPage.close()

    //Clear the searched item in the parent page to check whether it is switched to parent page
    await page.locator("//input[@class='zDPmFV']").clear()

    await page.waitForTimeout(3000)

})