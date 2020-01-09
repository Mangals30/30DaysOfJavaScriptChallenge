//Declare an empty array;
const array1 =[]
const array2 = new Array()
const array3 = Array()
console.log(array1,array2,array3)

//Declare an array with more than 5 number of elements
const array4 = new Array(6)
array4.push(1,2,3,4,5,6,7,8,9)
console.log(array4)
array5 = [1,2,3,4,5,6,7,8]

//Find the length of your array
console.log(array4.length)
console.log(array5.length)

//Get the first item, the middle item and the last item of the array
let firstItem = array5[0]
let lastItem = array5[array5.length - 1]
console.log('First Item is:',firstItem)
console.log('Last Item is:',lastItem)
let middleItem1 = ''
let middleItem2 = ''
let middle = (array5.length) % 2
//console.log('middle is',middle)
let element1 = ''
let element2 = ''
if (middle == 0) {
    element1 = Math.floor((array5.length)/2)
    //console.log('element1 is',element1)
    element2 = element1 + 1
    //console.log('element2 is',element2)
    middleItem1 = array5[element1 - 1]
    middleItem2 = array5[element2 - 1]
    console.log('Middle Items are :',middleItem1,middleItem2)

}
else {
    element1 = Math.ceil((array5.length)/2)
    middleItem1 = array5[element1 - 1]
    console.log('Middle Item is:',middleItem1)
}
//Declare an array called mixedDataTypes,put different data types in your array and find length of the array. You are should size be greater than 5

const mixedDataTypes = [1,'hi',true,undefined,null,2.30]
console.log('mixedDataTypes',mixedDataTypes)

//Declare an array variable name itCompanies and 
//assign initial values 
//Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']

//Print the array using console.log()
console.log('IT companies',itCompanies)

//Print the number of companies in the array
console.log('Number of companies:',itCompanies.length)

//Print the first company, middle and last company
let firstItCompany = itCompanies[0]
let lastItemCom = itCompanies[itCompanies.length -1]
let middleIt1 = ''
let middleIt2= ''
let middleItCompany = []
let elem1 = 0
let elem2 = 0
if(itCompanies.length % 2 ==0){
    elem1 = Math.floor((itCompanies.length) / 2)
    elem2 = elem1 + 1
    middleIt1 = itCompanies[elem1 - 1]
    middleIt2 = itCompanies[elem2 - 1]
    middleItCompany.push(middleIt1,middleIt2)
}
else {
    elem1 = Math.ceil((itCompanies.length) / 2)
    middleIt1 = itCompanies[elem1 - 1]
    middleItCompany.push(middleIt1)
}

console.log(`First It company: ${firstItCompany}.Last It company: ${lastItemCom}.Middle It company: ${middleItCompany.toString()}`)

//Print out each company
itCompanies.forEach(itCompany => console.log(itCompany))

//Change each company name to uppercase one by one and print them out
itCompanies.forEach(itCompany => console.log(itCompany.toUpperCase()))

//Print the array like as a sentence: 
//Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon 
//are big IT companies.
const tempArray = []
itCompanies.forEach(itCompany => tempArray.push(itCompany))
const tempArray2 = tempArray.slice(-1)
const tempArray1 = tempArray.slice(0,tempArray.length - 1)
tempArray2.unshift(' and ')
console.log(tempArray,tempArray1,tempArray2)
let sentence = tempArray1.join() + tempArray2.join('')
console.log(sentence + ' are big IT companies.')

//Check if a certain company exists in the itCompanies array. 
//If it exist return the company else return a company is not found
let company = 'Facebook'
let indexFacebook = itCompanies.indexOf(company)
if(indexFacebook == -1) {
   console.log(`${company} is not found`)
}
else {
    console.log(`${company} is found`)
}

//Filter out companies which have more than one 'o' without the filter method
let countOfO = 0
let countArray = []
for(const itCompany of itCompanies) {
    count = 0
    for(itComp of itCompany) {
        if (itComp=='o' || itComp =='O') {
            count++
        }
    }
    if (count>1) {
        countArray.push(itCompany)
    }
}
console.log('Countries which has more than one \'o\':',countArray.toString())

//Sort the array using sort() method
let sortArray = []
itCompanies.forEach(itCompany =>sortArray.push(itCompany))
sortArray.sort()
console.log('Sorted array is',sortArray)

//Reverse the array using reverse() method
let reverseArray = []
itCompanies.forEach(itCompany => reverseArray.push(itCompany))
reverseArray.reverse()
console.log('Reversed array is',reverseArray)

//Slice out the first 3 companies from the array
let sliceArray1 = itCompanies.slice(0,3)
console.log('First 3 elements are,',sliceArray1)

//Slice out the last 3 companies from the array
let sliceArray2 = itCompanies.slice(-3)
console.log('Last 3 elements are,',sliceArray2)

//Slice out the middle IT company or companies from the array
let mid1 = ''
let mid2 = ''
let mid = []
let pos1 = 0
let pos2 = 0
if(itCompanies.length %2 ==0) {
    pos1 = Math.floor((itCompanies.length) / 2)
    pos2 = pos1 + 1
    mid1 = itCompanies[pos1-1]
    mid2 = itCompanies[pos2 -1]
    mid.push(mid1,mid2)
}
else {
    pos1 = Math.ceil((itCompanies.length) / 2)
    mid1 = itCompanies[pos1-1]
    mid.push(mid1)
}
console.log('Middle IT company or companies sliced out:',mid)

//Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

