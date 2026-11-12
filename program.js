let a=10
let b=20
let large=a>b?"large":"small"
console.log(large)
//student
let mark=40
let c=60
if(c>=mark)
{
  console.log("pass")
}
else{
    console.log("fail")
}
//login
let username="admin"
let password="1234"
if(username==="admin"&&password==="1234")
{
    console.log("login successfully")
}
else{
    console.log("not login")
}
//divisibe
let k=55
if(k%3===0&&k%5===0)
{
    console.log("both divisible")
}
else{
    console.log("not")
}
//switch
let traffic="green"
switch(traffic)
{
    case "green":
    console.log("go")
    break
    case "red":
        console.log("stop")
        break
    case "yellow":
        console.log("slow")
    break

    default:
        console.log("not")
}
//browser
let browser="chrome"
switch(browser)
{
    case "chrome":
    console.log("chrome")
    break
    case "firefox":
        console.log("firefox")
        break
        case "edge":
            console.log("edge")
            break
            default:
                console.log("not")
}
//create a function addition that adds 10 and 20 and print the result
function add(a,b)
{
    console.log(a+b)
}
add(10,20)
//create a function find even that checks whether 25 is even or odd
function even(x)
{
    if(x%2===0)
    {
        console.log("even")

    }
    else{
        console.log("odd")
    }
}
even(25)
//create a fn display numbers that print numbers from 1 to 10
function num()
{
    for(let i=1;i<=10;i++)
    {
        console.log(i)
    }
}
num()
//create a parameterised fn find largest that accept two numbers and print the largest number
function para(c,d)
{
    if(c>d)
    {
        return c
    }
    else{
        return d
    }
}
console.log(para(30,40))
//create a parameterised fn square that returns the square of number
function square(h)
{
    let s1=h*h
    return s1
}
console.log(square(8))
//create an arrow fn that accept two numbers and returns their sum
const arrow1=(m,n)=>
{
    return m+n
}
console.log(arrow1(7,8))
//create an arrow fn that accept two numbers and returns the remainder
const remainder=(u,v)=>
{
    let w=u%v
    return w
}
console.log(remainder(18,5))
//create an arrow fn that accept anumber checks whether its a prime number
const prime=(z)=>
{
    let count=0
    for(let j=1;j<=z;j++)
{
    if(z%j===0)
    {
     count++
    }
}
    if(count===2)
    {
      console.log("prime")
    }
    else{
        console.log("not")
    }
    

} 
prime(5)
