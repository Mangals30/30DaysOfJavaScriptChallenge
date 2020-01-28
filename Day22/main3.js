const flexContainer = document.querySelector('.flex-container')
countries.sort()
const total = countries.length
console.log(total)
const totalCountries = document.querySelector('#total-countries')
totalCountries.textContent = 'Total Number Of Countries: '
const totalSpan = document.createElement('span')
totalSpan.textContent = total
totalCountries.appendChild(totalSpan)
for (const country of countries) {
    const countryDiv = document.createElement('div')
    countryDiv.setAttribute('class','country')
    countryDiv.textContent = country
    flexContainer.appendChild(countryDiv)
}