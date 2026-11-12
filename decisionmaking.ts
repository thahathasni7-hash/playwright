//if
let age:number=20
if(age>=18)
{
    console.log("eligible to vote")
}
console.log("*****even******")
let a:number=20
if(a%2===0)
{
    console.log("even")
}
else{
    console.log("odd")
}
console.log("*****elseif*******")
let num:number=-10
if(num>0)
{
 console.log("positive")
}
else if(num<0)
{
    console.log("negative")
}
else{
    console.log("zero")
}
console.log("******switch******")
let day:number=2
switch(day)
{
    case 1:
        console.log("monday")
        break
    case 2:
        console.log("tuesday")
        break
    case 3:
        console.log("wednesday")
        break
    case 4:
        console.log("thursday")
        break
    case 5:
        console.log("friday")
        break
    case 6:
        console.log("saturday")
        break
    case 7:
        console.log("sunday")
        break
    default:
        console.log("invalid")
}