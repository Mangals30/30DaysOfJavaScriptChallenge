const countriesDislay = document.querySelector('.coutries-container')
const statisticsDisplay = document.querySelector('.statistics-container')
const noOfCount = document.querySelector('.no-of-count')
noOfCount.textContent = countries.length
const totalCountries = document.querySelector('#number')
const divError = document.querySelector('.error-message')
const inputSearch = document.querySelector('.country-search')
const popButton = document.querySelector('.population')
const langButton = document.querySelector('.languages')
const subTitle = document.querySelector('.subtitle')
const feedBack = document.querySelector('.feedback')
const most = document.querySelector('.most')
const graphWrapper = document.querySelector('.graph-wrapper')
const worldDiv = document.querySelector('.world-div')
const popChart = document.querySelector('.pop-chart')
const searchMessage = document.querySelector('.search-message')
const nameButton = document.querySelector('.name-home')
const capitalButton = document.querySelector('.capital-home')
const populationButton = document.querySelector('.population-home')
let nameClicked = 0
let populationClicked =0
let capitalClicked = 0
let total = 0

const displayCountries = (country) =>{
    //console.log(country)
    divError.textContent = ''
    const countryDiv = document.createElement('div')
    countryDiv.setAttribute('class','countryDiv')
    const flagImage = document.createElement('img')
    flagImage.setAttribute('class','flag-image')
    const name = document.createElement('p')
    name.setAttribute('class','country-name')
    const capitals = document.createElement('p')
    const lang = document.createElement('p')
    const pop = document.createElement('p')
    name.textContent = country.name
    flagImage.src = country.flag
    capitals.textContent = 'Capital:'+ ' ' + country.capital
    lang.textContent = 'Languges:'+ ' ' + country.languages
    pop.textContent = 'Population:' + ' ' + country.population
    countryDiv.appendChild(flagImage)
    countryDiv.appendChild(name)
    countryDiv.appendChild(capitals)
    countryDiv.appendChild(lang)
    countryDiv.appendChild(pop)
    countriesDislay.appendChild(countryDiv)
    total++
    totalCountries.textContent = total
    

}




const displaysearchCountries = (searchValue) => {
    countriesDislay.textContent = ''
    searchMessage.style.display = 'block'
    const countryArr = searchResultArray(searchValue)
   for(const country of countryArr) {
       displayCountries(country)
   }
}

const errorMessage = () => {
    countriesDislay.textContent = ''
    divError.textContent = ''
    totalCountries.textContent = total
    let errorMessage = '*Please enter only alphabets'
    divError.textContent = errorMessage
    divError.style.color = 'red'
    divError.style.marginRight ='35rem'
    
}

validateSearch = (searchValue) => {
    total = 0
    if (searchValue.length == 0) {
        searchMessage.style.display = 'none'
        const validateCountries = [...countries]
        for (const country of validateCountries) {  
        displayCountries(country)
     }

     displayPopulation(validateCountries)

    }
    else {

    
    if (!searchValue.match(/^[A-Za-z\s]*$/)) {
        total = 0
        divError.style.display = 'block'
        errorMessage()
    }
    else {
         
        displaysearchCountries(searchValue)
        const countryObjArr = searchResultArray(searchValue)
        if(countryObjArr.length == 0) {
            countriesDislay.textContent = ''
            statisticsDisplay.textContent = ''
            totalCountries.textContent = 0

        }
        else {
            displayPopulation(countryObjArr)
        }
        
        

}

   
}

   }

    const searchResultArray = (searchValue) => {    
    const searchResultCountries = [...countries]
    const countryArr = []
    let reg = new RegExp(searchValue,'gi')
    for(const country of searchResultCountries) {
        //if(country.name.match('United')) {
           // console.log(country.name, country.name.match(reg))
         //}
      // if (reg.test(country.name) || reg.test(country.capital) || reg.test(country.languages)) {
        if((country.name.match(reg)) || (country.capital.match(reg)) || (country.languages.toString().match(reg))) {
      //  if(country.name.toLowerCase().includes(searchValue.toLowerCase()) || country.capital.toLowerCase().includes(searchValue.toLowerCase()) || country.languages.toString().toLowerCase().includes(searchValue.toLowerCase())) {

            const countryObj = {}
            countryObj.name = country.name
            countryObj.capital = country.capital
            countryObj.languages = country.languages
            countryObj.population = country.population
            countryObj.flag = country.flag
            countryObj.currency = country.currency
            countryArr.push(countryObj)
        }
        
    }
    return countryArr
   } 
   
    inputSearch.addEventListener('keyup',event => {

         validateSearch(inputSearch.value)      
 
})


