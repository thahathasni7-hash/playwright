import {test,expect} from '@playwright/test'
test.only('retry mechanism login',async({page})=>{
await page.goto('https://www.saucedemo.com/')
await page.locator('#user-name').fill('standard_user')
await page.locator('#password').fill('secret_sauce')
await page.locator('#login-button').click()
const url=page.url()
console.log(url)
await expect(page).toHaveURL(url)
})

test('login1',async({page})=>{
await page.goto('https://www.saucedemo.com/')
await page.locator('#user-name').fill('problem_user')
await page.locator('#password').fill('1234')
await page.locator('#login-button').click()
const url=page.url()
console.log(url)
await expect(page).toHaveURL(url)
})

test('login2',async({page})=>{
await page.goto('https://www.saucedemo.com/')
await page.locator('#user-name').fill('thasni')
await page.locator('#password').fill('secret_sauce')
await page.locator('#login-button').click()
})

test('login3',async({page})=>{
await page.goto('https://www.saucedemo.com/')
await page.locator('#user-name').fill('anu123')
await page.locator('#password').fill('897')
await page.locator('#login-button').click()
})
