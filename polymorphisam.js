//method overriding
class Animal
{
    sound()
    {
        console.log("roar")
    }
}
class Dog extends Animal
{
    sound()
    {
        console.log("bow")
    }
}
let ob=new Dog()
ob.sound()
console.log("***string****")
class Person
{
  fresh(name)
  {
    console.log("my name is:",name)
  }
}
class Man extends Person
{
    fresh(name)
    {
        console.log("my name is:",name)
    }

}
let ob1=new Man()
ob1.fresh("anu")

class Flower
{
    sound()
    {
        console.log("color")
    }
}
class Rose extends Flower
{
    sound()
    {
        super.sound()
        console.log("smell")
    }
}
let ob3=new Rose()
ob3.sound()