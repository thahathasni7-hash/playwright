//inheritance is a oops concept where one class can acquire or reuse the properties and methods of another class
//types-single inheritance,multilevel inheritance,hierarchical inheritance,multiple inheritance,hybrid inheritance
//in javascript inheritance is mainly achieve use in the extends keyword
/*syntax-class parent{
}
class child extends parent{
}*/
class Dog
{
    walk()
    {
        console.log("walk")
    }
}
class BabyDog extends Dog
{
    eat()
    {
        console.log("eating")
    }
}
let obj=new BabyDog()
obj.walk()
obj.eat()
console.log("**************vehicle**********************")
class Train
{ 
    run()
    {
 console.log("new")
}
}
class Bus extends Train
{
 queue()
 {
    console.log("old")
 }
}
let good=new Bus()
good.run()
good.queue()
console.log("**************fruit*********")
class Fruit{
    super()
    {
        console.log("sweet")
    }
}
class Apple extends Fruit
{
    medium()
    {
        console.log("sour")
    }
}
let average=new Apple()
average.super()
average.medium()
console.log("******addition using inheritance*********")
class Addition
{
 root(a,b)
 {
    let sum=a+b
    console.log("sum is",sum)
 }
}
class Great extends Addition
{
    square()
    {
        console.log("hi")
    }
}
let small=new Great()
small.root(7,3)
small.square()
console.log("********add and sub********")
class Add
{
 print(x,y)
 {
    let z=x+y
    console.log("sum is",z)
 }
}
class Sub extends Add
{
 copy(c,d)
 {
    let e=c-d
    console.log("sub is",e)
 }
}
let your=new Sub()
your.print(10,5)
your.copy(8,6)
console.log("*****multilevel inheritance*******")
//multilevel inheritance happends in multiple level
class GrandParent
{
    grandParentMethod()
    {
       console.log("grandparent")
    }
}
class Parent extends GrandParent
{
    parentMethod()
    {
        console.log("parent")
    }
}
class Child extends Parent
{
    childMethod()
    {
        console.log("child")
    }
}
let obj1=new Child()
obj1.grandParentMethod()
obj1.parentMethod()
obj1.childMethod()
console.log("****add sub mul*****")
class Add1
{
 addMethod()
 {
    let a=5
    let b=2
    let sum=a+b
    console.log(sum)
 }
}
class Mul extends Add1
{
 mulMethod()
 {
    let c=4
    let d=2
    let m=c*d
    console.log(m)
 }
}
class Sub1 extends Mul
{
    subMethod()
    {
        let e=6
        let f=2
        let s=e-f 
        console.log(s)    
        }
}
let obj6=new Sub1()
obj6.addMethod()
obj6.mulMethod()
obj6.subMethod()
