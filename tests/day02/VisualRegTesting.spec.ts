import {test,expect} from"@playwright/test"

test("Visual Testing",async({page})=>{

    await page.goto("https://www.testleaf.com/")

    const scrnshot= await page.screenshot()

    expect(scrnshot).toMatchSnapshot()
})