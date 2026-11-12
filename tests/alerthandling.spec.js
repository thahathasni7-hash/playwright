import {test,expect} from '@playwright/test'
test('javascript simple alert',async({page})=>{
await page.goto('https://selenium.qabible.in/javascript-alert.php')
page.on('dialog',async dialog=>{
expect(dialog.message()).toBe('I am a Javascript alert box!')
console.log(dialog.message())//print alert message
console.log(dialog.type())//display which type of alert 
await dialog.accept()
})
const clickme=page.locator('//button[@onclick="jsAlert()"]')
await clickme.click()

})
/*on()-is used to listen core events.when an alert appears,run this function
1.'dialog' (event)-used to detect on listen when an alert appear
2.dialog (object)-used to handle or control the alert
toBe() is used to check whether two values are exactly equal
dialog.message() is used to get the text inside the alert popup*/


test('javascript confirmation alert',async({page})=>{
await page.goto('https://selenium.qabible.in/javascript-alert.php')
page.on('dialog',async dialog=>{
expect(dialog.message()).toBe('Press a button!')
console.log(dialog.message())
console.log(dialog.type())
//await dialog.accept()
await dialog.dismiss()
})
const clickme1=page.locator('//button[@onclick="jsConfirm()"]')
await clickme1.click()
})

test('prompt alert',async({page})=>{
await page.goto('https://selenium.qabible.in/javascript-alert.php')
page.on('dialog',async dialog=>{
expect(dialog.message()).toBe('Please enter your name')
console.log(dialog.message())
console.log(dialog.type())
await dialog.accept('thasni')
//await dialog.dismiss('thasni')
})
const clickprompt=page.locator('//button[@onclick="jsPrompt()"]')
await clickprompt.click()
})

test('alert',async({page})=>{
await page.goto('https://demoqa.com/alerts')
page.on('dialog',async dialog=>{
expect(dialog.message()).toBe('You clicked a button')
console.log(dialog.message())
console.log(dialog.type())
await dialog.accept()
})
const clickme=page.locator('#alertButton')
await clickme.click()

})

test.only('alert1',async({page})=>{
await page.goto('https://demoqa.com/alerts')
page.on('dialog',async dialog=>{
expect(dialog.message()).toBe('Do you confirm action?')
//await dialog.accept()
await dialog.dismiss()
})
await page.locator('#confirmButton').click()
})



