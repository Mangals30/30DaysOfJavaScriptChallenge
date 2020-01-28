function outerFunction() {
    console.log('Outer function')
    let count = 0;
    function innerFunction() {
        console.log('Inner function')
        count++
        return count
    }
    //console.log(count)
    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


function outerFunction1() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs1 = outerFunction1()

console.log(innerFuncs1.plusOne)
console.log(innerFuncs1.minusOne)