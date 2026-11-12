//prime or not 
for(let i=1;i<=20;i++)
{
    let count=0
for(let j=1;j<=i;j++)
{
    if(i%j===0)
    {
        count++
    }
}
    if(count===2)
    {
        console.log("prime")
    }
    else{
        console.log("not")
    }
}
//factors of a number
let a=20
function factor()
{
    for(let i=1;i<=20;i++)
    {
        if(a%i===0)
        {
            console.log(i)
         }
     }
}
factor()
//compare a number
function reverse(b,c)
{
  if(b===c)
  {
    console.log("yes")
  }
  else{
    console.log("not")
  }
}
reverse(12,21)
//count how many even numbers are between 1 and 50
let count=0
function even()
{
    for(let i=1;i<=50;i++)
    {
        if(i%2===0)
        {
            console.log(i)
           count++
        }
        
    }
    console.log(count)
    
}
even()
//mul
let mul=5
let d
let sum=0
for(let i=1;i<=10;i++)
{
    d=mul*i
    sum=sum+d
    console.log(sum)    
}
//17 is prime or not.
let e=17
let count1=0
for(let i=1;i<=e;i++)
{
if(e%2===0)
{
    count1++
}
if(count1===2)
{
    console.log("prime")
}
else{
    console.log("not")
}
}
//sum of the digits of 4567.
let m=4567
let sum1=0
function sum2()
{
 for(let i=4;i<=7;i++)
 {
  sum1=sum1+i
  console.log(sum1)
}
}
sum2()
//array
let study=["cs","ec","ee"]
console.log(study)
//empty format
let number=[]
number[0]=10
number[1]=20
number[2]=30
console.log(number)
//using new Array()
let variable=new Array("a","b","c","d")
console.log(variable)
console.log(variable.length)
//array.of
let queue=Array.of(1,2,3)
console.log(queue)
//push fn
let count3=[1,2,3,4]
//count3.push(5)
//count3.pop()
//count3.unshift(8)
//count3.shift()
//count3.splice(1,0,7)
//count3.splice(3,1)
//console.log(count3.indexOf(2))
//count3.reverse()
//console.log(count3)
let count4=count3.find(num=>num<5)
console.log(count4)
console.log("*********student**********")
class Person
{
    super()
    {
        console.log("Anu")
    }
}
class Student extends Person
{
  roll(x)
  {
    let rollno=x
    console.log(rollno)
  }
}
let good=new Student()
good.super()
good.roll(30)
console.log("*****employee*******")
class Employee
{
    constructor(name,salary,dept)
    {
      this.x=name
      this.y=salary
      this.z=dept
    }

}
let obj2=new Employee("anu",15000,"cs")
console.log(obj2.x+" "+obj2.y+" "+obj2.z)
console.log("****rectangl****")
class Rectangle
{
    constructor(length,breadth)
    {
        this.l=length
        this.b=breadth
        let area=this.l*this.b
        this.area=area
    }
}
let obj3=new Rectangle(8,2)
//console.log(obj3.l+" "+obj3.b+" "+obj3.area)
console.log(obj3.area)
console.log("****function****")
class Rect
{
 function(l,b)
 {
    let area=l*b
    console.log(area)
 }
}
let obj4=new Rect()
obj4.function(7,3)
console.log("****factors***")
for(let i=1;i<=10;i++)
{   
    let u
    let num=6
    u=i*num
    console.log(u)
}
console.log("****factors1***")
let c1=6
let s
for(i=1;i<=10;i++)

