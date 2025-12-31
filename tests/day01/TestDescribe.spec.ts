import test from "@playwright/test";

test.use({storageState:"utils/LoginStorage.json"})

test.describe("Test Annotation with test describe",()=>{

    test.describe.configure({mode:"serial",retries:1})

    test("Click Leads",async({page})=>{

        await page.goto("http://leaftaps.com/crmsfa/control/main")

        await page.locator("//a[text()='Lead']").click()

        console.log(await page.title())
    })

    test("Click Accounts",async({page})=>{

        await page.goto("http://leaftaps.com/crmsfa/control/main")

        await page.locator("//a[text()='Accounts']").click()

        console.log(await page.title())
    })
})