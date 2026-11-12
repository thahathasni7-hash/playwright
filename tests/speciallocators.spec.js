/*special locators in playwright are build in locator methods such as getByRole(),getByText(),
getByLabel() and getByPlaceholder() that help us locate elements using user-facing properties and accessibility information
they make automation scripts more readable and maintainable*/

/*getByRole()-is a special locator in playwright used to locate a webelement based on its accessible role

syntax
page.getByRole('role') or
page.getByRole('role',{name:'accessiblename'})*/

import {test,expect} from '@playwright/test'
test('speciallocators:getByRole',async({page})=>{
const showmessage=page.getByRole('button',{name:'Show Message'})
})

/* getByText() is a special locator in playwright used to locate an element based on the visible text displayed on the web page
syntax
page.getByText('text') */

test('getByText',async({page})=>{
const gettotal=page.getByText('Get Total')
})

/*getByLabel()-is a special locator used to locate form elements such as inputfield,checkbox and radiobutton using their associated label text
syntax-
page.getByLabel('label text')*/

test('getByLabel',async({page})=>{
 const entermessage=page.getByLabel('Enter Message')   
    })

/*getByPlaceholder() is a special locators in playwright used to locate an input element using its placeholder text 
syntax
page.getByPlaceholder('placeholder text')*/

test('getByPlaceholder',async({page})=>{
const message=page.getByPlaceholder('Message')
})

/*getByAltText() is a sppecial locator in playwright used to locate an element using its alt attribute
syntax page.getByAltText('alt text')*/

test('getByAltText',async({page})=>
{
const logo=page.getByAltText('logo')
})

/*getByTitle() is a special locator in playwright used to locate an element using its title attribute
syntax
page.getByTitle('title text')

eg:- <button title="close">show</button>
*/

test('getByTitle',async({page})=>{
const button=page.getByTitle('close')
})

/*getByTestId() is a special locator in playwright used to locate an element using a testid
syntax
page.getByTestId('test-id')

eg:- <button data-testid="login-button">Login</button>
*/

test('getByTestId',async({page})=>{
const button1=page.getByTestId('login-button')
})
