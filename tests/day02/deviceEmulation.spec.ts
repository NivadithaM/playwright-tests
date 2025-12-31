import {devices,test} from "@playwright/test"

test.use({

    ...devices['Galaxy A55']
})

test("Device Emulation", async({page})=>{

     page.goto("https://www.leafground.com/")

    await page.waitForTimeout(5000)
})