let word = 'Javascript'
console.log('Ist character of word is', word[0])
word[0] = 'Y'
console.log(word[0])
let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)      

let js = 'JavaScript'
let py = 'Python'
console.log(js == py)              

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff) 
let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers)  

let userOne = {
name:'Mangalam',
role:'student',
country:'Finland'
}
let userTwo = {
name:'Mangalam',
role:'student',
country:'Finland'
}
console.log(userOne == userTwo)
let nums1 = [1, 2, 3]
let numbers1 = nums1
console.log(nums1 == numbers1)  

let user1 = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let user2 = user1
console.log(user1 == user2)

//Numbers
const PI = Math.PI
console.log(PI)                  // 3.141592653589793
console.log(Math.round(PI))      // 3; to round values to the nearest number
console.log(Math.round(9.81))    // 10
console.log(Math.floor(PI))      // 3; rounding down
console.log(Math.ceil(PI))       // 4; rounding up
console.log(Math.min(-5, 3, 20, 4,5, 10))    // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4,5, 10))    // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)
// Let create random number between 0 to 10
const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))    //10
//Square root
console.log(Math.sqrt(100))     // 10
console.log(Math.sqrt(2))      //1.4142135623730951
// Power
console.log(Math.pow(3, 2)) // 9
console.log(Math.E) // 2.718

// Logarithm
//Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2))    // 0.6931471805599453
console.log(Math.log(10))   // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

console.log('I hope every one is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day1\t3\t\t5')
console.log('Day2\t3\t\t5')
console.log('Day 3\t3\t\t5')
console.log('Day 4\t3\t\t5')
console.log('This is a back slash  symbol (\\)') // To write a back slash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
console.log(`The sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)

let firstName = 'Mangalam'
let lastName = 'Krishnan'
let country = 'India'
let city = 'Bangalore'
let language = 'English'
let job = 'student'
let age = 34
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

let a1 = 2
let b1 = 3
console.log(`${a1} is greater than ${b1}: ${a1 > b1}`)
let string1 = 'HelloWorld'
let splitstring1 = string1.split(' ', 0)
// console.log('split string1 is ', splitstring1)
let substrstring1 = string1.substr(3,2)
console.log('substrstring1',substrstring1)
let slicestring1 = string1.slice(3,2)
console.log('slicestring1 is ', slicestring1)
let substringstring1 = string1.substring(-5,-2)
console.log('substringstring1 ', substringstring1)
let string2 = {}
console.log('toString' ,string2.toString())
//console.log('value ',valueOf(string2))
/*const paragraph = "My name is Mangalam Krishnan. I live in Finland, Helsinki.\
I am a student and I love learning. I learn HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)*/
let js1 = 'JavaScript'
console.log(js1.length)        // 10
let firstName5 = 'Mangalam'
console.log(firstName.length) // 8
let firstLetter = js1[0]
console.log(firstLetter) // J
let secondLetter = js1[1] // a
let thirdLetter = js1[2]
let lastLetter = js1[9] 
console.log(lastLetter) // t
let lastIndex = js1.length - 1
console.log(lastIndex)  // 9
console.log(js1[lastIndex]) // t
console.log(js1.toUpperCase()) 
console.log(js1.toLowerCase())// JavaScript
console.log(js1.substr(4,6))  //Script
console.log(js1.substr(3, 4)) //aScr
console.log(js1.substring(0,4)) //Java   
console.log(js1.substring(4,10))  //Script  
console.log(js1.substring(4)) //Script
console.log(js1.substring(0, 3))  //Jav 
console.log(js1.substring(3, 7))   //aScr
console.log(js1.substring(3))  // aScript
let string3 = ' 30 Days Of Java Script '
console.log(string3.split()) 
console.log(string3.split(''))
console.log(string3.split(' ')) 
console.log(string3.split('  ')) 
console.log(string3.trim(' ')) 
console.log(string3.includes('Days'))     
console.log(string3.includes('days'))     
console.log(string3.includes('Script'))     
console.log(string3.includes('script'))   
console.log(string3.includes('java'))     
console.log(string3.includes('Java'))     
console.log(string3.replace('JavaScript', 'Python'))
console.log(string3.charAt(0))
let lastIndex3 = string3.length - 1
console.log(string3.charAt(lastIndex3))
console.log(string3.charCodeAt(3))
console.log(string3.charCodeAt(lastIndex3))
console.log(string3.indexOf('D'))         
console.log(string3.indexOf('Days'))      
console.log(string3.indexOf('days'))      
console.log(string3.indexOf('a'))         
console.log(string3.indexOf('JavaScript')) 
console.log(string3.indexOf('Script'))     
console.log(string3.indexOf('script'))     
console.log(string3.lastIndexOf('love'))       
console.log(string3.lastIndexOf('you'))        
console.log(string3.lastIndexOf('JavaScript')) 
console.log(string3.concat(" and Python")) 
console.log(string3.startsWith('30')) 
console.log(string3.startsWith('love')) 
console.log(string3.startsWith('30 days')) 
console.log(string3.endsWith('Script')) 
console.log(string3.endsWith('script')) 
console.log(string3.endsWith('in this world'))
console.log(string3.search('days'))
console.log(string3.search(/days/gi))
console.log(string3.match('days')) 
console.log(string3.match(/days/gi)) 
let txt = 'In 2019, I run 30 Days of Pyhton. Now, in 2020 I super exited to start this challenge'
let regEx = /\d+/
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))
let string4 = 'love'
console.log(string4.repeat(10))




