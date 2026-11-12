/*it is a fn passed into another fn as an argument and it is invoke after a specific task is completed*/
function great()//callback function
{
 console.log("hi")
}
function display(callback)
{
 console.log("hello")
    callback()
}
display(great)
console.log("****cook******")
function cook(food,callback)
{
    console.log("cooking " +food)
    callback()
}
function serve()//callback function
{
    console.log("food is ready to serve")
}
cook("biriyani",serve)
console.log("****add***")

function add(a,b,callback)
{
    let sum=a+b
    callback(sum)
}
function display(sum)
{
    console.log("result is "+sum)
}
add(2,3,display)
console.log("***student***")
function getStudent(name,callback)
{
    console.log("name "+name)
    callback()
}
function welcome()
{
    console.log("welcome")
}
getStudent("anu",welcome)
/*callback hell happends when we have many callback nested inside the other callback,making the code difficult to read,understand
it is also called pyramid of doom because the code starting like a pyramid*/