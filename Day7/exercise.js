//Declare a function fullName and it print out your full name.
const fullName = () => {
    let fullName = 'Mangalam Krishnan'
    console.log('My full name is',fullName)}
fullName()

//Declare a function fullName and now it takes firstName, 
//lastName as a parameter and it returns your full - name.
const getFullName = (firstName,lastName) => {
    let fullName = firstName + ' ' + lastName
    return fullName
}
console.log('My full name is',getFullName('Mangalam','Krishnan'))

//Declare a function addNumbers and it takes two two parameters 
//and it returns sum.
const addTwoNums = (num1,num2) => num1 + num2
console.log('Sum of 2 nums:',addTwoNums(4,5))

//An area of a rectangle is calculated as follows: 
//area = length x width. Write a function which calculates 
//areaOfRectangle.
const areaOfRect = (length,width) => (length * width) + 'cm\u00b2'
console.log('Area of rectangle:',areaOfRect(20,30))

//A perimeter of a rectangle is calculated a,s follows: 
//perimeter= 2x(length + width). 
//Write a function which calculates perimeterOfRectangle.
const periOfRect = (length,width) => (2 * (length + width)) + 'cm'
console.log('Perimeter of the rectangle:',periOfRect(20,30))

//A volume of a rectangular prism is calculated as follows: 
//volume = length x width x height. Write a function which 
//calculates volumeOfRectPrism.
const VolOfPrism = (length,width,height) => (length * width * height) + 'cm\u00b3'
console.log('Volume of the prism is:',VolOfPrism(20,30,40))

//Area of a circle is calculated as follows: area = π x r x r.
// Write a function which calculates areaOfCircle
const areaOfCircle = radius => ((Math.PI * radius **2).toFixed(2)) + 'cm\u00b2'
console.log('Area of circle:',areaOfCircle(20))

//Circumference of a circle is calculated as follows: circumference = 2πr. 
//Write a function which calculates circumOfCircle
const circumOfCircle = radius => ((2 * Math.PI * radius).toFixed(2)) + 'cm'
console.log('Circumference of circle is:',circumOfCircle(20))

//Density of a substance is calculated as follows:
//density= mass/volume. Write a function which calculates density.
const density = (mass,volume) => ((mass / volume).toFixed(2)) + 'kg/m'
console.log('Density is:',density(100,56))

//Speed is calculated by dividing the total distance covered by a
// moving object divided by the total amount of time taken. Write
//a function which calculates a speed of a moving object, speed.
const speed = (distance,time) => ((distance/time).toFixed(2)) + 'km/hr'
console.log('Speed of the moving object:',speed(20,2.5))

//Weight of a substance is calculated as follows: 
//weight = mass x gravity. Write a function which calculates weight.
const weightOfSubstance = (mass,gravity = 9.81) => ((mass * gravity).toFixed(2)) + 'N'
console.log('Weight on earth:',weightOfSubstance(100))
console.log('Weight on moon:',weightOfSubstance(100,1.62))

//Temperature in oC can be converted to oF using this formula: 
//oF = (oC x 9/5) + 32. Write a function which convert oC to oF 
//convertCelciusToFahrenheit.
const convertCelciusToFahrenheit = tempinCel => ((tempinCel * (9/5)).toFixed(1)) + 'F'
console.log('Converting celsius to Farenheit:',convertCelciusToFahrenheit(11))

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
//Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obese based the information given below.

