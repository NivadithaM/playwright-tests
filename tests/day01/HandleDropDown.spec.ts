import test from "@playwright/test";

test("dd with select tag",async({page})=>{
    
    await page.goto("https://leafground.com/select.xhtml;jsessionid=node0rjwf3dd29g8m15xxa57mbkog64034791.node0")
    
    //To print how many tools are Present:
    //".ui-selectonemenu>option" --> selects all the options who are direct children of .ui-selectonemenu
    const value=page.locator(".ui-selectonemenu>option")

    const ddCount= await value.count()

    console.log(ddCount)

    //To iterate the no of tools and Print the values:
    for(let i=0;i<ddCount;i++){

        console.log(await value.nth(i).innerText())

    }
})