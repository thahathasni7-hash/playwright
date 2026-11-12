import {test,expect} from '@playwright/test'
test('titlevalidation',async({page})=>{
await page.goto('https://selenium.qabible.in')
const title=await page.title()//display the title
console.log(title)
await expect(page).toHaveTitle(title)//to validate the title

})

test.only('url validation',async({page})=>{
await page.goto('https://selenium.qabible.in')
const url=page.url()
console.log(url)
await expect(page).toHaveURL(url)
})