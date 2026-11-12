import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/loginpage'
test('verify login with valid credentials',async({page})=>{
const lp=new LoginPage(page)
//const usernamevalue='standard_user'
//const passwordvalue='secret_sauce'
await lp.openApplication()
await lp.clickLogin(usernamevalue,passwordvalue)
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})