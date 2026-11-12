/*encapsulation in javascript is the process of wrapping data and method inside a class and restricting direct access to the data
it helps to achieve data hiding and control access
advantage:
encapsulation provide data security,data hiding,control access,validation,better oranisation and easier maintenance
disadvantage:
encapsulation can increase code size and complexity bcecause addition method such as getters and setters may be required*/
class Encapsulation
{
    #name="Allu"
    getName()
    {
        return this.#name
    }
}
let ob=new Encapsulation()
console.log(ob.getName())
console.log("****getter method***")
class Get
{
  #name
  #age
  getDetails()
  {
    console.log("name:",this.#name)
    console.log("age:",this.#age)
  }
  constructor(name,age)
  {
    this.#name=name
    this.#age=age

  }

}
let ob1=new Get("anu",20)
ob1.getDetails()
console.log("***salary***")
class Emp1
{
    #salary
    getEmployee()
    {
        return this.#salary
    }
    constructor(salary)
    {
        this.#salary=salary
    }
}
let ob2=new Emp1(15000)
console.log(ob2.getEmployee())

