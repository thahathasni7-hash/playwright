/*nonparameterised*/
function display():void//void means a fn doesnot return a value
{
  console.log("hi")
}
display()

//function with parameter
console.log("*******parameterised fn*********")
function add(name:string):void
{
    console.log(name)
}
add("appu")

console.log("*********sum********")
function sum(a:number,b:number):void
{
 let c=a+b
 console.log(c)
}
sum(2,3)

//return
console.log("*****return*****")
function checkVotingAge(age:number):string
{
  if(age>=18)
  {
    return "elgible to vote"
  }
  else{
    return "not eligible to vote"
  }
}
console.log(checkVotingAge(20))

console.log("******square of a number*******")
function square(b:number):number
{
  let s=b*b
  return s
}
console.log(square(8))

console.log("*******largest of a number*****")
function large(c:number,d:number):number
{
  if(c>d)
  {
    return c
  }
  else{
    return d
  }
}
console.log(large(60,30))

console.log("******odd or even******")
function work(x:number):string
{
  if(x%2===0)
  {
    return "even"
  }
  else{
    return "odd"
  }
}
console.log(work(20))