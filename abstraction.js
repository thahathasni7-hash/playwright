/*abstraction means hide the internal implementation and show only the necessary functionality*/
console.log("**atm***")
class AtmSample
{
    withdraw(amount)
    {
     let balance=10000
     if(balance>amount)
     {
        console.log("withdraw sucessfull")
     }
 else
 {
    console.log("not withdraw")
 }
    }
}
let obj2=new AtmSample()
obj2.withdraw(2000)
class Car
{
    start()
    {
        console.log("car started")
        this.checkEngine()
    }
    checkEngine()
    {
        console.log("check engine")
    }
}
let obj=new Car()
obj.start()
console.log("***sample***")
class Flower
{
    smell()
    {
        console.log("colour is green")
        this.fresh()
}
fresh()
{
    console.log("good")
}
}
let obj1=new Flower()
obj1.smell()
console.log("***loginsystem***")
class LoginSample
{
    login(username,password)
    {
      this.validateUser(username,password)
    }
    validateUser(username,password)
    {
     if(username==="thasni"&&password===123)
     {
        console.log("login")
     }
     else
        {
       console.log("not login")
     }
    }
}
let obj4=new LoginSample()
obj4.login("admin",123)
console.log("***washing***")
class WashingMachine
{
    start1()
    {
this.fillWater()
this.washCloth()
console.log("washing completed")
    }
    fillWater()
    {
 console.log("filling water")
    }
    washCloth()
    {
console.log("washing")
    }

}
let obj5=new WashingMachine()
obj5.start1()