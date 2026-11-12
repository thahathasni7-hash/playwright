"use strict";
/*nonparameterised*/
function display() {
    console.log("hi");
}
display();
//function with parameter
console.log("*******parameterised fn*********");
function add(name) {
    console.log(name);
}
add("appu");
console.log("*********sum********");
function sum(a, b) {
    let c = a + b;
    console.log(c);
}
sum(2, 3);
//return
console.log("*****return*****");
function checkVotingAge(age) {
    if (age >= 18) {
        return "elgible to vote";
    }
    else {
        return "not eligible to vote";
    }
}
console.log(checkVotingAge(20));
console.log("******square of a number*******");
function square(b) {
    let s = b * b;
    return s;
}
console.log(square(8));
console.log("*******largest of a number*****");
function large(c, d) {
    if (c > d) {
        return c;
    }
    else {
        return d;
    }
}
console.log(large(60, 30));
console.log("******odd or even******");
function work(x) {
    if (x % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(work(20));
