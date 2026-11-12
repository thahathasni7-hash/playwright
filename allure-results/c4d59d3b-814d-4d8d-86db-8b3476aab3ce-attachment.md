# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginparameterisedjson.spec.js >> login using valid credentials standard_user1 secret_sauce1
- Location: tests\loginparameterisedjson.spec.js:7:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username"
    - textbox "Password"
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import { LoginPage } from '../pages/loginpage'
  3  | import  validlogindata from '../utils/parameterisedtestdata.json'
  4  | for(const data of validlogindata){
  5  | 
  6  | 
  7  | test(`login using valid credentials ${data.username} ${data.password}`,async({page})=>{
  8  | const lp=new LoginPage(page)
  9  | await lp.openApplication(data.username,data.password)
> 10 | await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
     |                    ^ Error: expect(page).toHaveURL(expected) failed
  11 | 
  12 | })
  13 | }
```