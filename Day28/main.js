const SearchFieldDiv = document.querySelector('.search-container')
const firstNameInput = document.querySelector('.first-name')
const lastNameInput = document.querySelector('.last-name')
const countryInput = document.querySelector('.country')
const scoreInput = document.querySelector('.player-score')
const addPlayerButton = document.querySelector('.add-player')
const resultsDiv = document.querySelector('.results-conatiner')
const errorDiv = document.querySelector('.error')

const users = [{
    firstName: 'Mangalam',
    lastName: 'Krishnan',
    country: 'India',
    score:   50,
},
{

    firstName: 'Sharanya',
    lastName: 'Sanjay',
    country: 'Finland',
    score: 60
},
{

    firstName: 'Sanjay',
    lastName: 'Jayaraman',
    country: 'Belgium',
    score: 70


}]

const getMonth = num => {
    let month = ''
    switch (num) {
        case 0:
            month = 'January'
            break;
        case 1:
            month = 'February'
            break;
        case 2:
            month = 'March'
            break;
        case 3:
            month = 'April'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'June'
            break;
        case 6:
            month = 'July'
            break;
        case 7:
            month = 'August'
            break;
        case 8:
            month = 'September'
            break;
        case 9:
            month = 'October'
            break;
        case 10:
            month = 'November'
            break;
        case 11:
            month = 'December'
            break;    
        default:
            month ='NoMonth'
            break;
    }
    return month
}

const dateToday = () => {
    const today = new Date()
    let monthNum = today.getMonth()
    let month = getMonth(monthNum)
    let date = today.getDate()
    let year = today.getFullYear()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    return (`${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`)
     
}

const emptySearchFields = () => {

}


const addPlayer = (firstName,lastName,country,score) => {
const playerDiv = document.createElement('div')
playerDiv.setAttribute('class','player-div')
resultsDiv.appendChild(playerDiv)

const nameDiv = document.createElement('div')
nameDiv.setAttribute('class','name-div')


const fullNameDiv = document.createElement('div')
fullNameDiv.setAttribute('class','full-name-div')
fullNameDiv.textContent = (firstName + ' ' + lastName).toUpperCase()

const timeDiv = document.createElement('div')
timeDiv.setAttribute('class','time-div')
timeDiv.textContent = dateToday()

nameDiv.appendChild(fullNameDiv)
nameDiv.appendChild(timeDiv)
playerDiv.appendChild(nameDiv)

const countryDiv = document.createElement('div')
countryDiv.setAttribute('class','country-div')
countryDiv.textContent = country
playerDiv.appendChild(countryDiv)

const scoreDiv = document.createElement('div')
scoreDiv.setAttribute('class','score-div')
scoreDiv.textContent = score
playerDiv.appendChild(scoreDiv)

const delAddDiv = document.createElement('div')
delAddDiv.setAttribute('class','del-add-div')
const delButton = document.createElement('button')
delButton.setAttribute('class','del-button')
delButton.textContent = 'Del'
const plusButton = document. createElement('button')
plusButton.setAttribute('class','plus-button')
plusButton.textContent = '+5'
const minusButton = document.createElement('button')
minusButton.setAttribute('class','minus-button')
minusButton.textContent = '-5'
delAddDiv.appendChild(delButton)
delAddDiv.appendChild(plusButton)
delAddDiv.appendChild(minusButton)
playerDiv.appendChild(delAddDiv)
delButton.addEventListener('click',event => {
    playerDiv.style.display = 'none'
})
plusButton.addEventListener('click',event => {
    score = parseInt (score) + 5
    scoreDiv.textContent = score
})
minusButton.addEventListener('click',event => {
    score = parseInt (score) - 5
    scoreDiv.textContent = score
})
}

for(user of users) {
    const {firstName,lastName,country,score} = user 
    console.log(firstName,lastName,country,score)
    addPlayer(firstName,lastName,country,score)

    
}

const errorStyles = (errorMessage) => {

    errorDiv.textContent = ''
    errorDiv.style.display = 'block'
    errorDiv.style.color = 'red'
    errorDiv.textContent = errorMessage

}
const userDuplicate = (firstNameValue,lastNameValue) => {
    for (const user of users) {
        if((user.firstName == firstNameValue) && (user.lastName == lastNameValue)) {
            return true
        }
    }
    return false
}

const validateInputs = () => {
    let pattern1 = /^[A-Z]+$/ig
    let pattern2 = /^[0-9]+$/
    let firstNameValue = firstNameInput.value
    let lastNameValue = lastNameInput.value
    let countryValue = countryInput.value
    let scoreValue = scoreInput.value
    console.log(countryValue)
    if(firstNameValue.length ==0 || lastNameValue.length ==0 || countryValue.length==0 || scoreValue.length==0) {
        let errorMessage = 'All fields are required'
        errorStyles(errorMessage)
    }
    else if (!(firstNameValue.match(pattern1)) || !(lastNameValue.match(pattern1)) || !(countryValue.match(pattern1))){
        let errorMessage = 'Please enter only alphabets'
        errorStyles(errorMessage)
    }
    else if(!(scoreValue.match(pattern2))) {
        let errorMessage = 'Please enter only digits'
        errorStyles(errorMessage)
    }
    else if(userDuplicate(firstNameValue,lastNameValue)) {
        let errorMessage = 'User already exists'
        errorStyles(errorMessage)
    }
    else {
        errorDiv.textContent = ''
        users.push({
            firstName:firstNameValue,
            lastName: lastNameValue,
            country: countryValue,
            score: scoreValue
        })
        addPlayer(firstNameValue, lastNameValue, countryValue,scoreValue)
    }
}

addPlayerButton.addEventListener('click', event => {
    validateInputs()
    console.log('Add player button is clicked')
   // addPlayer(firstNameInput.value, lastNameInput.value, countryInput.value,scoreInput.value)
    
    
})







