import {test,expect} from '@playwright/test'
test('check box',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const option1=page.locator('//input[@value="option-1"]')
//await option1.check()
await option1.click()
const status=await option1.isChecked()
console.log(status)
await expect(option1).toBeChecked()
})

test('check box1',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const option2=page.locator('//input[@value="option-2"]')
//await option2.check()
await option2.click()
await option2.click()
/*const status=await option2.isChecked()
console.log(status)
await expect(option2).toBeChecked()*/
})

test('check box2',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const option4=page.locator('input[value="option-4"]')
await option4.check()
await option4.check()
})

test('check box3',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const option3=page.locator('//input[@value="option-3"]')
//await option3.check()
await option3.uncheck()
})

test('check box4',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const option2=page.locator('//input[@value="option-2"]')
//await option2.isVisible()
if(await option2.isVisible())
{
    console.log("option2 is visible")
    await option2.check()
}
else{
    console.log("option2 is not visible")
}
})

test('checkbox5',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const option1=page.locator('//input[@value="option-1"]')
//await option1.isVisible()
//await option1.isEnabled()
if(await option1.isVisible()&&await option1.isEnabled())
{
    console.log("option1 is visible and enabled")
    await option1.check()
}
else{
    console.log("option1 is not visible and enabled ")
}
})

test.only('singlechecboxdemo',async({page})=>{
await page.goto('https://selenium.qabible.in/check-box-demo.php')
const checkbox=page.locator('input[id="gridCheck"]')
await checkbox.check()
const checkbox1=page.locator('//input[@id="check-box-one"]')
await checkbox1.check()
const checkbox2=page.locator('input[id="check-box-two"]')
await checkbox2.check()
const checkbox3=page.locator('input[id="check-box-three"]')
await checkbox3.check()
const checkbox4=page.locator('input[id="check-box-four"]')
await checkbox4.check()
const selectall=page.locator('//input[@id="button-two"]')
await selectall.click()
})




