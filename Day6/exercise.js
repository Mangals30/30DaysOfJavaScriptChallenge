//Iterate 0 to 10 using for loop,
// do the same using while and do while loop
let i = 0
for(i = 0; i<=10; i++) {
    console.log(i)
}
i = 0
do {
    console.log(i)
    i++
}while (i<=10)

i = 0
while(i<=10) {
    console.log(i)
    i++
}
//Iterate 10 to 0 using for loop,
// do the same using while and do while loop
let j = 10
for(j =10; j>=0; j--) {
    console.log(j)
}
j = 10
do {
    console.log(j)
    j--
}while(j>=0)
j = 10
while(j>=0) {
    console.log(j)
    j--
}

//Iterate 0 to n using for loop
i = 0
n = 10
for (i=0; i<=n; i++) {
    console.log(i)
}

//Write a loop that makes the following pattern using console.log():
let pattern = '#'
for (i = 1; i<=7;i++) {
    console.log(pattern.repeat(i))
}

//Use loop to print the following pattern:
for (i = 0; i<=10; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

//Use loop to print the following pattern:
console.log('i\ti^2\ti^3')
for (i=0; i<=10;i++) {
    console.log(`${i}\t${i**2}\t${i**3}`)
}

//Use for loop to iterate from 0 to 100 and 
//print only even numbers
i = 0
for(i = 2; i<=100; i++) {
    if (i % 2 ==0){
        console.log(i)
    }

}

//Use for loop to iterate from 0 to 100 and 
//print only odd numbers
i = 0
for (i = 1; i<=100; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

//Use for loop to iterate from 0 to 100 and print 
//only prime numbers
i = 0
for (i=1; i<=100; i++){
    count = 0
    for(j = 2; j<=i-1; j++) {
        
        if ( i%j == 0 ) {
            //console.log('i=',i,'j=',j,i/j)
        count++
        //console.log('i=',i,'j=',j,'count=',count)
        break 
        }
        
    }
    if (count ==0 && i!=1) {
        console.log(i)
    }
}
//Use for loop to iterate from 0 to 100 and 
//print and print the sum of all numbers.
let sumOfNum = 0
i = 0
for(i = 0; i<=100;i++) {
    sumOfNum = sumOfNum + i
}
console.log('Sum of all numbers is',sumOfNum)

i = 0
let sumOfEven = 0
let sumOfOdd = 0
for(i=1; i<=100; i++) {
    if(i % 2 == 0) {
        sumOfEven = sumOfEven +i
    }
    else {
        sumOfOdd = sumOfOdd + i
    }
}
console.log(`The sum of all evens is ${sumOfEven}. And the sum of all odds is ${sumOfOdd}.`)

//Use for loop to iterate from 0 to 100 and 
//print the sum of all evens and the sum of all odds. 
//Print sum of evens and sum of odds as array
const sumArray = []
sumArray.push(sumOfEven,sumOfOdd)
console.log(sumArray)

//Develop a small script which generate array of 
//5 random numbers
i = 0
const randomArray = []
for(i=0;i<5;i++) {
    randomArray.push(Math.floor(Math.random()*11)) //creates random numbers between 1 to 10

}
console.log(randomArray)
//Develop a small script which generate array of 
//5 random numbers and the numbers must be unique
const uniquerandomArray = []
i = 0
for(i=0;uniquerandomArray.length<5;i++){
    let randomNum = Math.floor(Math.random()*11)
    if(uniquerandomArray.indexOf(randomNum)==-1){
        uniquerandomArray.push(randomNum)
    }
    
}
console.log(uniquerandomArray)

//Develop a small script which generate a six 
//characters random id
i=0
let randomId = ''
let characters = '0123456789abcdefghijklmnopqrstuvwxyz'
let len = characters.length
for(i = 0; i<6;i++) {
    randomIdIndex = Math.floor(Math.random()*len)
    randomId = randomId + characters[randomIdIndex]
}


console.log(randomId)
i = 0
let randomAnyNumId = ''
len = Math.floor(Math.random()*30)
console.log('len is', len)
for (i=0; i<len;i++) {
    let randomNum = Math.floor(Math.random()*len)
    randomAnyNumId = randomAnyNumId + characters[randomNum]
    
    
}
console.log(randomAnyNumId)
//Using the above countries array, 
//create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
 const capitalCountries = countries.map(country => country.toUpperCase())
 console.log(capitalCountries)

 //Use the countries array to create the following 
 //array of arrays:
 const modifiedCountries = countries.map(country => [country,country.toUpperCase().slice(0,3),country.length])
 console.log(modifiedCountries)

 //In above countries array, check if there is a country
 // or countries containing the word 'land'. If there are 
 //countries containing 'land', print it as array. 
 //If there is no country containing the word 'land', 
 //print 'These are countries without land'.
 const landCountries = countries.filter(country =>country.includes('land'))
 console.log(landCountries)

 //In above countries array, check if there a country 
 //or countries end with a substring 'ia'. If there are 
 //countries end with, print it as array. If there is no
 // country containing the word 'land', print 
 //'These are countries ends without ia'.
 const iaCountries = countries.filter(country => country.includes('ia'))
 console.log(iaCountries)

 //Using the above countries array, create an array for countries length'.
 const lenCountries = countries.map(country => country.length)
 console.log(lenCountries)
 
//Using the above countries array, find the country 
//containing the biggest number of characters.
 const tempArray = [...countries]
 let ObjArray =[]
 for (const country of tempArray) {
     ObjArray.push({country:country,length:country.length})
 }
 console.log(ObjArray)
ObjArray.sort((a,b) => {
    if(a.length < b.length) return 1
    if(a.length > b.length) return -1
    return 0
})
console.log('Country with max length:',ObjArray[0].country)

//Using the above countries array, 
//find the country containing only 5 characters.
const fiveCharCont = countries.filter(country => country.length == 5)
console.log(fiveCharCont)

//Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
const webTechsTemp = [...webTechs]
const webTechsObj = []
for (const webTech of webTechsTemp) {
    webTechsObj.push({skill:webTech,length:webTech.length})
}
webTechsObj.sort((a,b) => {
    if (a.length < b.length) return 1
    if (a.length > b.length) return -1
    return 0
})
console.log(webTechsObj)
console.log(webTechsObj[0].skill)

//Use the webTechs are to create the following array of arrays:
const webTechLen = webTechs.map(webTech => [webTech,webTech.length])
console.log(webTechLen)

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
const MERNArray = mernStack.map(skill =>skill[0])
console.log(MERNArray)
console.log('Acronym',MERNArray.join(''))

for(const webTech of webTechs) {
    console.log(webTech)
}
i = 0
const fruits = ['banana', 'orange', 'mango', 'lemon']
const reverseFruits = []
for(i=fruits.length-1;i>=0;i--){
    reverseFruits.push(fruits[i])
}
console.log(reverseFruits)
const allLandCountries = allCountries.filter(country => country.match(/land/ig))
console.log(allLandCountries)

const tempCountries = [...allCountries]
const ObjAllCountries = []
for(const country of tempCountries){
    ObjAllCountries.push({country:country,length:country.length})
}
ObjAllCountries.sort((a,b) => {
    if (a.length<b.length) return 1
    if(a.length > b.length) return -1
    return 0
})
console.log(ObjAllCountries[0].country)

const fourCharCont = allCountries.filter(country =>country.length==4)
console.log(fourCharCont)
const moreThanTwoWords = []
for (const country of allCountries) {
    if(country.includes(' ')){
        moreThanTwoWords.push(country)
    }
}
console.log(moreThanTwoWords)

//threewords
const threeWordsCountries =[]
const arrayCont =[]
const threeArray = []
for (const country of allCountries) {
    arrayCont.push(country.split(' '))
}
for (const country of arrayCont){
    if(country.length ==3) {
      threeArray.push(country)
    }
}
console.log(threeArray)
const threeWordsCont = []
let temp = ''
for (const country of threeArray) {
    temp = country.join(' ')    
    threeWordsCont.push(temp)
}
console.log(threeWordsCont)

const reverseCountries = [...allCountries]
reverseCountries.reverse()
const capitalReverse = reverseCountries.map(country => country.toUpperCase())
console.log(capitalReverse)