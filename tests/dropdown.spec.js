import {test,expect} from '@playwright/test'
test('dropdown-byindex',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const java=page.locator('//select[@id="dropdowm-menu-1"]')
//index
//syntax-await webelementname.selectOption({index:value})
await java.selectOption({index:2})
})

test('dropdown-byvalue',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const eclipse=page.locator('//select[@id="dropdowm-menu-2"]')
//value
//syntax-await webelementname.selectOption({value:'attribute value'})
await eclipse.selectOption({value:'maven'})
})

test('dropdown-text',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const html=page.locator('//select[@id="dropdowm-menu-3"]')
//text
//syntax-await webelement.selectOption({label:'text'})
await html.selectOption({label:'JavaScript'})
})

/*custom dropdown
test.only('dropdown-text',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const java=page.locator('//div[@id="dropdowm-menu-1"]')
await java.click()
const python=page.locator('//option[@value="python"]')
await python.click()
})*/

test('dropdown-byvalue1',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const java=page.locator('select[id="dropdowm-menu-1"]')
await java.selectOption({value:'sql'})
})
//practice
test.only('dropdown1',async({page})=>{
await page.goto('https://selenium.qabible.in/select-input.php')
const color=page.locator('//select[@id="single-input-field"]')
await color.selectOption({index:1})
})