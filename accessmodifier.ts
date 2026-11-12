/*public-public members can be accessed anywhere
private-private members can be accessed only inside the same class
protected-protected members can be accessed inside the parent class and inside the child class*/
console.log("*******public*******")
class Student3
{
    public name:string="anu"
    public display():void
    {
      console.log(this.name)
    }
}


let ob=new Student3()
ob.display()
console.log(ob.name)

console.log("********private**********")
class Bank
{
    private balance:number=20000
    public show():void
    {
        console.log(this.balance)
    }
}
let ob1=new Bank()
ob1.show()
//console.log(ob1.balance)//doesnot access outside the class because the property balance is privately declared

console.log("******protected*************")
class Animal
{
    protected name:string="appu"
    show1():void
    {
        console.log(this.name)
    }
}
class Bird extends Animal
{
    display():void
    {
        console.log(this.name)
    }
}
let ob3=new Bird()
ob3.show1()
ob3.display()