import test from "@playwright/test";

test("File download with event listener",async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")

    //create a promise

    const filedownload=page.waitForEvent('download')

    //perform the action

    await page.getByText("Download",{exact:true}).click()
    //exact:true - Whether to find the exact match, case-sensitive and whole string.

    //resolve the promise

    const download=await filedownload

    //set the path of your file to be downloaded

    await download.saveAs("downloads/"+download.suggestedFilename())
    //downloads - folder name , suggestedFilename() -(Suggest some file name)
})