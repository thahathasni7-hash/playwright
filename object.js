//object literal format
let student={
    name:"Anu",
    age:20,
    great()
    {
      console.log("hello")
    }
}
console.log(student.name,student.age)
student.great()
//by using new Object()
const employee=new Object()
employee.name="Arun"
employee.salary=20000
console.log(employee)
//json object creation-it is a text format used to store and exchange data,it consist of key value pair
let students={
    "name":"Appu",
    "age":15,
    "dept":"CS"
}
console.log(students)