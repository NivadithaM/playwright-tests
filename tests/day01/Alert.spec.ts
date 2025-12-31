import {test,expect} from "@playwright/test";

test("Handling Alerts with page.once",async({page})=>{

      await page.goto("https://www.leafground.com/alert.xhtml")

    page.once('dialog',async(dialog)=>{
        const typeOfAlert= await dialog.type()
        console.log(typeOfAlert)

        const text=await dialog.message()
        console.log("Alert text:"+text)

        await dialog.accept()
    });

    
     //simple alert
    await page.locator("//span[text()='Show']").first().click()

    

    

})

test.only("Handling Alerts with Page.on",async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")

    page.on('dialog',async(dialog)=>{

        const text=await dialog.message()
        console.log("Alert text:"+text)
        console.log(await dialog.type())

        await dialog.accept('Nivi')

       // await dialog.dismiss()
        
        

    });

    //simple alert
    await page.locator("//span[text()='Show']").first().click()

    //confirmation alert
    await page.locator("//span[text()='Show']").nth(1).click()

    //Prompt alert
   await page.locator("//span[text()='Show']").nth(4).click()
   
    
})