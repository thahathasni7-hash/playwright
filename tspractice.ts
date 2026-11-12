//Write a function factorial() that accepts a number and returns its factorial.
function fact(a:number):number
{
    let r:number=1
    for(let i:number=1;i<=a;i++)
    {
         r=r*i
    
    }
    return r
}
console.log(fact(6))

console.log("********employee*******")
class Employee2
{
    name:string="anu"
    salary:number=20000
    display():void
    {
        console.log(this.name,this.salary)
    }
    calculateAnnualSalary():void
    {
       let a:number=this.salary*12
       console.log(a)
    }
}
let ob5=new Employee2()
ob5.display()
ob5.calculateAnnualSalary()

//Create a Student class with marks for three subjects. Write methods to calculate the total and average.
class Students2
{
    result(m1:number,m2:number,m3:number):number[]
    {
        let total:number=m1+m2+m3
        let average:number=total/3
        return[total,average]

    }

        /*show(total:number):Number
        {
        let average:number=total/3
        return average
    }*/
}
let ob7=new Students2()
console.log(ob7.result(4,5,6))
//console.log(ob7.show())