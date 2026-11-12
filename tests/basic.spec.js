import {test,expect} from '@playwright/test'
//@playwright/test-official playwright test runner used to write execute and validate
//test-used to create testcase
//expect-used to validate
test('URL launch',async({browser})=>{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto('https://www.flipkart.com/')
})
//async-mark a fn as asynchronous
//await-wait for an asynchronous operations to finish
//browser-playwright fixture-a fixture in playwright is a reusable setup mechanism that provide a required environment to a test 
//playwright provide built in fixtures such as page,browser,context and request
//fixtures improves code reusability,reduce duplicate set up code and make test scripts easier to maintained
//browser-provides the browser instance
//context-provides a browser context or version(like incognito-means a clear browser env with no cookies or history)
//page-provides a browser page or tab
//request-used for API testing

test('url launch shortcut',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
})

/*playwright is an opensource automation testing framework developed by microsoft
it is mainly used to automate an test web appln
playwright can automate:mouse action,keyboard action,forms and i/p,multiple window or tab
alerts or dialogs,frame,screenshot capturing,video capturing,assertion(using validation),API testing,visual testing
playwright support chrome,firefox,webkit(safari)
languages-js,ts,java,python,.net

playwright.config.js-is the central configuration file in a playwright project
it is used to manage setting such as test directly,browser,time out,screenshot,video,report and other test execution options*/

/*webelements
webelements  are the building block of a web page,representing individual element such as button,links,textetc
in playwright automation webelements are used to interact with a web page,enabling actions like clicking button or links,entering text into inputfield etc*/

/*locator
it is used in playwright to find an interact with the webelements*/

/*playwright provides several built in locator method such as getByRole(),getByText(),getByLabel(),getByPlaceholder(),getByAltText(),getByTitle(),getByTestId()
we can also use page.locator() with css selectors or xpath to identify elements*/

/*syntax general locator
const webelementname=page.locator('locatorvalue')*/

