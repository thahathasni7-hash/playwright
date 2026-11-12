import {test,expect} from '@playwright/test'
test('radiobuttonhandling',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const green=page.locator('//input[@value="green"]')
await green.check()
//await green.click()
})

test('radiobuttonhandling2',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//const blue=page.getByText('Blue')
const blue=page.locator('//input[@value="blue"]')
//await blue.check()
await blue.click()
const status=await blue.isChecked()//check whether blue radiobutton is selected
console.log(status)
})

test('radiobuttonvalidation',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const blue=page.locator('//input[@value="blue"]')
await blue.click()
await expect(blue).toBeChecked()
})

test('radiobuttondemo',async({page})=>{
await page.goto('https://selenium.qabible.in/radio-button-demo.php')
const male=page.locator('//input[@id="inlineRadio1"]')
const showselectedvalue=page.locator("//button[text()='Show Selected Value']")
await male.check()
await showselectedvalue.click()
const status=await male.isChecked()
console.log(status)
await expect(male).toBeChecked()
})

test('radiobuttondemo1',async({page})=>{
await page.goto('https://selenium.qabible.in/radio-button-demo.php')
const female=page.locator('//input[@id="inlineRadio2"]')
const showselectedvalue=page.locator('//button[@id="button-one"]')
await female.check()
await showselectedvalue.click()
const status=await female.isChecked()
console.log(status)
await expect(female).toBeChecked()
})

test('form submit',async({page})=>{
await page.goto('https://selenium.qabible.in/form-submit.php')
const firstname=page.locator('//input[@id="validationCustom01"]')
await firstname.fill("thasni")
const lastname=page.locator('//input[@id="validationCustom02"]')
await lastname.fill("thaha")
const username=page.locator('//input[@id="validationCustomUsername"]')
await username.fill("thasnithaha")
const city=page.locator('//input[@id="validationCustom03"]')
await city.fill("tvm")
const state=page.locator('//input[@id="validationCustom04"]')
await state.fill("kerala")
const zip=page.locator('//input[@id="validationCustom05"]')
await zip.fill("123")
const agree=page.locator('//input[@type="checkbox"]')
await agree.check()
const submitform=page.locator("//button[text()='Submit form']")
await submitform.click()
})

/*check()-select radiobutton
click-select radiobutton
isChecked()-return true or false/check whether the radiobutton is selected
toBeChecked-validation
isVisible()-check the radiobutton is visible or not
isEnabled()-verify the radiobutton is enabled or not
isDisabled()-verify the radiobutton is disabled or not*/

test('radiobuttondemo2',async({page})=>{
await page.goto('https://selenium.qabible.in/radio-button-demo.php')
const female=page.locator('//input[@id="inlineRadio2"]')
//await female.isVisible()
if(await female.isVisible())
{
    console.log("female radiobutton is visible")
    await female.check()
}
else{
    console.log("female radiobutton is not visible")
}
})

test('radiobuttondemon3',async({page})=>{
await page.goto('https://selenium.qabible.in/radio-button-demo.php')
const male=page.locator('input[id="inlineRadio1"]')
const showselectedvalue=page.locator('button[id="button-one"]')
//await male.isVisible()
//await male.isEnabled()
if(await male.isVisible()&&await male.isEnabled())
{
    console.log("male radiobutton is enable and visible")
    await male.check()
}
else{
    console.log("male radio button is not visible")
}
await showselectedvalue.click()
})

test.only('group radiobutton demo',async({page})=>{
await page.goto('https://selenium.qabible.in/radio-button-demo.php')
const patientgender=page.locator('//input[@id="inlineRadio21"]')
await patientgender.check()
const patientagegroup=page.locator('input[id="inlineRadio23"]')
await patientagegroup.check()
const getresults=page.locator("//button[text()='Get Results']")
await getresults.click()
})


