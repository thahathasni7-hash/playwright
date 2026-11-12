import {test,expect} from '@playwright/test'
test('general locators',async({page})=>{
await page.goto('https://selenium.qabible.in/simple-form-demo.php')

//const webelementname=page.locator('locatorvalue')
const message=page.locator("#single-input-field")
await message.fill("hello")
const showmessage=page.locator("#button-one")
await showmessage.click()
})

test('CSS selectors',async({page})=>{
//id=#id
const message=page.locator("#single-input-field")
const showmessage=page.locator("#button-one")
const value=page.locator("#value-a")
const showdate=page.locator("#button-one")

//class=.class
const dates=page.locator(".form-control")
const draganddrop=page.locator(".card-body")

//tag and attribute=tagname[attribute='value']
const message1=page.locator('input[placeholder="Message"]')
const message2=page.locator('input[id="single-input-field"]')
const value1=page.locator('input[id="value-a"]')
const date=page.locator('button[id="button-one"]')
})

test('xpath',async({page})=>{
const message3=page.locator('//input[@id="single-input-field"]')
const message4=page.locator('//input[@placeholder="Message"]')
const date=page.locator('//input[@name="daterange"]')
const date1=page.locator('//input[@id="single-input-field2"]')

//text()
const showmessage1=page.locator("//button[text()='Show Message']")
const gettotal=page.locator("//button[text()='Get Total']")
const startdownload=page.locator("//button[text()='Start Download']")
const submitdata1=page.locator("//button[text()='Submit data']")

//contains-attribute
const message5=page.locator("//input[contains(@id,'single-i')]")
const showmessage2=page.locator("//button[contains(@id,'button-o')]")
const message6=page.locator('//input[contains(@placeholder,"Messa")]')
const draganddrp1=page.locator('//div[contains(@class,"card-b")]')

//contains-text()
const showmessage3=page.locator("//button[contains(text(),'Show M')]")
const gettotal1=page.locator("//button[contains(text(),'Get To')]")
const draganddrop2=page.locator("//div[contains(text(),'Drag & D')]")
const startdownload1=page.locator("//button[contains(text(),'Start Do')]")

//starts-with->attribute
const message7=page.locator('//input[starts-with(@id,"single")]')
const download=page.locator('//button[starts-with(@id,"downloadButton")]')
const yourmessage=page.locator('//div[starts-with(@id,"message-o")]')
const total=page.locator('//div[starts-with(@id,"message-t")]')

//starts-with->text()
const submitdata=page.locator("//button[starts-with(text(),'Submit')]")
const gettotal2=page.locator("//button[starts-with(text(),'Get')]")
const startdownload2=page.locator("//button[starts-with(text(),'Start')]")
const showmessage4=page.locator("//button[starts-with(text(),'Show')]")

//attribute-and
const message8=page.locator('//input[@class="form-control" and @placeholder="Message"]')
const valueA=page.locator('//input[@class="form-control" and @id="value-a"]')
const valueB=page.locator('//input[@id="value-b" and @placeholder="Enter Value"]')
const date2=page.locator('//input[@type="text" and @id="single-input-field"]')

//text()-and
const showmessage=page.locator('//button[@id="button-one" and text()="Show Message"]')
const gettotal3=page.locator('//button[@id="button-two" and  text()="Get Total"]')
const startdownload3=page.locator('//button[@id="downloadButton" and text()="Start Download"]')
const submitdata2=page.locator('//button[@type="submit" and text()="Submit data"]')

})
/*absolute xpath and relative xpath-two types xpath
absolute-/html/body/section/div/div/div[2]/div[2]/div/div[2]-start from the root node(not recommended as it may break easily)
relative xpath-start from anywhere in the DOM

syntax-relative xpath
//tagname[@attribute='value']

text()
//tagname[text()='value']

contains-syntax

attribute
//tagname[contains(@attribute,'value')]

text
//tagname[contains(text(),'value')]*/

/*syntax-starts-with-attribute
//tagname[starts-with(@attribute,'value')]

text()-starts-with
//tagname[starts-with(text(),'value')]*/

/*syntax-and->using 2 attribute
//tagname[@attribute='value' and @attribute='value']

syntax-and->1 attribute and 1 text
//tagname[@attribute='value' and text()='value']*/

 







