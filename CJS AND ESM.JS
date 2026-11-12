/*common js(CJS) and ES module(ESM)
in js CJS and ESM are two diff module s/m used to organize and share code
module-a module is a js file that contain variable,fn and class that can be exported and imported into another file
CJS & ESM are two module s/m in js
CJS uses require () and module.exports,while ESM use import and export
ESM are the standardised modern js module s/m and are commonly used in modern appln
CJS:is the older module s/m
ESM:modern js module s/m*/

//example-CJS
Math.js
function add(a,b)
{
return a+b
}
module.exports=add
//app.js
const sum=require("./Math")
console.log(add(2,3))

//example-ESM
Math1.js

export function add1(a,b)//to access the file using the keyword export
{
    return a+b
}
add1.js
import {add1} from "./Math1.js"//import file math1.js
console.log(add1(5,3))



