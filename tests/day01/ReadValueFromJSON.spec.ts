import test from '@playwright/test'

//read data from json file

import data from '../../utils/LoginValue.json'

for(let val of data){

    test(`json value ${val.TestID}`,async({page})=>{

        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username",val.UserName)
        await page.fill("#password",val.Password)
        await page.click(".decorativeSubmit")
    })
}