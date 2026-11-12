/*an anonymous fn in a typescript is a fn without a functionname
it is usually assigned to a variable*/
let display2=function():void
{
    console.log("hi")
}
display2()

console.log("*******anonymousfn with parameter************")
let show1=function(a:string):void
{
    console.log(a)
}
show1("anu")

console.log("********anonymousfn with return type********")
let add=function(a:number,b:number):number
{
    let s=a+b
    return s
}
console.log(add(5,4))