//Remove the middle IT company or companies from the array
let len = itCompanies.length
let midIt1 = ''
let midIt2 = ''
let midIts = []
let ele1 = 0
let ele2 = 0
if(len % 2 == 0) {
    ele1 = Math.floor(len / 2)
    ele2 = ele1 + 1
    midIt1 = itCompanies[ele1 - 1]
    midIt2 = itCompanies[ele2 - 1]
    midIts.push(midIt1,midIt2)
}
else {
    ele1 = Math.ceil(len / 2)
    midIt1 = itCompanies[ele1 - 1]
    midIts.push(midIt1)
}
console.log(midIts)
for (let midIt of midIts) {
    for (let itCompany of itCompanies) {
        if(midIt == itCompany) {
        let index = itCompanies.indexOf(itCompany)
        if(index > -1) {
          itCompanies.splice(index,1)
        }
            
        }
    }
}
console.log(itCompanies)
//Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

//Remove all IT companies
itCompanies.splice(0)
console.log(itCompanies)

//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js ans store the webTechs array in to this file. Access both file in main.js file
//----> done

//First remove all the functions and change the string to array and count the number of words in the array

//let text =
//'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//console.log(words)
//console.log(words.length)
//["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
//13
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let regex = /[^\w\s]/g
let newText = text.replace(regex,'')
console.log(newText)
let textArray = newText.split(' ')
console.log(textArray)
console.log(textArray.length)

//In the following shopping cart add, remove, edit items
//const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if 
//if it has not be already added
let indexOfmeat = shoppingCart.indexOf('Meat')
if(indexOfmeat == -1) {
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)

//add sugar at the end of you shopping cart if it has not been already added
let indexOfSugar = shoppingCart.indexOf('Sugar')
if(indexOfSugar == -1) {
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)

//Remove 'Honey' if you are allergic to honey
let indexOfHoney = shoppingCart.indexOf('Honey')
shoppingCart.splice(indexOfHoney,1)
console.log(shoppingCart)

//modify tea to 'Green Tea'
let indexOfTea = shoppingCart.indexOf('Tea')
console.log(indexOfTea)
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let indexOfEthopia = countries.indexOf('Ethiopia')
if (indexOfEthopia == -1) {
   countries.push('Ethiopia')
}
else {
    console.log('Ethiopia already exists')
}

//In the webTechs array check if Sass exists in the array if it 
//exists print 'Sass is a CSS preprocess'. 
//If it does not exist add Sass to the array.
let indexOfSass = webTechs.indexOf('Sass')
if(indexOfSass == -1) {
    webTechs.push('Sass')
}
else {
    console.log('Sass is a CSS preprocess')
}
console.log(webTechs)

//Concatenate the following two variables and store it in a fullStack variable.
//const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//const backEnd = ['Node','Express', 'MongoDB']
//console.log(fullStack)
//["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//The following is a list of 10 students ages:
//const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
const ageSets = new Set(ages)
const uniqueAge = []
for(ageSet of ageSets) {
    uniqueAge.push(ageSet)
}
const sortedAges = uniqueAge.sort()
console.log(sortedAges)

//Find the min age and the max age
let lenAge = sortedAges.length
let minAge = sortedAges[0]
let maxAge = sortedAges[lenAge-1]
console.log(`Minimum age is ${minAge} and the maximum age is ${maxAge}`)

//Find the median age(one middle item or two middle items 
//divided by two)
let midAge = []
let indexAge1 = 0
let indexAge2 = 0
let age1 = []
let age2 = []
if (lenAge %2 ==0) {
    indexAge1 = Math.floor(lenAge/2)
    indexAge2 = indexAge1+1
    age1 = sortedAges[indexAge1-1]
    age2 = sortedAges[indexAge2-1]
    midAge.push(age1,age2)
}
else {
    indexAge1 = Math.ceil(lenAge/2)
    age1 = sortedAges[indexAge1]
    midAge.push(age1)
}
console.log('Median age:',midAge.toString())

//Find the average age(all items divided by number of items)
let totalAge = sortedAges.reduce((accumulator,current) => accumulator + current)
let averageAge = totalAge/lenAge
console.log('Average age is',Math.round(averageAge))

//Find the range of the ages(max minus min)
let rangeAge = sortedAges[lenAge-1] - sortedAges[0]
console.log('Rage of the ages is',rangeAge)

//Compare the value of (min - average) and (max - average), use abs() method
console.log('Comparing min and max avg',Math.abs(sortedAges[0]-sortedAges[lenAge-1]))

//Find the middle country(ies) in the countries list
let countryElement1 = ''
let countryElement2 = ''
let midCountry1 = ''
let midCountry2 = ''
let midCountry = []
let lenCountry = countries.length
if (lenCountry % 2 == 0) {
    countryElement1 = Math.floor(lenCountry / 2)
    countryElement2 = countryElement1 + 1
    midCountry1 = countries[countryElement1 - 1]
    midCountry2 = countries[countryElement2 - 1]
    midCountry.push(midCountry1,midCountry2)
}
else {
    countryElement1 = Math.ceil(lenCountry / 2)
    midCountry1 = countries[countryElement1 - 1]
    midCountry.push(midCountry1)
}
console.log('Middle country(ies) in the countries list:',midCountry.toString())

//Divide the countries list into two equal lists if it is even. If countries array is not even one more country for the first half.
let countrylist1 = []
let countrylist2 = []
if (lenCountry % 2 == 0) {
    countryElement1 = Math.floor(lenCountry / 2)
}
else {
    countryElement1 = Math.ceil(lenCountry / 2)
    

}
    countryElement2 = countryElement1 + 1
    midCountry1 = countries[countryElement1 - 1]
    midCountry2 = countries[countryElement2 - 1]
    countrylist1 = countries.slice(0,countryElement1)
    countrylist2 = countries.slice(countryElement2-1)


console.log(countrylist1,countrylist2)

