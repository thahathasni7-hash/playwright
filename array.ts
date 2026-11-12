/*using Array<type>*/

let num:Array<number>=[1,2,3]
console.log(num)
console.log("*****string******")
let fruits:Array<string>=["apple","orange","guava"]
console.log(fruits)

/*using type[] (most common)*/
let a:number[]=[4,5,6]
console.log(a)
console.log("*****string1******")
let name1:string[]=["anu","appu"]
console.log(name1)
console.log("******boolean*****")
let sample:boolean[]=[true,false]
console.log(sample)

//array with multiple type(union type)
let value:(string|number)[]=["anu",8,"appu",9]
console.log(value)
console.log("****stringboolean******")
let value1:(string|boolean|number)[]=[1,2,3,true,false,"ammu","anu"]
console.log(value1)

console.log("*******push************")
//push-add at the end
let fruits1:string[]=["apple","banana"]
fruits1.push("orange")
console.log(fruits1)

console.log("*******pop**************")
//pop-remove from the end
let num1:number[]=[1,2,3]
num1.pop()
console.log(num1)

console.log("******unshift*********")
let num2:number[]=[10,20,30]
num2.unshift(50)
console.log(num2)

console.log("**********shift********")
let num3:number[]=[50,60,70]
num3.shift()
console.log(num3)

console.log("*******arraylength*****")
let num4:number[]=[50,60,70]
console.log(num4.length)

console.log("*********includes*******")
let num5:number[]=[10,20,30]
console.log(num5.includes(10))

console.log("****indexOf*****")
let num6:number[]=[10,20,30]
console.log(num6.indexOf(20))

console.log("*****slice***")
//for get path of an array
let num7:number[]=[20,40,60,70]
let result=num7.slice(1,3)
console.log(result)
