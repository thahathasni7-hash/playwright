/*a closure is created when an inner function remembers and can access variables from its outer fn,evenafter the outer fn has finished executing*/
function outer()
{
    let name="thasni"
    function inner()
    {
        console.log(name)
    }
    return inner
}
const x=outer()
x()