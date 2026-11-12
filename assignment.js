//print the multiplication table of five using for loop
let mul=5
let d
for(let i=1;i<=10;i++)
{
  d=mul*i
console.log(d)
}

//find the sum of numbers from 1 t0 10 using for loop
let sum=0
for(let i=1;i<=10;i++)
{
    sum=sum+i
    console.log(sum)  
}

//find the first number greater than 50 using while loop
let i=1
while(i<=100)
{
    if(i>50)
    {
        console.log(i)
        break
    }
    
    i++    
}

//count how many even numbers are present between 1 and 20 using while loop
let i=1
count=0
while(i<=20)
{
    if(i%2===0)
    {
        console.log(i)
        count++
    }
    i++
}
console.log(count)


