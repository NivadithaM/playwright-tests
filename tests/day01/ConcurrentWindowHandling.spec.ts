import test from "@playwright/test"
import { title } from "process"

test("Multiple WindowHandling",async({context,page})=>{

    await page.goto("https://www.leafground.com/window.xhtml")

    // click on multiple window

     //how to switch to the particular window

    //create promise (store it in the array format)
     
    const [multipleWindow]= await Promise.all([

        context.waitForEvent('page'),
        page.locator("//span[text()='Open Multiple']").click()
])

//check how many windows are opened
       
   const allPages= multipleWindow.context().pages()
   console.log(allPages.length)

   // to get the title of all the windows
   let tab:any

   for(let i=0;i<allPages.length;i++){

    await page.waitForTimeout(5000)
    const title=await allPages[i].title()
    console.log(title)
   

   if(title==='Dashboard'){

    //resolve the promise
    tab=allPages[i]
   
   }
}

//perform the action
await tab.locator("//input[contains(@class,'ui-inputfield ui')]").fill("mnivaditha@gmail.com")
   

    
   
    
})