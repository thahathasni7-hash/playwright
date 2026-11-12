/*mouse events in playwright are used to perform actions that a user normally performs with amouse
such as click,double click,right click,mouse over,drag and drop*/
 import {test,expect} from '@playwright/test'
 test('right click',async({page})=>{
await page.goto('https://selenium.qabible.in/drag-drop.php')
await page.locator("//span[text()='Draggable n°1']").click({button:'right'})

})

test('mouse hover',async({page})=>{
await page.goto('https://selenium.qabible.in/drag-drop.php')
await page.locator('a[id="others"]').hover()
})

test('double click',async({page})=>{
await page.goto('https://selenium.qabible.in/drag-drop.php')
await page.locator("//h4[text()='Draggable Items List']").dblclick()
})

test.only('drag and drop',async({page})=>{
await page.goto('https://selenium.qabible.in/drag-drop.php')
await page.locator("//span[text()='Draggable n°2']").dragTo(page.locator('//div[@dropzone="move"]'))
})