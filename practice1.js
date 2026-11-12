try
{
    let sum=a+b
    console.log(sum)
}
catch(error)
{
    console.log("error occured")
}
finally
{
    console.log("completed")
}
console.log("******square******")
try
{
    n=9
    let result=Math.sqrt(n)
    if(n<0)
    {
        throw new Error("negative")
    }
    console.log(result)
}
catch(error)
{
    console.log(error.message)
}
try{
let fact=-1
for(i=1;i<=6;i++)
{
    fact=fact*i
throw new Error("negative")
}
console.log(fact)
}
catch(error)
{
    console.log(error.message)
}
finally
{
 console.log("completed")
}
console.log("*****class******")
//Create a Shape class with an area() method. Create Rectangle and Circle classes 
// that inherit from Shape and provide their own area() methods.
class Shape
{
    area(l,b)
    {
    let area1=l*b
    console.log(area1)
    }
}
class Rectangle extends Shape
{
    area(l,b)
    {
    super.area(l,b)
    }
}
let obj=new Rectangle()
obj.area(2,4)
//Create a BankAccount class with deposit() and withdraw() methods. Create a SavingsAccount class that inherits from it.
console.log("****bank*****")
class BankAccount
{
    deposit()
    {
        console.log("amount deposited")
    }
}
class SavingAccount extends BankAccount
{
    withdraw()
    {
        super.deposit()
        console.log("withdraw amount")
    }
}
let ob=new SavingAccount()
ob.deposit()
ob.withdraw()
//Create a Student class with private #marks. Create setMarks() and getMarks() methods. Don't allow marks below 0 or above 100
class Student
{
    #marks
    getMarks()
    {
        return this.#marks
    }
constructor(marks)
{
    this.#marks=marks
}
}
let ob1=new Student(50)
console.log(ob1.getMarks())
//array
/*let name2:string[]=["anu","appu","ammu","arun"]
console.log("name2")

function display(name,salary)
{
    console.log(name)
    console.log(salary)
}
display("anu",12000)*/

//reverse a number
let num=123
let rev=0
while(num>0)
{
    let digit=num%10
    rev=rev*10+digit
    num=Math.floor(num/10)
}
console.log(rev)
//count
let sum=1
count=0
for(let i=1;i<=6;i++)
{
  sum=sum+i
  count++
}
console.log(sum)
console.log(count)

//Count the digits of a number

let n=12345
let count1=0
while(n>0)
{
    n=Math.floor(n/10) 
    count1++
}
console.log(count1)
//odd or even
let count2=0
for(let i=1;i<=10;i++)
{
    if(i%2===0)
    {
        console.log(i)
        count2++
    }
    /*else{
        console.log("odd")
    }*/

}
console.log(count2)
/*let a=10
if(a%2===0)
{
    console.log("even")
}
else{
    console.log("odd")
}*/
//Find the largest element in an array.
let a=[10,30,40]
let largest=a[0]
for(let i=1;i<=5;i++)
{
    if(a[i]>largest)
    {
        largest=a[i]
    }
}
console.log(largest)
//find the smallest element in an array
let b=[50,10,20]
let smallest=a[0]
for(i=1;i<=4;i++)
{
    if(a[i]<smallest)
    {
        smallest=a[i]
    }
}
console.log(smallest)
//palindrome
let n1=121
let rev1=0
let temp=n
while(n>0)
{
    let digit=n%10
    rev=rev*10+digit
    n=Math.floor(n/10)
}
if(temp===n)
{
    console.log("palindrome")

}
else
{
    console.log("not")
}
//prime or not
let n2=5
let count3=1
for(i=1;i<=n2;i++)
{
    if(n2%i===0)
    {
        count3++
    }

}
if(count3===2)
{
    console.log("prime")
}
else{
    console.log("not")
}

//swap two numbers
let a1=10,b1=20
a1=a1+b1
b1=a1-b1
a1=a1-b1
console.log("a1 is ",a1)
console.log("b1 is ",b1)

//Find the sum of digits of a number.
let x=123
let sum1=0
while(x>0)
{
    let digit=x%10
    sum1=sum1+digit
    x=Math.floor(x/10)
}
console.log(sum1)
//sum 
let sum2=0
let count4=0
for(let i=1;i<=5;i++)
{
    sum2=sum2+i
    count4++

}
console.log(sum2)
//squareroot
function squareroot(y)
{
    let h=Math.sqrt(y)
    console.log(h)
}
squareroot(36)

/*Find the second-largest number in an array.
let number=[8,5,2]
largest=number[0]
secondlargest=number[0]
for(let i=1;i<=number[i];i++)
{
    
    if(number[i]>largest)
    {
        largest=number[i]
        secondlargest=largest
    }
    else if(number[i]>secondlargest&&number[i]!==largest)
    {
        secondlargest=number[i]
    }
}
console.log(largest)
console.log(secondlargest)*/

//Write a program to reverse a string.
let str="you"
let rev2= ""
for(let i=str.length-1;i>=0;i--)
{
 rev2=rev2+str[i]
}
console.log("reverse is:",rev2)

function factorial(k)
{
    for(let i=1;i<6;i++)
    {
      k=k*i
     
    }
  console.log(k)  
}
factorial(6)

//largest of three numbers
function larger(p,q,r)
{
    if(p>q)
    {
        console.log("greater is:",+p)
    }
    else if(q>r)
    {
        console.log("greater is ",+q)

    }
    else{
        console.log(r)
    }
}
larger(10,20,30)

let c=" YoU"
console.log(c.trim())

let f="hi hello"
console.log(f.charAt(10))

let g="helloworld"
console.log(g.replace("hello","your"))

let student={
name:"anu",
age:20,
 details1()
 {
 console.log(this.name,this.age)
 }
}
student.details1()

class Area
{
 work(l,b)
 {
    let w=l*b
    console.log(w)
 }

}
class Perimeter extends Area
{
    
 display(l,b)
 {
    super.work(l,b)
    let p=2*(l+b)
    console.log(p)
 }

}
class Larger extends Perimeter
{
    details(l,b)
    {
    super.display(l,b)
     if(l>b)
     {
      console.log(l)
     }
     else{
        console.log(b)
     }
    }
}
let obm=new Larger()
    obm.details(5,6)
    //obm.display()


    class True
    {
     constructor(name,age)
     {
        this.name=name
        this.age=age
     }
    }
    class False extends True
    {
        constructor(coarse,name,age)
        {
            super(name,age)
            this.coarse=coarse
        }
        display()
        {
            console.log(this.name,this,this.age,this.coarse)
        }
    }
    let obm1=new False("arun",20,"java")
    obm1.display()

//find the square of a number from 1 to 10
for(i=1;i<=10;i++)
{
    let h=Math.sqrt(i)
    console.log(h)
}

//Print the first 10 multiples of 3.
let m=3
for(i=1;i<=15;i++)
{
let mul=m*i
console.log(mul)
if(i===11)
{
    break
}

}
//Count how many numbers between 1 and 100 are divisible by 5.
for(let i=1;i<=100;i++)
{
    if(i%5===0)
    {
        console.log(i)
    }
}
//find the sum of digits of 12345.