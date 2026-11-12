/*super keyword in javascript:super keyword is used in a childclass to access the parent class properties
its mainly used in 2 ways:
1.super()=call the parent class constructor
2.super.methodname()=call the methods from the parent class
syntax:super()
class Parent
{
 constructor()//parent constructor
 {

 }
}
 class Child extends Parent
 {
  constructor()//child constructor
  {
   super()

  }
 }
syntax:super.method()
class Parent
{
 function()
 {
  
 }
}
class Child extends Parent
{
 function1()
 {
 super.method()
 }
}*/
class Parent
{
 show()
 {
    console.log("hi")
 }
}
class Child extends Parent
{
 display()
 {
    super.show()
    console.log("hello")
 }
}
let obj=new Child()
//obj.show()
obj.display()
console.log("****my details*****")
class Details
{
    show1()
    {
        console.log("name:Thasni")
        console.log("age:29")

    }
}
class Fresh extends Details
{
    show2()
    {
        super.show1()
        console.log("course:playwright")
    }
} 
let obj4=new Fresh()
obj4.show2()
console.log("****employee*****")
class Employee
{
    constructor(name)
    {
        this.name=name
    }
}
class Details1 extends Employee
{
    constructor(name,salary)
    {
        super(name)
        this.salary=salary
    }
}
let obj5=new Details1("Appu",20000)
console.log(obj5.name+" "+obj5.salary)
