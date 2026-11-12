"use strict";
/*an anonymous fn in a typescript is a fn without a functionname
it is usually assigned to a variable*/
let display = function () {
    console.log("hi");
};
display();
console.log("*******anonymousfn with parameter************");
let show = function (a) {
    console.log(a);
};
show("anu");
console.log("********anonymousfn with return type********");
let add = function (a, b) {
    let s = a + b;
    return s;
};
console.log(add(5, 4));

