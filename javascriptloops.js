for(let i=1;i<=5;i++)
{
    console.log(i)
}
//even number
for(let j=1;j<=20;j++)
{
    if(j%2===0)
    {
      console.log(j)
    }
    
}
//odd number
for(let k=1;k<20;k++)
{
    if(k%2!==0)
    {
        console.log(k)
    }
}
//while loop
let l=1
while(l<=5){
    console.log(l)
    l++
}
//for in
let employee={
    name:"thasni",
    age:20,
    role:"it"
}
for(let key in employee)
{
    console.log(key)
    console.log(employee[key])
}
//continue
for(let m=1;m<=5;m++)
{
    if(m===3)
    {
        continue
    }
    console.log(m)
}
//while
let i=1
while(i<=20)
{
    if(i%2===0)
    {
        console.log(i)
    }
    i++
}
//sum
let n=1
let sum=0
while(n<=10)
{
    
    sum=sum+n
    n++
}
    console.log(sum)
//factorial
let k=1
let mul=1
while(k<=6)
{
    mul=mul*k
    k++
}
console.log(mul)
//count
let j=1
let count=0
while(j<=50)
{
 count=count+1
 j++
}
console.log(count)
//for in

let student={
    name:"Anu",
    age:20,
    class:10,
    grade:"A"
}
for(let key in student)
{
    console.log(key)
    console.log(student[key])
}
//for in
let car={
    color:"red",
    brand:"Maruthi"
}
let count1=0
for(let key in car)
{
 count1++
    }
console.log(count1)
/*syntax
do
{
    //statement
    increment/decrement
}
while(condition)*/
let c=1
do
{
    console.log(c)
    c++
}
while(c<=10)
