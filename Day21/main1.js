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
    return (`${month} ${date},${year} ${hours}:${minutes}:${seconds}`)
     
}

const randomHexaId = () => {
    let hexaChar= '0123456789abcdef'
    let hexaLen = hexaChar.length
    let hexaId = '#'
    for (let i=0; i<6; i++) {
        
        let hexaIdIndex = Math.floor(Math.random()*hexaLen)
        hexaId = hexaId + hexaChar[hexaIdIndex]

    }
    
    return hexaId
}



const wrapperClass = document.querySelector('.wrapper')
wrapperClass.style.textAlign = 'center'
const heading1 = document.querySelector('h1')
const mainHeading = document.createElement('h1')
mainHeading.setAttribute('id','mainHeading')
const yearSpan = document.createElement('span')
yearSpan.setAttribute('id','year')
mainHeading.textContent = 'Asabeneh Yetayeh challenges in'
yearSpan.textContent = '2020'
yearSpan.style.fontSize = '5rem'
mainHeading.appendChild(yearSpan)
heading1.innerHTML = mainHeading.innerHTML

const yearTimer = setInterval(() =>{
    year.style.color = randomHexaId()
},1000)

const subHeading = document.querySelector('h2')
const underline = document.createElement('U')
const text = document.createTextNode('30DaysOfJavaScript Challenge')
underline.appendChild(text)
subHeading.textContent = ''
subHeading.appendChild(underline)
const yearDiv = document.createElement('div')
const date = dateToday()
yearDiv.style.verticalAlign = 'middle'
yearDiv.textContent = date
yearDiv.style.fontSize = '1rem'
subHeading.appendChild(yearDiv)
yearDiv.style.marginTop = '1rem'
yearDiv.style.width = '15%'
yearDiv.style.height = '1.75rem'
yearDiv.style.marginLeft = '42rem'

const unOrdered = document.querySelector('ul')
const ordered = unOrdered.getElementsByTagName('li')
const unOrderedDiv = document.createElement('div')
for (let order of ordered) {       
const orderedDiv = document.createElement('div')
orderedDiv.style.marginLeft = '34rem'
orderedDiv.style.width = '30rem'  
orderedDiv.style.height = '3rem'  
orderedDiv.style.textAlign = 'left'
orderedDiv.style.marginTop = '0.25rem'
orderedDiv.style.paddingLeft = '1rem'
orderedDiv.textContent = order.textContent
if (orderedDiv.textContent.includes('Done')) {
    orderedDiv.style.backgroundColor = '#35C17E'
}
if (orderedDiv.textContent.includes('Ongoing')) {
    orderedDiv.style.backgroundColor = '#FBDC3A'
}
if (orderedDiv.textContent.includes('Coming')) {
    orderedDiv.style.backgroundColor = '#FA5D5E'
}
unOrderedDiv.appendChild(orderedDiv)
}
unOrdered.remove()
wrapperClass.appendChild(unOrderedDiv)
unOrdered.innerHTML = unOrderedDiv.innerHTML
const fullYearTimer = setInterval(() =>{
    yearDiv.style.backgroundColor = randomHexaId()
},1000)

