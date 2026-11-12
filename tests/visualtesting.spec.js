/*visualtesting-in playwright verifies the visual appearance of a webpage by comaparing the current
screenshot with a previously saved baseline screenshot
for a static page,capture the baseline using toHaveScreenshot(),the run the test again to detect unexpected changes
1.color changes
2.layout issues
3.alignment issue
4.font changes
5.missing or extra element
6.space issue etc

how does visual testing work
step 1.capture the baseline screenshot
take the first screenshot of the page
this becomes the expected appearance,call the baseline screenshot

step 2.run the test again
playwright captures a new screenshot of the same page

step 3.compare screenshots
playwright compares the new screenshot with the baseline and reports visual difference
*/

import {test,expect} from '@playwright/test'
test('visual testing',async({page})=>{
await page.goto('https://www.saucedemo.com/')
await page.waitForLoadState('networkidle')
await expect(page).toHaveScreenshot('sourcedemo.png',{threshold:0.2})

})
/*0-strict(no difference allowed)
0.1-very small difference allowed
0.2-small difference allowed
1-large difference allowed*/

/*test.only('visual',async({page})=>{
await page.goto('https://demoqa.com/')
await page.waitForLoadState('network idle')
await expect(page).toHaveScreenshot('demoqa.png',{threshold:0.2})
})*/