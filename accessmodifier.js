"use strict";
/*public-public members can be accessed anywhere
private-private members can be accessed only inside the same class
protected-protected members can be accessed inside the parent class and inside the child class*/
console.log("*******public*******");
class Student {
    name = "anu";
    display() {
        console.log(this.name);
    }
}
let ob = new Student();
ob.display();
console.log(ob.name);
console.log("********private**********");
class Bank {
    balance = 20000;
    show() {
        console.log(this.balance);
    }
}
let ob1 = new Bank();
ob1.show();
//console.log(ob1.balance)//doesnot access outside the class because the property balance is privately declared
console.log("******protected*************");
class Animal {
    name = "appu";
    show1() {
        console.log(this.name);
    }
}
class Bird extends Animal {
    display() {
        console.log(this.name);
    }
}
let ob3 = new Bird();
ob3.show1();
ob3.display();