/*The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/
const calculateBMI = (weight,height) => {
    let bmi = (weight / (height**2)).toFixed(1)
    console.log('yor bmi is',bmi)
    let status = ''
    switch (true) {
        case (bmi < 18.5):
            status = 'Underweight: BMI is less than 18.5'
            break;

        case (bmi >= 18.5) && (bmi <=24.9):
            status = 'Normal weight: BMI is 18.5 to 24.9'
            break;

        case (bmi >= 25) && (bmi <=29.9):
            status = 'Overweight: BMI is 25 to 29.9'
            break;    
            
        case (bmi > 30):
            status = 'Obese: BMI is 30 or more'
            break;            
    
        default:
            status = ' none'
            break;
    }
    
    return status
}
let bmiStatus = calculateBMI(50,1.62)
console.log(bmiStatus)

//Write a function called checkSeason, it takes a month parameter
//and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = monthArgue => {
    let month = monthArgue.toLowerCase()
    let season = ''
    switch (true) {
    case (month == 'december') || (month == 'january') || (month == 'february'):
    season = 'WINTER'    
    break;

    case (month == 'march') || (month == 'april') || (month == 'may'):
    season = 'SPRING'    
    break;

    case (month == 'june') || (month == 'july') || (month == 'august'):
    season = 'SUMMER'    
    break;

    case (month == 'june') || (month == 'july') || (month == 'august'):
    season = 'AUTUMN'    
    break;
    
        default:
        season = 'Not valid'    
        break;
    }
    return season
}
const monthSeason = checkSeason('august')
console.log('The sesaon is',monthSeason)

//Math.max returns its largest argument. Write a function findMax
//that takes three arguments and returns their maximum with out 
//using Math.max method.
const findMax = (num1,num2,num3) => {
    if(num1>num2) {
        if(num1>num3) {
            return num1
        }
        else {
            return num3
            }
        
    }
    else {
        if(num2 > num3) {
            return num2
        }
        else{
            return num3
        }
    }
    
}
const maxVal = findMax(1,2,3)
console.log('Maximum value',maxVal)

const solveLinearEquation = (a,b,c) => ((c-b)/a)
console.log('ax+by=c',solveLinearEquation(1,2,3))
const SoveQuadraticEquation = (a=1,b=0,c=0) => {
    let ans1 = (-b+(Math.sqrt((b**2)-(4*a*c))))/(2*a)
    let ans2 = (-b-(Math.sqrt((b**2)-(4*a*c))))/(2*a)
    let ans = ''
    if(ans1==ans2) {
        ans = '{'+ans1+'}'
        
    }
    else {
         ans = '{'+ans1 + ', ' + ans2+'}'
    }
    return ans
}
console.log('ax^2+bx+c',SoveQuadraticEquation())
console.log('ax^2+bx+c',SoveQuadraticEquation(1, 4, 4))
console.log('ax^2+bx+c',SoveQuadraticEquation(1, -1, -2))
console.log('ax^2+bx+c',SoveQuadraticEquation(1, 7, 12))
console.log('ax^2+bx+c',SoveQuadraticEquation(1, 0, -4))
console.log('ax^2+bx+c',SoveQuadraticEquation(1, -1, 0))

//Declare a function name printArray. It takes array as a parameter
//and it prints out each value of the array.
const printArray = arrays => {
    for (array of arrays){
        console.log(array)
    }
}
console.log(printArray([2,9,8,3,5]))

//Declare a function name swapValues. 
//This function swaps value of x to y.
const swapValues = (x,y) => {
    let swapArray = []
    let temp = 0
    temp = x
    x = y
    y = temp
    swapArray.push(x,y)
    return swapArray
}
const swap = swapValues(1,2)
console.log('x=>',swap[0],'y=>',swap[1])
//Declare a function name reverseArray. It takes array as a 
//parameter and it returns the reverse of the array
// (don't use method).
const reverseArray = arrays => {
    let reverseArray = []
    for(const array of arrays) {
        reverseArray.unshift(array)
    }
    return reverseArray
}
const reverse = reverseArray([1,2,3,4,5,6])
console.log(reverse)

//Declare a function name capitalizeArray. It takes array as a
//parameter and it returns the - capitalizedarray.
const capitalizeArray = arrays => {
    const capitalArray = []
    for (const array of arrays) {
     capitalArray.push(array.toUpperCase())
    }
    return capitalArray
}
console.log(capitalizeArray(['sharanya','sanjay','shwetha']))

//Declare a function name addItem. It takes an item parameter 
//and it returns an array after adding the item
const addItem = (array,item) => {
    array.push(item)
    return array
}
console.log(addItem(['banana','grapes','orange'],'mango'))

//Declare a function name removeItem. 
//It takes an index parameter and it returns an array 
//after removing an item
const removeItem = (array,index) => {
   array.splice(index,1)
   return array
}
console.log(removeItem(['banana','grapes','orange','mango'],2))

//Declare a function name sumOfNumbers. It takes a number 
//parameter and it adds all the numbers in that range.
const sumOfNumberRange = num => {
    let sum = 0
    for(let i = 0; i<=num; i++) {
        sum = sum + i
    }
    return sum
}
console.log(sumOfNumberRange(100))

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOddsRange = num => {
    let sum = 0
    for(let i = 0; i<=num; i++) {
        if(i % 2 == 1) {
            sum = sum + i
        }
      
    }
    return sum
}
console.log(sumOfOddsRange(100))

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEvensRange = num => {
    let sum = 0
    for(let i = 0; i<=num; i++) {
        if(i % 2 == 0) {
            sum = sum + i
        }
      
    }
    return sum
}
console.log(sumOfEvensRange(100))

//Declare a function name evensAndOdds . 
//It takes a positive integer as parameter and it 
//counts number of evens and odds in the number.
const evenAndOdds = number => {
    let countArray = []
    let counteven = 0
    let countOdd = 0
    for(let i=1; i<=number; i++) {
        if (i % 2 == 0) {
            counteven++
        }
        else {
            countOdd++
        }
    }
    countArray.push(counteven,countOdd,number)
    return countArray
}
const countevenOdd = evenAndOdds(8)
console.log(`For the number ${countevenOdd[2]}, number of evens are ${countevenOdd[0]} and the number of odds are ${countevenOdd[1]}`)

//Write a function which takes any number of arguments 
//and return the sum of the arguments
const sumOfArguements = (...n) => {
    let sum = 0
    for(let i=0; i<n.length; i++) {
    sum = sum + n[i]
    
}
return sum
}
console.log(sumOfArguements(1,2,3,4,5))
//Write a function which generates a randomUserIp.
//eg: 1.160.10.240
const randomUserIp = () =>{
    let ip1 = Math.floor(Math.random()*256)
    let ip2 = Math.floor(Math.random()*256)
    let ip3 = Math.floor(Math.random()*256)
    let ip4 = Math.floor(Math.random()*256)
    let ip = ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4
    return ip
}
console.log(randomUserIp())

//Write a function which generates a randomMacAddress
//eg: 00:0a:95:9d:68:16
const macId = () => {
    let macChars = '0123456789abcdef'
    let macLen = macChars.length
    let macIndex = Math.floor(Math.random()*macLen)
    let macId1 =''
    for(let i = 0; i<2; i++) {
    macId1 = macId1 + macChars[Math.floor(Math.random()*macLen)]
    }
    return macId1
}
const randomMacAddress = () => {
    let macIds = macId() + ':' + macId() + ':' + macId() + ':' + macId() + ':' +macId() + ':' + macId()
    return macIds

}
console.log(randomMacAddress())

//Declare a function name randomHexaNumberGenerator. 
//When this function is called it generates a random 
//hexadecimal number. The function return the hexadecimal number.
const randomHexaNumber = () => {
    let hexaChar= '0123456789ABCDEF'
    let hexaLen = hexaChar.length
    //let hexaIndex = Math.floor(Math.random()*hexaLen)
    let hexaId = '#'
    for (let i=0; i<6; i++) {
        hexaId = hexaId + hexaChar[Math.floor(Math.random()*hexaLen)]

    }
    return hexaId
}
console.log(randomHexaNumber())
//Declare a function name userIdGenerator. 
//When this function is called it generates seven character id. 
//The function return the id.
const userIdGenerator = () => {
    let userIdChar = '0123456789abcdefghijklmnopqrstuvwxysABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let userIdLen = userIdChar.length
    let userIdIndex = Math.floor(Math.random() * userIdLen)
    let userId = ''
    for(let i=0; i<7; i++) {
        userId = userId + userIdChar[Math.floor(Math.random() * userIdLen)]

    }    
    
    return userId
}
console.log(userIdGenerator())

//Modify question number n . Declare a function name 
//userIdGeneratedByUser. It doesn’t take any parameter but it 
//takes two inputs using prompt(). One of the input is the number
// of characters and the second input is the number of ids which
// are supposed to be generated.
const userIdGeneratedByUser = () => {
    let prompt1 = prompt('Enter the number of characters: ')
    let noOfChar = parseInt(prompt1)
    let prompt2 = prompt('Enter the number ofIds: ')
    let noOfIds = parseInt(prompt2)
    let userIdChar = '0123456789abcdefghijklmnopqrstuvwxysABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let userIdLen = userIdChar.length
    let userIdIndex = Math.floor(Math.random() * userIdLen)
    let userId = ''
    for(let id = 0;id<noOfIds; id++) {
        userId = ''
       for(let i = 0; i<noOfChar; i++) {
           userId = userId + userIdChar[Math.floor(Math.random() * userIdLen)]
        }
          console.log(userId)
    }
}
userIdGeneratedByUser()

//Write a function name rgbColorGenerator and it generates
// rgb colors.
const rgbColorGenerator = () => {
    let color1 = Math.floor(Math.random() * 256)
    let color2 = Math.floor(Math.random() * 256)
    let color3 = Math.floor(Math.random() * 256)
    let rgb = `rgb(${color1},${color2},${color3})`
    return rgb
}
console.log(rgbColorGenerator())
//Write a function arrayOfHexaColors which return any number of
// hexadecimal colors in an array.1
const arrayOfHexaColors = () => {
    let len = Math.floor((Math.random()+1)*20)
    let arrayHexa = []
    console.log('len is',len)
    for (let i = 0; i<len; i++){
        let hex = randomHexaNumber()
        arrayHexa.push(hex)
    }
    return arrayHexa
}
console.log(arrayOfHexaColors())
//Write a function arrayOfRgbColors which return any number of 
//RGB colors in an array.
const arrayOfRgbColors = () => {
    let len = Math.floor((Math.random()+1)*20)
    let arrayRGB = []
    console.log('len is',len)
    for (let i = 0; i<len; i++){
        let rgb = rgbColorGenerator()
        arrayRGB.push(rgb)
    }
    return arrayRGB
}
console.log(arrayOfRgbColors())

//Write a function convertHexaToRgb which converts hexa color
// to rgb and it returns an rgb color.

//Write a function convertRgbToHexa which converts rgb to hexa 
//color and it returns an hexa color.
const componentToHex = c => {
    let hex = c.toString(16);
    let hexa = ''
    console.log('hex is ',hex)
    if (hex.length ==1) {
        hexa = '0' + hex
    }
    else {
        hexa =hex
    }
    return hexa
  }
  
  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  const componentToRgb = value => {
      let hexa = parseInt(value,16)
      return hexa
  }
  
  console.log(rgbToHex(25, 30, 196))// #0033ff
  const hexToRgb = (hex) => {
      let noHash = hex.replace('#','')
      let value1 = noHash.slice(0,2)
      let value2 = noHash.slice(2,4)
      let value3 = noHash.slice(4,6)
      console.log('value1=',value1)
      console.log('value2=',value2)
      console.log('value3=',value3)
      return `rgb(${componentToRgb(value1)}, ${componentToRgb(value2)}, ${componentToRgb(value3)})` 
  }
console.log(hexToRgb('#0033ff'))
//Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColors = () => {
    let prompt1 = prompt('Enter the number of colors')
    let numOfCol = parseInt(prompt1)
    let arrayRGB = []
    for (let i = 0; i<numOfCol; i++){
        let rgb = rgbColorGenerator()
        arrayRGB.push(rgb)
    }
    return arrayRGB
}
console.log(generateColors())

//Call your function shuffleArray, it takes an array as a 
//parameter and it returns a shuffled array
const shuffleArray = array =>{
    let shuffle = []
    let len =array.length
    for(let i=0;shuffle.length<len;i++) {
        let index = Math.floor(Math.random()*len)
        if(shuffle.indexOf(array[index])==-1) {
            shuffle.push(array[index])
        }
    }
    
    return shuffle
}
console.log('Shuffled array',shuffleArray([1,2,3,4,5,6]))

//Call your function factorial, it takes a whole number as a
// parameter and it return a factorial of the number
const factorial = num => {
    let fact =1
    for(let i =1; i<=num; i++) {
        fact = fact * i

    }
    return fact
}
console.log(factorial(6))

//Call your function isEmpty, it takes a parameter and it 
//checks if it is empty or not
const isEmpty = para =>{
    let len = para.length
    for(let i=0; i<len;i++) {
        if(para[i]!=0) {
            return false
        }
    }
    return true
}
let empty =isEmpty('     ')
if(empty == true) {
    console.log('The parameter is empty')
}
else {
    console.log('The parameter is not empty')
}

//Call your function sum, it takes any number of arguments
// and it returns the sum.
const sumOfAny = (...n) => {
    let sum = 0
    for(let i = 0; i<n.length;i++) {
        sum = sum + n[i]
    }
    return sum
}
console.log(sumOfAny(1,2,3,4,5))

//Write a function called sumOfArrayItems, 
//it takes an array parameter and return the sum of all the items. 
//Check if all the array items are number types.
// If not give return reasonable feedback.
const sumOfArray = arrays => {
    let sum = 0
    for (const array of arrays) {
        if(typeof(array)!='number'){
            return false
        }
        else {
            sum = sum + array
        }
    }
    return sum
}
let sumArray = sumOfArray(([1,2,3,'hi']))
if (sumArray==false) {
    console.log('All the values in the array are not numbers to add')
}
else {
    console.log('Sum of array',sumArray)
}
//Write a function called average, it takes an array
// parameter and returns the average of the items. 
//Check if all the array items are number types. 
//If not give return reasonable feedback.
const avgOfArray = arrays => {
    let sum = 0
    let avg = 0
    for (const array of arrays) {
        if(typeof(array)!='number'){
            return false
        }
        else {
            sum = sum + array
        }
    }
    avg = sum/(arrays.length)
    return avg
}
let avgArray = avgOfArray(([1,2,3,4]))
if (avgArray==false) {
    console.log('All the values in the array are not numbers to avg')
}
else {
    console.log('Avg of array',avgArray)
}

//Write a function called modifyArray takes array as parameter 
//and modifies the fifth item of the array and return the array. 
//If the array length is less than five it return 'item not found'.
const modifyArray = arrays => {
    if(arrays.length<5) {
        return 0
    }
    if(typeof(arrays[4])!='string'){
        return 1
    }

    arrays[4] =arrays[4].toUpperCase()
    return arrays
}
let modify =modifyArray(['mango','banana','orange',])
if(modify == 0) {
    console.log('Array length is less than 5')
}
else if(modify == 1) {
    console.log('Fifth element is not a string to modify')
}
else {
    console.log('Modified array is',modify)
}

//Write a function called isPrime, which checks if a number is 
//prime number.
const isPrime = num => {

    if(num<=1) {
        return false
    }
    
    else if(num>3) {
        for (let i = 2; i<num; i++) {
            if( num % i == 0) {
                return false
            }
            
        }
        return true
    }
    else {
        return true
    }
}
let primeNum = isPrime (17)
if (primeNum == true) {
    console.log('The number is prime')
}
else {
    console.log('The number is not prime')
}

//Write a functions which checks if all items are unique in 
//the array.
const checkUnique = array => {
    console.log('inside the function')
    for(let i=0;i<array.length;i++){
        if(array.indexOf(array[i])!=i) {
            return false
        }
    }
    return true
}
let uniqueArr = checkUnique([4,1,2,3,4])
if (uniqueArr == true) {
    console.log('All the items are unique')
}
else {
    console.log('All the items are not unique')
}

//Write a function which checks if all the items 
//of the array are the same data type.
const dataTypeArr = arrays => {
    let type = typeof(arrays[0])
    for(array of arrays) {
        if(typeof(array)!=type) {
            return false
        }
    }
    return true
 }
 let dataType = dataTypeArr([1,2,3,4,'hi'])
if (dataType == true) {
    console.log('All the items are of same data type')
}
else {
    console.log('All the items are not of same data type')
}


//JavaScript variable name does not support special characters 
//or symbols except $ or _. Write a function *isValidVariable 
//which check if a variable is valid or invalid variable.

const isValidVariable = variable => {
    let regex = /[^\w$_]/g
    if (variable.match(regex)) {
        return false
    }
   return true
}
let validVar = isValidVariable('Gi%io')
if (validVar == true) {
    console.log('The variable is valid')
}
else {
    console.log('The variable is not valid')
}

//Write a function which returns array of seven random numbers 
//in a range of 0-9. All the numbers must be unique.
const sevenRandomArray = () => {
    let sevenArray = []
    let char ='0123456789'
    let len = char.length
    for (let i=0; sevenArray.length < 7; i++) {
        let index = Math.floor(Math.random()*10)
        if(sevenArray.indexOf(char[index])== -1){
            sevenArray.push(char[index])
        }
    }
    return sevenArray
}
console.log(sevenRandomArray())
//Write a function called reverseCountries, it takes 
//countries array and first it copy the array and 
//returns the reverse of the original array
const reverseAllCountries = allCountries => {
const countryCopies = [...allCountries]
const reverseCopyCountries =[]
for (const countryCopy of countryCopies) {
    reverseCopyCountries.unshift(countryCopy)
}
return reverseCopyCountries
}
console.log(reverseAllCountries(allCountries))
