/*hoisting is a javascript behaviour where declarations are processed before execution of their scope
var is initialized to undefined,let and const remain in accessible in the temporal dead zone and fn declaration can be call
before they appear in the code*/
//var
console.log(name)
var name="thasni"
console.log(name)
//let
/*console.log(a)
let a=10//temporal dead zone(TDZ) the period between entering this scope and reaching the declaration is called temporal dead zone
console.log(a)*/
//const
/*console.log(b)
const b=15//TDZ we get reference error*/
//function
display()
function display()
{
    console.log("hi")
}
