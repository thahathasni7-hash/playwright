"use strict";
function show(a, b) {
    let mul = a * b;
    return mul;
}
console.log(show(5, 6));
//function
function display(name, salary) {
    console.log(name);
    console.log(salary);
}
display("anu", 12000);
//class
class Calculator {
    addition(x, y) {
        return x + y;
    }
    multiplication(u, v) {
        return u * v;
    }
    substraction(q, r) {
        return q - r;
    }
}
let ob = new Calculator();
console.log(ob.addition(8, 2));
console.log(ob.multiplication(5, 6));
console.log(ob.substraction(9, 3));
//array
let name1 = ["anu", "appu", "ammu", "arun"];
console.log(name1[1]);
console.log(name1.length);
//push
let num = [1, 2, 3];
num.push(4);
console.log(num);
//Create a Rectangle class with methods to calculate area and perimeter
class Rectangle {
    area(l, b) {
        let a = l * b;
        console.log(a);
    }
}
class Shape extends Rectangle {
    perimeter(l, b) {
        super.area(l, b);
        let p = 2 * (l + b);
        console.log(p);
    }
}
let ob2 = new Shape();
ob2.perimeter(5, 6);
//Create an Employee class with name and salary. Create a method to calculate bonus
class Employee1 {
    //name:string
    //salary:number
    show(name, salary) {
        console.log(name, salary);
    }
    work(salary) {
        let bonus = salary * 20 / 100;
        console.log(bonus);
    }
}
let ob4 = new Employee1();
ob4.show("anu", 12000);
ob4.work(12000);
//student
function display1(name1, age1, mark) {
    console.log(name1, age1, mark);
    //console.log(age1)
    //console.log(mark)
}
display1("anu", 20, 30);
//Create a Product class with id, name, and price, and display the details.
class Product {
    display(id, name, price) {
        console.log(id, name, price);
    }
}
let ob5 = new Product();
ob5.display(21, "anu", 200);
//class
class Work {
    multiplication(g, h) {
        let m = g * h;
        console.log(m);
    }
}
let object = new Work();
object.multiplication(6, 3);
