/*constructor is a special method in javascript that automatically executes when we create an object using the new keyword
syntax-1.class ClassName{
 constructor()//nonparameterised constructor
 {
 }
}
 let objectname=new ClassName()//object creation
 2.class ClassName{
 constructor(parameter)//parameterised
 {
 }
 }
 let objectname=new ClassName(arguments)//object creation*/
 console.log("*****nonparameterised constructor******")
 class Student
 {
    constructor()
    {
        console.log("hi")
    }
 }
 let obj=new Student()
console.log("****parameterised*****")
class Student1
{
    constructor(name)
    {
        this.name=name
    }
}
let obj1=new Student1("Anu")
console.log(obj1.name)
console.log("****name and age*****")
class Student2
{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
}
let obj2=new Student2("appu",20)//print two names and two age
let obj3=new Student2("rahul",30)
console.log(obj2.name+" "+obj2.age)
console.log(obj3.name+" "+obj3.age)
console.log("******function*****")
class Queue
{
  constructor(salary)
  {
    this.value=salary
  }
  start()
  {
    console.log(this.value)
  }
}
let obj4=new Queue(20000)
obj4.start()

