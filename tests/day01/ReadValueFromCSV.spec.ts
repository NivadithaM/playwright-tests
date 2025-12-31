import test from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs'
import path from "path";

const value=parse(fs.readFileSync(path.join(__dirname,"../../utils/LoginData.csv")),{
    columns:true,
   // skip_empty_lines:true
})

for(let data of value){

test(`Login value with csv ${data.TestID}`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",data.UserName)
    await page.fill("#password",data.Password)
    await page.click(".decorativeSubmit")
    
})
}