/*Ten most spoken languages*/ 
const tenSpokenLanguages = (countries) => {
    const allLangArrs = countries.map(country => country.languages)
    const allLangsArr = [].concat.apply([],allLangArrs)
    const langSet = new Set (allLangsArr)
    const uniqueLang = Array.from(langSet)
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
    langCount.sort((a,b) => {
        if (a.counts < b.counts) return 1
        if (a.counts > b.counts) return -1
        return 0
    })
    const tenLang = langCount.slice(0,10)
    return (tenLang)
    }
    /****************************************************************** */
    
    
    const tenPopulatedCountries = countries => {
        const populationObj = []
        populationArr = countries.map(country => country.population)
        populationArr.sort((a,b) => a-b)
        populationArr.reverse()
        const tenPopulatedArr = populationArr.slice(0,10)
        for (const population of tenPopulatedArr) {
            for (const country of countries) {
                if(country.population == population) {
                     populationObj.push({country:country.name, population:country.population})
                }
            }
        }
        return populationObj
    }
    
    const getTotalPopulation = countries => {
        const popArray = countries.map(country => country.population)
        const sumOfPop = popArray.reduce((accum,current) => accum + current)
        return sumOfPop
    
    }
    
    const getPopWidth = (population) => {
        const totalPopulation = getTotalPopulation(countries)
        const totalWidth = 50
        const width = (population * totalWidth) / totalPopulation
        return width
    }
    const getLangWidth = number => {
    
        const totalNumber = 100
        const totalWidth = 30
        const width = (number * totalWidth) / totalNumber
        return width
    
    }
    
    const displayPopulation = (allCountries) => {
        const populatedArr = tenPopulatedCountries(allCountries)
        const totalPop = getTotalPopulation(countries)
        //const sumOfPop = popArray.reduce((accum,current) => accum + current)
        graphWrapper.textContent = ''
        const worldDiv = document.createElement('div')
        const worldDiv1 = document.createElement('div')
        const world = document.createElement('div')
        const worldDiv2 = document.createElement('div')
        worldDiv.setAttribute('class','worldDiv')
        worldDiv1.setAttribute('class','worldDiv1')
        world.setAttribute('class','world')
        worldDiv2.setAttribute('class','worldDiv2')
        worldDiv1.textContent = 'World'
        worldDiv2.textContent = totalPop
        worldDiv.appendChild(worldDiv1)
        worldDiv.appendChild(world)
        worldDiv.appendChild(worldDiv2)
        graphWrapper.appendChild(worldDiv)
        for (const count of populatedArr) {
            
            const mainDiv = document.createElement('div')
            mainDiv.setAttribute('class','mainDiv')
            mainDiv.style.display = 'flex'
            const div1 = document.createElement('div')
            const subDiv = document.createElement('div')
            const div2 = document.createElement('div')
            const div3 = document.createElement('div')
            div1.setAttribute('class','div1')
            subDiv.setAttribute('class','subDiv')
            div2.setAttribute('class','div2')
            div3.setAttribute('class','div3')
            let country= count.country
            let population = count.population
            div3.style.width = getPopWidth(population) + 'rem'
            subDiv.appendChild(div3)
            div1.textContent = country
            div2.textContent = population
            mainDiv.appendChild(div1)
            mainDiv.appendChild(subDiv)
            mainDiv.appendChild(div2)
            graphWrapper.appendChild(mainDiv)
        }
    }
    
    const displayLanguages = (allCountries) => {
        const languageArr = tenSpokenLanguages(allCountries)
        graphWrapper.textContent = ''
    
        for (const count of languageArr) {
            
            const mainDiv = document.createElement('div')
            mainDiv.setAttribute('class','mainDiv')
            mainDiv.style.display = 'flex'
            const div1 = document.createElement('div')
            const subDiv = document.createElement('div')
            const div2 = document.createElement('div')
            const div3 = document.createElement('div')
            div1.setAttribute('class','div1')
            subDiv.setAttribute('class','subDiv')
            div2.setAttribute('class','div2')
            div3.setAttribute('class','div3')
            let language= count.language
            let number = count.counts
            div3.style.width = getLangWidth(number) + 'rem'
            subDiv.appendChild(div3)
            div1.textContent = language
            div2.textContent = number
            mainDiv.appendChild(div1)
            mainDiv.appendChild(subDiv)
            mainDiv.appendChild(div2)
            graphWrapper.appendChild(mainDiv)
        }
    }


    popButton.addEventListener('click', event => {
        
        if (inputSearch.value.length == 0) {
            const allCountries = [...countries]
            displayPopulation(allCountries)
            //document.location.hash = ''
        }
        else {
         const countryObjArr = searchResultArray(inputSearch.value)
         displayPopulation(countryObjArr)
        }
    
    })
    
    langButton.addEventListener('click', event => {
        if(inputSearch.value.length ==0) {
            const allCountries = [...countries]
            displayLanguages(allCountries)
        }
        else {
            const countryObjArr = searchResultArray(inputSearch.value)
            displayLanguages(countryObjArr)
        }    
        
    
    })    

    popChart.addEventListener('click',event => {
        if (inputSearch.value.length == 0) {
            const allCountries = [...countries]
            displayPopulation(allCountries)
            //document.location.hash = ''
        }
        else {
         const countryObjArr = searchResultArray(inputSearch.value)
         displayPopulation(countryObjArr)
        }

    })

    const sortByName = array => {
        array.sort((a,b) => {
            if(a.name < b.name) return -1
            if(a.name > b.name) return 1
            return 0
        })
        //console.log(array)
        return array
    }
    const sortByCapital = array => {
        array.sort((a,b) => {
            if(a.capital < b.capital) return -1
            if(a.capital > b.capital) return 1
            return 0
        })
        //console.log(array)
        return array
    }
    const sortByPopulation = array => {
        array.sort((a,b) => {
            if(a.population < b.population) return -1
            if(a.population > b.population) return 1
            return 0
        })
        //console.log(array)
        return array
    }

    nameButton.addEventListener('click',event => {
        nameClicked++
        total = 0
        let sortedArray = []
        if(inputSearch.value.length == 0) {
            const allCountries = [...countries]
            const sortedArr = sortByName(allCountries)
            for (const element of sortedArr) {
                sortedArray.push(element)
            }
        }
        else {
            const countryObjArr = searchResultArray(inputSearch.value)
            const sortedArr = sortByName(countryObjArr)
            console.log(sortedArr)
            for (const element of sortedArr) {
                sortedArray.push(element)
            }
        }
        if(nameClicked % 2 ==0) {
            sortedArray.reverse()
        }
        countriesDislay.textContent = ''
        for (const country of sortedArray) {
            displayCountries(country)
        }
        
        
    })
    capitalButton.addEventListener('click',event => {
        capitalClicked++
        total = 0
        nameClicked = 0
        populationClicked = 0
        let sortedArray = []
        if(inputSearch.value.length == 0) {
            const allCountries = [...countries]
            const sortedArr = sortByCapital(allCountries)
            for (const element of sortedArr) {
                sortedArray.push(element)
            }
        }
        else {
            const countryObjArr = searchResultArray(inputSearch.value)
            const sortedArr = sortByCapital(countryObjArr)
            console.log(sortedArr)
            for (const element of sortedArr) {
                sortedArray.push(element)
            }
        }
        if(capitalClicked % 2 ==0) {
            sortedArray.reverse()
        }
        countriesDislay.textContent = ''
        for (const country of sortedArray) {
            displayCountries(country)
        }
        
        
    })
    populationButton.addEventListener('click',event => {
        populationClicked++
        total = 0
        nameClicked = 0
        capitalClicked =0
        let sortedArray = []
        if(inputSearch.value.length == 0) {
            const allCountries = [...countries]
            const sortedArr = sortByPopulation(allCountries)
            console.log(sortedArr)
            for (const element of sortedArr) {
                sortedArray.push(element)
            }
        }
        else {
            const countryObjArr = searchResultArray(inputSearch.value)
            const sortedArr = sortByPopulation(countryObjArr)
            console.log(sortedArr)
            for (const element of sortedArr) {
                sortedArray.push(element)
            }
        }
        if(populationClicked % 2 ==0) {
            sortedArray.reverse()
        }
        countriesDislay.textContent = ''
        for (const country of sortedArray) {
            displayCountries(country)
        }
        
    })



    /* Home Page Loading */
const allCountries = [...countries]
for (const country of allCountries) {  
  displayCountries(country)
}
displayPopulation(allCountries)



        
    
