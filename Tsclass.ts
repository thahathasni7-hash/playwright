class Student
{
    name:string="anu"
    age:number=20
     display():void
     {
       console.log(this.name,this.age)
     }
}
let obj=new Student()
obj.display()

console.log("********class with constructor******")
class Student1
{
    name:string
    age:number
    constructor(name:string,age:number)
    {
        this.name=name
        this.age=age
    }
    display()
    {
        console.log(this.name,this.age)
    }
}
let obj1=new Student1("appu",20)
obj1.display()

console.log("******add and sub******")
class Show
{
 sum(a:number,b:number):number
 {
  return a+b
 }
 sub1(x:number,y:number):number
 {
    return x-y
 }
}
let obj2=new Show()
console.log(obj2.sum(10,20))
console.log(obj2.sub1(30,10))

console.log("*******mark************")
class Student3
{
    name:string
    mark:number
 constructor(name:string,mark:number)
 {
    this.name=name
    this.mark=mark
 }
 result():string
 {
  console.log(this.name,this.mark)
  if(this.mark>=40)
  {
    return "pass"
  }
  else
    {
    return "fail"
  }
 }
}
let ob=new Student3("anu",60)
console.log(ob.result())
