let fruits:string[]=["apple","orange"]
for(let fruts1 of fruits)
{
    console.log("fruits1")
}

console.log("*******for in********")
let employee={
     name:"appu",
     age:20
}

    for (let key in employee) 
      {
    console.log(employee[key as keyof typeof employee]);
}
  