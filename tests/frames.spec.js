import {test,expect} from '@playwright/test'
test('frames',async({page})=>{
await page.goto('https://demoqa.com/frames')
const frameelement=page.frameLocator('#frame1')
console.log(await frameelement.locator('#sampleHeading').textContent())

})
/*what is a frame in playwright?
A frame is an html document embedded inside another webpage,usually through an iframe element

How do you handle frames in playwright?
we can use page.frameLocator() to locate element inside an iframe and perform actions such as clicking,filling text and validating text

What is the diff btw page.locator() and page.frameLocator()?
page.locator()-locate element in the main page
page.frameLocator()-locate element inside an iframe */