import test from "@playwright/test";

test("Handle Frame",async({page})=>{

//count the frames

     await page.goto("https://www.leafground.com/frame.xhtml")
     
     const allFrames=page.frames()
     console.log(allFrames.length)

     //how to handle frames based on index?
     const firstFrame=allFrames[1]
     console.log("Before frame:"+await firstFrame.locator("#Click").innerText())
     await firstFrame.locator("#Click").click()
     console.log("After frame:"+await firstFrame.locator("#Click").innerText())
     await page.waitForTimeout(3000)

     //Click to fourth frame(Nested frame)
     const fourthFrame=allFrames[4]
     await fourthFrame.locator("#Click").click()
})