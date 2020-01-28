const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]
//Explain the difference between forEach, map, filter, and reduce.
//forEach is for consoling the array elements. Map is to modify the entire array.Filter filters the element of an array based on the condition. Reduce is a value

//Define a call function before you them in forEach, 
//map, filter or reduce.

//Use forEach to console.log each country in the countries array.
countries.forEach (country => console.log(country))


//Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name))

//Use forEach to console.log each number in the numbers array.
numbers.forEach(number => console.log(number))

//Use map to create a new array by changing each country 
//to uppercase in the countries array.
const uppercaseCountries = countries.map(country => country.toUpperCase())
console.log('Uppercase countries',uppercaseCountries)

//Use map to create an array of countries length from 
//countries array.
const lengthCountries = countries.map(country => country.length)
console.log('Lengths of countries',lengthCountries)

//Use map to create a new array by changing each number 
//to square in the numbers array
const squareNumbers = numbers.map(number => number**2)
console.log('Square numbers',squareNumbers)

//Use map to change to each name to uppercase in the names array
const uppercaseNames = names.map(name => name.toUpperCase())
console.log('Uppercase names',uppercaseNames)

//Use map to map the products array to its corresponding prices.
const productPrices = products.map(product => product.price)
console.log('Product prices',productPrices)

//Use filter to filter out countries containing land.
const landCountries = countries.filter(country => country.match(/land/ig))
console.log('Countries which contains land',landCountries)

//Use filter to filter out countries having six character.
const sixCharCountries = countries.filter(country => country.length ==6)
console.log('Countries with 6 characters',sixCharCountries)

//Use filter to filter out countries containing six letters 
//and more in the country array.
const sixOrMore = countries.filter(country => country.length>=6)
console.log('Countries with 6 or more characters',sixOrMore)

//Use filter to filter out country start with 'E';
const countryE = countries.filter(country => country[0] == 'E')
if(countryE[0]){
    console.log(countryE)
}
else {
    console.log('No countries starting with \'E\'')
}
//Use filter to filter out only prices with values.
const pricesWithValues = products.filter(product => typeof(product.price)=='number')
console.log('Prices with values',pricesWithValues)

//Find the total price of products by chaining two or 
//more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const pricesOfProducts = products.map(product => product.price)
const filterPrices = pricesOfProducts.filter(price => typeof(price)=='number')
const totalPrice = filterPrices.reduce((accum,curr) => accum + curr)
console.log('Total price is',totalPrice)

//Find the sum of price of products using only reduce reduce(callback))
const reducedPrice = products.reduce((accum, curr) => {
    //nst pricesOfProducts= products.map(product => product.price)
    //const filterPrices = pricesOfProducts.filter(price => typeof(price)=='number')
})
console.log(reducedPrice)
//Declare a function called getStringLists which takes an array 
//as a parameter and then returns an array only with string items.
const getStringLists = array =>{    
const stringArray = array.filter(element => typeof(element)=='string')
return stringArray
} 
console.log(getStringLists([1,2,'delhi',false,'bye',3,'paris',true]))

//Use reduce to sum all the numbers in the numbers array.
const sumOfArray = numbers.reduce((accum,curr) => accum + curr)
console.log('Sum of the array is',sumOfArray)

//Use reduce to concatenate all the countries and 
//to produce this sentence: 
//Estonia, Finland, Sweden, Denmark, Norway, and IceLand are 
//north European countries
console.log(countries)
const reduceCountries = [...countries]
let ind = reduceCountries.indexOf('IceLand')
console.log(ind)
reduceCountries[4] = ''
reduceCountries.splice(4,1)
console.log(reduceCountries)
const sentence = reduceCountries.reduce((arr,curr) => arr + ', ' + curr)
console.log('Estonia, ' + sentence + ', and Iceland are north European countries')

//Explain the difference between some and every

//Use some to check if some names' length greater than seven in names array
const some = names.some(element => element.length>7)
if (some==true) {
    console.log('There are some names which has more than 7 chars')
}
else {
    console.log('There are no nome which has more than 7 chars')
}

//Use every to check if all the countries contain the word land
const every = countries.every(element => element.match(/land/ig))
if (every == true) {
    console.log('All countries have land in it.')
}
else {
    console.log('All countries don\'t have land in it.')
}
//Explain the difference between find and findIndex.

