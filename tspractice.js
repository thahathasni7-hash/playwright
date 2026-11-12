"use strict";
//Write a function factorial() that accepts a number and returns its factorial.
function fact(a) {
    let r = 1;
    for (let i = 1; i <= a; i++) {
        r = r * i;
    }
    return r;
}
console.log(fact(6));
console.log("********employee*******");
class Employee2 {
    name = "anu";
    salary = 20000;
    display() {
        console.log(this.name, this.salary);
    }
    calculateAnnualSalary() {
        let a = this.salary * 12;
        console.log(a);
    }
}
let ob5 = new Employee2();
ob5.display();
ob5.calculateAnnualSalary();
//Create a Student class with marks for three subjects. Write methods to calculate the total and average.
class Students2 {
    result(m1, m2, m3) {
        let total = m1 + m2 + m3;
        let average = total / 3;
        return [total, average];
    }
}
let ob7 = new Students2();
console.log(ob7.result(4, 5, 6));
//console.log(ob7.show())
