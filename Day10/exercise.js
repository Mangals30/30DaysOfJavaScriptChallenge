//Exercises:Level 1

//create an empty set
const emptySet = new Set()
console.log(emptySet)

//Create a set containing 0 to 10 using loop
const numSet = new Set()
for (let i = 0; i<11; i++) {
    numSet.add(i)
}
console.log(numSet)

//Remove an element from a set
numSet.delete(0)
console.log(numSet)

//Clear a set
numSet.clear()
console.log(numSet)

//Create a set of 5 string elements from array
const stringArr = ['a','b','c','d','e']
const stringSet = new Set()
for (const arr of stringArr) {
    stringSet.add(arr)
}
console.log(stringSet)

//Create a map of countries and number of characters of a country
const countryMap = new Map()
const countries = ['Finland', 'Sweden', 'Norway']
for (const country of countries) {
    countryMap.set(country,country.length)
}
console.log(countryMap)

//Exercises:Level 2
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

//Find a union b
const c = [...a,...b]
const setC = new Set(c)
console.log(setC)

//Find a intersection b
const seta = new Set(a)
const setb = new Set(b)
const arrc = a.filter(a => setb.has(a))
console.log(arrc)

//Find a with b ---> A-B = A - (A∩B)
const setArrC = new Set(arrc)
const aWb = a.filter(a => !setArrC.has(a))
console.log(aWb)

//Exercises:Level 3
//*** Use the countries data to find the 10 most spoken languages:

const mostSpokenLanguages = (countries, count) => {
    const allLangArrs = countries.map(country => country.languages)
console.log(allLangArrs)
const allLangsArr = [].concat.apply([],allLangArrs)
console.log(allLangsArr)
const langSet = new Set (allLangsArr)
const uniqueLang = Array.from(langSet)
console.log(uniqueLang)
const langCount =[]
for (const lang of uniqueLang) {
    let counter =0
    for (const country of countries) {
        if(country.languages.includes(lang)) {
            counter ++
        }
    }
    langCount.push({language : lang, counts: counter})
}
console.log(langCount)
console.log(langCount)
langCount.sort((a,b) => {
    if (a.counts < b.counts) return 1
    if (a.counts > b.counts) return -1
    return 0
})
const tenLang = langCount.slice(0,count)
const tenLangMap = new Map()
for (const lang of tenLang){
    tenLangMap.set(lang.counts,lang.language)
}
return (tenLang)
}
console.log(mostSpokenLanguages(allCountries,10))