//declaring a function without a parameter
function noParameter () {
    console.log('Hi, i have no parameters')
}
console.log(noParameter())

//function without parameter,  a function which square a number
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  square()

  function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  addTwoNumbers()

  function generateFullName (){
    let firstName = 'Mangalam'
    let lastName = 'Krishnan'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
generateFullName()

function getFullName (){
    let firstName = 'Sanjay'
    let lastName = 'Jayaraman'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(getFullName())

function addNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

console.log(addNumbers())

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  
  function square(number) {
    return number * number
  }
  
  console.log(square(10))

  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
  sumTwoNumbers(10, 20) // calling functions
  // If a function doesn't return it doesn't store data, so it should return
  function sumTwoNumbersAndReturn(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  
  console.log(sumTwoNumbersAndReturn(10, 20))
  function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Shwetha', 'Sanjay'))

  function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + numbers[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));
  
  
      const areaCircle = (radius) => {
        let area = Math.PI * radius * radius;
        return area;
      }
  console.log(areaCircle(10))
  
  function sumAllNums () {
      let sum = 0
      for(let i=0; i<arguments.length;i++) {
          sum = sum + arguments[i]
      }
    return sum
  }

  console.log(sumAllNums(1,2,3))
  console.log(sumAllNums(3,4,5,6))
  console.log(sumAllNums(9,8,7,6,5,4))

  const anonyFun = function () {
      console.log('I am an anonymous function')
  }()

  //Declaration function
function square2(n) {
    return n * n
  }
  
  console.log(square2(2)) // -> 4
  
  // Function expression
  const square3 = function(n) {
    return n * n
  }
  
  console.log(square3(2)) // -> 4

  ;(function(n) {
      console.log(n)
  })(2)

  const square4 = n => n * n
  console.log(square4(2))

// Function with default parameter
  function greetings(name = 'Mangalam') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Sanjay'))

const weightOfObject = (mass, gravity = 9.81) =>{
    let weight = mass * gravity + ' N'
    return weight
}
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon