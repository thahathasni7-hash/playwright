//scopechain is a mechanism used by javascript to resolve variables when javascript cannot find a variable in the inner scope,
//it success the outer scope and continues towards the global scope until the variable is found
let a="anu"
function outer()
{
    let age=10
    function inner()
    {
        let key=6
        console.log(a)
        console.log(age)
        console.log(key)
    }
    inner()
}
outer()