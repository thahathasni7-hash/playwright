//it means handling errors that occur while a js programme is running,so that the pgm is not running,ie finding an error that handling properly
//an exception is an unexpected error that occurs while a js pgm is running,ie a pblm or error that can happen during execution
/*try,catch,finally,throw
try-is used to write the code that may produce an error 
catch-is used to handle error that occur inside try 
finally-contain code that will execute whether an error occur or not
throw-is used to create custom error*/
/*syntax
try
{
}
catch(error)
{
}
finally
{
}*/
try
{
 hello()
}
catch(error)
{
    console.log("function not found")
}
finally
{
    console.log("end of program")
}
console.log("****")
try
{
    let a=10,b=5
    console.log(a+b)
}
catch(error)
{
    console.log("error occured")
}
finally
{
    console.log("calculation completed")
}
//throw
//throw is used to manually generate an error in javascript
//syntax
/*throw new Error(error message)*/
let age=20
if(age<18)
{
    throw new Error("age must be 18 or above")
    
}
console.log("eligible")
console.log("***************************")
try
{
    let age=20
    if(age<18)
    {
        throw new Error("age must be 18 or above")

}
console.log("eligible")
}
catch(error)
{
    console.log(error.message)
}
console.log("*********check number**************")
try{
    let num=10
    if(num<0)
    {
        throw new Error("number is greater")
    }
    console.log("valid number")
}
catch(error)
{
    console.log(error.message)
}
console.log("*********checkpassword*********************")
try{
    let password="123"
    if(password.length<6)
    {
        throw new Error("password must contain atleast 6 character")
    }
    console.log("password is correct")
}
catch(error)
{
    console.log(error.message)
}
console.log("*******balance check***************")
try
{
    let balance=20000
    let amount=30000
    if(amount>balance)
    {
        throw new Error("insufficient balance")
    }
    console.log("withdraw amount")
}
catch(error)
{
    console.log(error.message)
}
/*diff:catch and throw
catch
1.used to handle an exception
2.used after the try block
3.display or handles the error message
throw
1.used create an exception
2.stop the normal excecution of the pgm
3.used to inside try or any fn
4.create a custom error message*/


