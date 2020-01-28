//Read the countries API using fetch and print 
//the name of country, capital, languages,
// population and area.

const countriesAPI = 'https://restcountries.eu/rest/v2/all'
fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    const newArr = []
    console.log(data)
    for (const country of data) {
        let{name,capital,languages,population,area} = country
        newArr.push({name,capital,languages,population,area})
    }
    console.log(newArr)
}).catch(error => console.log(error))

const fetchCountriesUrl = async () =>{
    try {
        const newArr = []
        const response = await fetch(countriesAPI)
        const data = await response.json()
        for (const country of data) {
            let{name,capital,languages,population,area} = country
            newArr.push({name,capital,languages,population,area})
        }
        console.log(newArr)

    }
    catch (error){
        console.log(error)

    }
}
fetchCountriesUrl()

//Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
catName = []
fetch(catsAPI)
.then(response => response.json())
.then(data =>{
    console.log(data)
    for (const cat of data) {
        let{name} = cat
        catName.push(name)
    }
    console.log(catName)
}).catch(error => console.log(error))

const fetchCatUrl = async () => {
    try {
        const response = await fetch(catsAPI)
        const data = await response.json()
        for (const cat of data) {
            let{name} = cat
            catName.push(name)
        }
        console.log(catName)
    }
    catch(error) {
        console.log(error)
    }
}

fetchCatUrl()

//Read the cats api and find the average weight
// of cat in metric unit.
const averageWeight = async () => {
    try {
        const nums = []
        const response = await fetch(catsAPI)
        const data = await response.json()
        console.log(data)
        for (const cat of data) {
            let{weight} = cat
            const num =[]
            const num1=parseInt (weight.metric.slice(0,1))
            const num2 =parseInt (weight.metric.slice(4))
            for (let i = num1; i<=num2;i++) {
                num.push(i)
            }
            let sum = 0
            for(const n of num) {
                sum = sum + n
            }
            let avg = sum/num.length
            nums.push(avg)
           
        }
        console.log(nums)
    }
    catch(error) {
        console.log(error)
    }
}
averageWeight()

//Read the countries api and find out the 10 largest countries
const tenLargestCountries = async () =>{
    try {
        const areaCountries = []
        const response = await fetch(countriesAPI)
        const data = await response.json()
        for (const country of data) {
            let{name,area} = country
            areaCountries.push({name,area})
        }
        areaCountries.sort((a,b) => {
            if(a.area < b.area) return 1
            if(a.area > b.area) return -1
            return 0
        })
        const tenCountries = []
        for(const country in areaCountries) {
            tenCountries.push(areaCountries[country].name)
        }
        console.log(tenCountries)
        console.log('World\'s ten largest countries are',tenCountries.slice(0,10))
        console.log('World\'s ten largest countries and its area are',areaCountries.slice(0,10))

    }
    catch (error){
        console.log(error)

    }
}
tenLargestCountries()
//Read the countries api and count total number of languages in the world used as officials.
const numOfLangs = async () =>{
    try {
        const newArr = []
        const response = await fetch(countriesAPI)
        const data = await response.json()
        for (const country of data) {
              let{languages} = country
              for(const lang of languages) {
                newArr.push(lang.name)
              }
                    }
        
        const langSet = new Set(newArr)
        const langArr = Array.from(langSet)
        console.log('No. of official languages =',langArr.length)

    }
    catch (error){
        console.log(error)

    }
}
numOfLangs()

