import test from '@playwright/test'

import dotenv from'dotenv'
//set the path of env file

dotenv.config({path:`utils/QA.env`})

test("Read from env file",async({page})=>{

    let user=process.env.LT_Username as string //assertion in typescript
    let pass=process.env.LT_Password as string

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",user)
    await page.fill("#password",pass)
   await page.click(".decorativeSubmit")
})