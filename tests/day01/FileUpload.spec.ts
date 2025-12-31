import test from "@playwright/test";

test("Upload file with input tag and type is file",async({page})=>{
    
    await page.goto("https://www.leafground.com/file.xhtml")

    await page.locator("//span[text()='Choose']/following-sibling::input").first()

    .setInputFiles("utils/LoginData.csv")
    await page.waitForTimeout(4000)
})


test("Upload file with Event listner",async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")

    //event listner
    //create promise

    const fileupload=page.waitForEvent('filechooser')

    //perform the action
     await page.locator("//span[text()='Choose']/following-sibling::input").first().click()

     //resolve the promise
     const fileup=await fileupload

     //set the file you want to upload
    await fileup.setFiles("utils/LoginValue.json")


})