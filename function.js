function sample()
{
    console.log("hello")
}
sample()
//sum
let sum
let a=5
let b=2
function add()
{
    sum=a+b
    console.log(sum)
}
add()
//diff
let diff
let c=10
let d=6
function sub()
{
    diff=c-d
    console.log(diff)
}
sub()
//even

function even()
{
    let i=5
    
    if(i%2===0)
    {
       console.log("even")
    }
    else{

        console.log("not")
    }
}
even()
//large
function large()
{
    let j=20
    let k=10
    if(j<k)
    {
        console.log("large")
    }
    else{
        console.log("small")
    }
}
large()
//print
function count()
{
    for(i=1;i<=10;i++)
    {
        console.log(i)
    }
}
count()
//parameter
function message(yourmessage)
{
 console.log(yourmessage)
}
message("hi")
//add
function queue(x,y)
{
    console.log(x+y)
}
queue(5,6)
//positive
function number(p)
{
    if(p>0)
    {
      console.log(" positive")
    }
    else{
        console.log(" negative")
    }
    
}
number(15)
//negative
function type(d)
{
    console.log(d>0)

}
type(20)
//parameter
function work(u,v)
{
    return u+v
}
console.log(work(5,2))
//large
function large(g,h)
{
    if(g>h)
    {
        return g
    }
    else{
        return h
    }
    
}
console.log(large(20,10))
//arrow
const samplemessage=()=>
{
    console.log("hi")
}
samplemessage()
//parameter
const arrow=(c,t)=>
{
   console.log(c+t)
}
arrow(6,3)
//return
const arrow1=(w,z)=>
{
    return w+z
}
console.log(arrow1(4,3))
//default
function defaultparameterexample(name="appu")
{
    console.log(name)
}
defaultparameterexample("anu")
defaultparameterexample()