{
    if(c1%i===0)
    {
        console.log(i)
        //s=c1+i
    }
}
//console.log(s)
console.log("***product of digits****")
function product()
{
    let g=16
    let h=g%10

console.log(h)
}
product()
console.log("***array****")
let q=[2,4]
let add=0
function add1()
{
    for(i=0;i<=q.length;i++)
    {
        add=add+q[i]
        console.log(add)
    }
}
add1()
console.log("***mul**")
function mul1(a,b)
{
    let y=a*b
    return y
}
console.log(mul1(6,2))
console.log("****total****")
class Total
{
    constructor(m1,m2,m3)
    {
        this.x=m1
        this.y=m2
        this.z=m3
        let total=this.x+this.y+this.z
        this.total=total
    }
}
let obj7=new Total(5,2,3)
//console.log(obj7.m1+" "+obj7.m2+" "+obj7.m3)
console.log(obj7.total)
console.log("***employee****")
class Parent
{
    constructor(name,salary)
    {
        this.name=name
        this.salary=salary
    }
}
class Child extends Parent
{
    constructor(name,salary,dept,course)
    {
        super(name,salary)

        this.dept=dept
        this.course=course
    }
}
let ob=new Child("allu",4000,"IT","java")
console.log(ob.name+" "+ob.salary+" "+ob.dept+" "+ob.course)
console.log("***function using super keyword***")
class Car
{
  display()
  {
    console.log("brand:swift")
    console.log("colour:White")
  }
}
class Electric extends Car
{
    show()
    {
        super.display()
        console.log("battery:full")
    }
}
let good1=new Electric()
good1.show()
console.log("***method***")
class Bank
{
    save(acntno,balance)
    {
        console.log(acntno)
        console.log(balance)
    }
}
class Bank2 extends Bank
{
    saving(acntno,balance,name)
    {
        super.save(acntno,balance)
        console.log(name)
    }
}
let detail=new Bank2()
detail.saving(123,900,"anu")
console.log("***hi****")
class Bird
{
    show1()
    {
        console.log("got")
    }
}
class Long extends Bird
{
    show1()
    {
        super.show1()
        console.log("know")
    }
}
let ob5=new Long()
ob5.show1()
console.log("***encapsulation***")
class Bank1
{
    #accountnumber
    #balance
    getDeposit()
    {
        console.log("my account number is:",this.#accountnumber)
        console.log("my balane is:",this.#balance)
    }
    constructor(accountnumber,balance)
    {
        this.#accountnumber=accountnumber
        this.#balance=balance
    }
}
let ob3=new Bank1(152,6000)
ob3.getDeposit()
console.log("***student****")
class Student1
{
    #marks
    getStudent()
    {
        return this.#marks
    }
    constructor(marks)
    {
        this.#marks=marks
    }
}
let ob6=new Student1(40)
console.log("my mark:",ob6.getStudent())
console.log("***age***")
class Age1
{
    #age=20
    getAge()
    {
        console.log("age is:",this.#age)
    }
}
let ob7=new Age1()
ob7.getAge()
//Create a User class with private #password. Create a method checkPassword(password) that returns true or false
console.log("***password*****")
class User
{
  #password=123
  checkPassword(password)
  {
    return this.#password===password
  }
}
let ob9=new User()
console.log(ob9.checkPassword(123))
console.log(ob9.checkPassword(257))
//Create a Shape class with draw(). Create Circle and Rectangle classes that override draw().
console.log("***shape****")
class Shape
{
    draw()
    {
        console.log("color")
    }
}
class Circle extends Shape
{
    draw()
    {
        super.draw()
        console.log("paint")
    }
}
class Rectangle1 extends Circle
{
    draw()
    {
        super.draw()
        console.log("queue")
    }
}
let obj6=new Rectangle1()
obj6.draw()
//Create an Employee class with constructor name and method work(). Create a Tester class that calls the parent constructor 
// using super() and overrides work().
console.log("***super***")
class Employee2
{
    #name
    work()
    {
        console.log("my name is:",this.#name)
    }
    constructor(name)
    {
        this.#name=name
    }
    
}
class Tester extends Employee2
{
   work() 
   {
    super.work()
   }
}
let obn=new Tester("appu")
obn.work()
console.log("***arrow***")
const square=(h)=>
{
    let m=h*h
    console.log(m)
}
console.log(square(3))
//switch
let x=3
let y=4
let operator="+"
switch(operator)
{
 case "-":
    console.log(x+y)
    break
    case "*":
        console.log(x-y)
        break
        case "+":
            console.log("x+y")
            break
            default:
                console.log("not")
}
let n=1
let k=0
while(n<=10)
{
    k=k+n
    n++
}
console.log(k)
//switch
let traffic="green"
switch(traffic)
{
    case "green":
        console.log("go")
        break
    case "red":
        console.log("stop")
        break
    case "yellow":
        console.log("slow")
        break
        default:
            console.log("not")
}
//callback function
function calculate(m,callback)
{
    let s=m*m
    callback(s)
}
function display(s)
{
    console.log(s)
}
calculate(9,display)
//callback odd/even
function sample(j,callback)
{
    if(j%2===0)
    {
        console.log("even")
    }
    else{
        console.log("odd")
    }
    callback()
}
function greet()
{
    console.log("hi")
}
sample(10,greet)
//Write a JavaScript program using try...catch to divide two numbers. If the denominator is 0, display an error message.
try
{
    let u=20,v=10
    let d=u/v
    if(v===0)
    {
        throw new Error("not divided ")
    }
    console.log("divided:",+d)
}
catch(error)
{
    console.log(error.message)
}
//Write a program using try...catch...finally to calculate the square root of a number. If a negative number is entered, 
// throw an exception.
try
{
  let n=81
  let square=Math.sqrt(n)
  if(n===-81)
  {
    throw new Error("not find squareroot")
  }
  console.log("squareroot is:",+square)
}
catch(error)
{
    console.log(error.message)
}
finally{
    console.log("calculation completed")
}
console.log("****largest***")
let u=20,v=30,z=40
if(u>v)
{
    console.log(u)
}
else if(v>z)
{
    console.log(v)
}
else{
    console.log(z)
}
console.log("****array****")
let array=[5,2,6,4]
largest=array[0]//5
for(i=1;i<array.length;i++)
{
    if(array[i]>largest)
    {
        largest=array[i]
    }
}
console.log(largest)
//Write a program using map() to double every number in an array.
let array1=[2,3,5]
let double=array1.map(num=>num*2)
console.log(double)
//Write a program using filter() to find even numbers.
let array2=[2,5,6]
let even1=array2.filter(num=>num%2===0)
console.log(even1)
//find
let array3=[10,20,30]
let found=array3.find(num=>num<50)
console.log(found)
//reverse
let array4=[6,8,9]
array4.unshift(10)
console.log(array4)
//callback
function display(a,b,callback)
{
    let m=a*b
    callback(m)
}
function multiply(m)
{
    console.log("result is:",+m)
}
display(6,9,multiply)
//exception handling
try
{
    let sum=a+b
}
catch(error)
{
    console.log("error occured")
}
finally
{
    console.log(completed)
}