//Use find to find the first country containing only 
//six letters in the countries array
const firstCountry = countries.find(element => element.length==6)
console.log(firstCountry)

//Use findIndex to find the position of the first country 
//containing only six letters in the countries array
const firstCountryIndex = countries.findIndex(element => element.length == 6)
console.log(firstCountryIndex)

//Use findIndex to find the position of Norway
// if it doesn't exist in the array you will get -1.
const norwayInd = countries.findIndex(element => element == 'Norway')
if (norwayInd == -1) {
    console.log('Norway doesnot exist')
}
else {
    console.log('Index of Norway is',norwayInd)
}

//Use findIndex to find the position of Russia if it doesn't 
//exist in the array you will get -1.
const russiaInd = countries.findIndex(element => element=='Russia')
if (russiaInd == -1) {
    console.log('Russia doesnot exist')
}
else {
    console.log('Index of Norway is',russiaInd)
}

//Declare a function called categorizeCountries which returns 
//an array of countries which have some common pattern
//(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const countries1 = [
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
    'Kenya',
  ]
  const categorizeIA = countries1.filter(country => country.endsWith('ia'))
  console.log(categorizeIA)

  //Create a function which return an array of objects,
  //which is the letter and the number of times the letter 
  //use to start with a name of a country.
   const countryNames = allCountries.map(country => country.name)
   console.log(countryNames)
   const countryAlpha = countryNames.map(country => country[0])
   console.log(countryAlpha)
   const setAlpha = new Set(countryAlpha)
   const uniqueAlpha = Array.from(setAlpha)
   uniqueAlpha.sort()
   console.log(uniqueAlpha)
   const alphaCount = []
   for (const alpha of uniqueAlpha) {
       let count = 0
       for (const country of allCountries) {
           if (country.name.startsWith(alpha)) {
            count++
           }
          
       }
       alphaCount.push({[alpha] : count}) 
   }
   console.log(alphaCount)

//Declare a getFirstTenCountries function and return an array 
//of ten countries. Use different functional programming to 
//work on the countries.js array
const getCountries = allCountries.map(country => country.name)
const getFirstCountries = getCountries.filter((country,index,array) => index < 10)
console.log(getFirstCountries)

//Declare a getLastTenCountries function which which returns 
//the last ten countries in the countries array.
const getLastCountries = getCountries.filter((country, index, array) => (index>(array.length-11))&&(index<(array.length)))
console.log(getLastCountries)

//Find out which letter is used many times as initial for a 
//country name from the countries array (eg. Finland, Fiji, France etc)
const country_Names = allCountries.map(country => country.name)
const country_alpha = country_Names.map(country => country[0])
const alpha_set = new Set(country_alpha)
const alpha_array = Array.from(alpha_set)
alpha_array.sort()
alpha_obj_arr = []
for (const alpha of alpha_array) {
    let count = 0
    for (const country of country_Names) {
     if (country.startsWith(alpha)) {
         count++
     }
    }
    alpha_obj_arr.push({alphabet : alpha, count : count})
}
alpha_obj_arr.sort((a,b) => {
    if(a.count<b.count) return 1
    if((a.count>b.count)) return -1
    return 0
})
console.log(alpha_obj_arr)
console.log(`The alphabet ${alpha_obj_arr[0].alphabet} is used most frequently.It is used ${alpha_obj_arr[0].count} times.`)
//Use the countries information, in the data folder. Sort countries by name, by capital, by population
const sortByName = [...allCountries]
sortByName.sort((a,b) => {
    if (a.name < b.name) return -1
    if(a.name > b.name) return 1
    return 0
})
console.log('Countries array sorted by name is ', sortByName)

const sortByCapital = [...allCountries]
sortByCapital.sort((a,b) => {
    if (a.capital < b.capital) return -1
    if (a.capital > b.capital) return 1
    return 0
})
console.log('Countries array sorted by capital is ',sortByCapital)

const sortByPopulation = [...allCountries]
sortByPopulation.sort((a,b) => {
    if (a.population < b.population) return -1
    if(a.population > b.population) return 1
    return 0
})
console.log('Countries array sorted by population is ',sortByPopulation)

