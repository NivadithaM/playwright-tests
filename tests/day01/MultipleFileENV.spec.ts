import test from '@playwright/test'

import dotenv from'dotenv'

//to read data from multiple file (create a variable)
const fileRead=process.env.envfile
//set the path of env file

dotenv.config({path:`utils/${fileRead}.env`})

test("Read from env file",async({page})=>{

    let user=process.env.LT_Username as string //assertion in typescript
    let pass=process.env.LT_Password as string
    

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",user)
    await page.fill("#password",pass)
   await page.click(".decorativeSubmit")
})