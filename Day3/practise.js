let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3 
let falseValue = 3 > 4 
console.log('isLightOn',isLightOn)
console.log('isRaining',isRaining)
console.log('isHungry',isHungry)
console.log('isMarried',isMarried)
console.log('truValue',truValue)
console.log('falseValue',falseValue)
let nullValue = null
console.log('nullValue',nullValue)
console.log('3 > 2',3 > 2) //true             
console.log('3 >= 2',3 >= 2)   //true           
console.log('3 < 2',3 < 2)    //false           
console.log('2 < 3',2 < 3)     //true          
console.log('2 <= 3',2 <= 3)     //true         
console.log('3 == 2',3 == 2)     //false         
console.log('3 != 2',3 != 2)      //true        
console.log('3 == string 3',3 == '3')    //true        
console.log('3 ===string 3',3 === '3')    //false       
console.log('3 !== string 3',3 !== '3')     //true      
console.log('3 != string 3',3 != '3')     //false     
console.log('3 != 3',3 != 3)       //false      
console.log('3 !== 3',3 !== 3)      //false      
console.log('0 == false',0 == false)   //true       
console.log('0 == blankstring',0 == '')      //true       
console.log('0 == single space',0 == ' ')     //true       
console.log('0 ===blank string',0 === '')     //false   
console.log('0 === false',0 === false)  //false      
console.log('1 == true',1 == true)    //true       
console.log('1 === true',1 === true)   //false      
console.log('undefined == null',undefined == null)  //true
console.log('undefined === null',undefined === null) //false
console.log('NaN == NaN',NaN == NaN)  //false       
console.log('NaN === NaN',NaN === NaN) //false       
console.log('typeof (NaN)',typeof (NaN))  //       

console.log('mango'.length == 'avocado'.length)  //false
console.log('mango'.length != 'avocado'.length)  //true
console.log('mango'.length < 'avocado'.length)   //true
console.log('milk'.length != 'meat'.length)      //false
console.log('milk'.length == 'meat'.length)      //true
console.log('tomato'.length == 'potato'.length)  //true
console.log('python'.length > 'dragon'.length)   //false

//&& ampersand operator example

const check1 = 4 > 3 && 10 > 5 // true
console.log('check1',check1)
const check2 = 4 > 3 && 10 < 5 // false
console.log('check2',check2)
const check3 = 4 < 3 && 10 < 5 // false
console.log('check3',check3)

//|| pipe or operator, example

const check4 = 4 > 3 || 10 > 5 // true
console.log('check4',check4)
const check5 = 4 > 3 || 10 < 5 // true
console.log('check5',check5)
const check6 = 4 < 3 || 10 < 5 // false
console.log('check6',check6)

//! Negation examples

let check7 = 4 > 3    
console.log('check7',check7)        //true
let check8 = !(4 > 3)  
console.log('check8',check8)       //false
let isLightOn1 = true
console.log('isLightOn1',isLightOn1) //true
let isLightOff1 = !isLightOn1  // false
console.log('isLightOff1',isLightOff1) 
let isMarried1 = !false       // 
console.log('isMarried1',isMarried1) // true

let count1 = 0
console.log('++count1',++count1) //1
console.log('count1',count1)   //1

let count2 = 0
console.log('count2++',count2++) //0
console.log('count2',count2)  //1

let count3 = 0
console.log('--count3',--count3) //-1
console.log('count3',count3)  //-1

let count4 = 0
console.log('count4--',count4--) //0
console.log('count4',count4)   //-1

let isRaining1 = true
isRaining1
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining1 = false

isRaining1
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a number number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a number number`)

alert ('Welcome to 30 days of Javascript challenge')

let number1 = prompt('Enter number', 'number goes here')
let message1 = prompt('Enter your message')
console.log(number1)
console.log(message1)

let confirm1 = confirm('Are you sure')
console.log(confirm1)

let now = new Date()
console.log('Date object is', now)
console.log('Day is',now.getDay()) // Week day as number, sunday is 0
console.log('Month is',now.getMonth())
console.log('Date is',now.getDate())
console.log('Year is',now.getFullYear())
console.log('Time is',now.getTime())
console.log('Hours is',now.getHours())
console.log('Minutes is',now.getMinutes())
console.log('Second is',now.getSeconds())
console.log('Millisecond is',now.getMilliseconds())
console.log(`Time now is ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`)

const allSeconds = Date.now()
console.log('allSeconds',allSeconds)
const time = new Date().getTime()
console.log('date',time)
console.log(Date.now()==new Date().getTime())

console.log(`Today's date is ${now.getDate()}/${(now.getMonth())+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)