//*** Find the 10 most spoken languages:
const languageArray = allCountries.map(country => country.languages)
console.log(languageArray)
const allLang = [].concat.apply([],languageArray)
console.log(allLang)
const setLang = new Set(allLang)
const uniqueLang = Array.from(setLang)
console.log(uniqueLang)
const langCount =[]
for (const lang of uniqueLang) {
    let count =0
    for (const country of allCountries) {
        if(country.languages.includes(lang)) {
            count ++
        }
    }
    langCount.push({language : lang, count: count})
}
console.log(langCount)
langCount.sort((a,b) => {
    if (a.count < b.count) return 1
    if (a.count > b.count) return -1
    return 0
})
const tenLang = langCount.slice(0,10)
const mostTenLang = tenLang.map(lang => lang.language)
console.log('Most spoken ten languages',mostTenLang)

//*** Use countries_data.js file create a function
// which create the ten most populated countries
const populatedCont = allCountries => {
    const populationObj = []
    populationArr = allCountries.map(country => country.population)
    populationArr.sort((a,b) => a-b)
    populationArr.reverse()
    const tenPopulatedArr = populationArr.slice(0,10)
    for (const population of tenPopulatedArr) {
        for (const country of allCountries) {
            if(country.population == population) {
                 populationObj.push({country:country.name, population:country.population})
            }
        }
    }
    return populationObj
}
console.log('Ten most populated countries',populatedCont(allCountries))

//*** Try to develop a program which calculate
// measure of central tendency of a sample
//(mean, median, mode) and measure of variability
//(range, variance, standard deviation).
// In addition to those measures find the min,
// max, count, percentile, and frequency
// distribution of the sample. 
//You can create an object called statistics 
//and create all the functions which do 
//statistical calculations as method for the 
//statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = {}
statistics.ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
statistics.count = function () {
    return this.ages.length
}
statistics.sum = function () {
    let sumOfAges = this.ages.reduce((accum,curr) => accum + curr)
    return sumOfAges
}
statistics.min = function () {
    const minAge = [...this.ages]
    minAge.sort()
    return minAge[0]
}
statistics.max = function() {
    const maxAge = [...this.ages]
    maxAge.sort()
    maxAge.reverse()
    return maxAge[0]
}
statistics.range = function() {
    return `${this.max()-this.min()}`
}
statistics.mean = function() {
    return `${Math.round(this.sum()/this.count())}`
}
statistics.median = function() {
    const medianArr = [...this.ages]
    medianArr.sort()
    const index = Math.ceil((medianArr.length)/2)
    const median = medianArr[index - 1]
    return median
}
statistics.mode = function() {
    const modes = {}
    const modeObj =[]
    const modeArr = [...this.ages]
    const modeSet = new Set(modeArr)
    const modeUniq = Array.from(modeSet)
    for (const element of modeUniq) {
        let count = 0
        for (const arr of modeArr) {
            if(element == arr) {
             count++
            }
        }
        modeObj.push({element,count})
        modeObj.sort((a,b) =>{
            if(a.count<b.count) return 1
            if(a.count>b.count) return -1
            return 0
        })
    }
    modes.mode = modeObj[0].element
    modes.count = modeObj[0].count
    return modes
}
statistics.variance = function () {
    const varianceArr = [...this.ages]
    let vari = 0
    for (const variance of varianceArr){
        vari = vari + (this.mean()-variance)**2
    }
    return `${vari/this.count()}`
}
statistics.std = function ()  {
    const std = Math.sqrt(this.variance())
    return (std.toFixed(1))
}
statistics.frequency = function () {
    const modeObj = {}
    const modeArr = [...this.ages]
    const modeSet = new Set(modeArr)
    const modeUniq = Array.from(modeSet)
    for (const element of modeUniq) {
        let count = 0
        for (const arr of modeArr) {
            if(element == arr) {
             count++
            }
        }
        modeObj[element] = count
    }
    return modeObj
}
statistics.describe = function() {
       return {
    Count: this.count(),
    Sum:  this.sum(),
    Min:  this.min(),
    Max:  this.max(),
    Range: this.range(),
    Mean:  this.mean(),
    Median:  this.median(),
    Mode:  this.mode(),
    Variance:  this.variance(),
    StandardDeviation: this.std(),
    FrequencyDistribution: this.frequency()
    }
}
console.log(statistics.frequency())
const obj = statistics.describe()
console.log(JSON.stringify(obj,undefined,4))