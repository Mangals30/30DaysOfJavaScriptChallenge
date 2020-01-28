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

const createLink = (div1,githubUrl,name,topics) => {
    div1.textContent = ''
    const link = document.createElement('a')
    link.setAttribute('href',githubUrl)
    const linkText = document.createTextNode(name)
    link.appendChild(linkText)
    div1.appendChild(link)

}

createDivStyle = (challengeDiv) => {
challengeDiv.style.display = 'flex'
challengeDiv.style.alignItems = 'center'
challengeDiv.style.justifyContent = 'space-around'
challengeDiv.style.marginLeft = '34rem'
challengeDiv.style.width = '30rem'  
challengeDiv.style.height = '3rem'  
challengeDiv.style.textAlign = 'left'
challengeDiv.style.marginTop = '0.25rem'
challengeDiv.style.paddingLeft = '1rem'
}

createYearStyle = (yearDiv) => {
yearDiv.style.verticalAlign = 'middle'
yearDiv.textContent = date
yearDiv.style.fontSize = '1rem'
yearDiv.style.marginTop = '1rem'
yearDiv.style.width = '15%'
yearDiv.style.height = '1.75rem'
yearDiv.style.marginLeft = '42rem'
}
const wrapperClass = document.querySelector('.wrapper')
wrapperClass.style.textAlign = 'center'
const heading1 = document.createElement('h1')
heading1.textContent = asabenehChallenges2020.challengeTitle
heading1.setAttribute('id','heading1')
const yearSpan = document.createElement('span')
yearSpan.setAttribute('id','year')
yearSpan.textContent = asabenehChallenges2020.challengeYear
yearSpan.style.fontSize = '5rem'
heading1.appendChild(yearSpan)
wrapperClass.appendChild(heading1)

const yearTimer = setInterval(() =>{
    year.style.color = randomHexaId()
},1000)

const heading2 = document.createElement('h2')
heading2.textContent = asabenehChallenges2020.challengeSubtitle
heading2.style.textDecoration = 'underline'
wrapperClass.appendChild(heading2)

const yearDiv = document.createElement('div')
const date = dateToday()
createYearStyle(yearDiv)
wrapperClass.appendChild(yearDiv)

const fullYearTimer = setInterval(() =>{
    yearDiv.style.backgroundColor = randomHexaId()
},1000)

const challengesArray = asabenehChallenges2020.challenges
console.log(challengesArray)
for (const {name,status,githubUrl,topics} of challengesArray) {
const challengeDiv = document.createElement('div')
createDivStyle (challengeDiv)
const div1 = document.createElement('div')
div1.textContent = name
challengeDiv.appendChild(div1)
if (status.toLowerCase() == 'done') {
    challengeDiv.style.backgroundColor = '#35C17E'
    createLink(div1,githubUrl,name)
}
if (status.toLowerCase() == 'ongoing') {
    challengeDiv.style.backgroundColor = '#FBDC3A'
    createLink(div1,githubUrl,name)
}
if (status.toLowerCase() == 'coming') {
    challengeDiv.style.backgroundColor = '#FA5D5E'
}
const div2 = document.createElement('div')
const title = name.slice(11)
div2.textContent = title
challengeDiv.appendChild(div2)
//const topicDiv = document.createElement('div')
for (const topic of topics) {
    const subTopicDiv =document.createElement('div')
    //subTopicDiv.textContent = topic
    div2.appendChild(subTopicDiv)
    //div2.appendChild(topicDiv)
}
const div3 = document.createElement('div')
div3.textContent = status
challengeDiv.appendChild(div3)
wrapperClass.appendChild(challengeDiv)
}
const aboutDiv = document.createElement('div')
const nameDiv = document.createElement('h1')
nameDiv.textContent = asabenehChallenges2020.author.firstName + ' '+ asabenehChallenges2020.author.lastName
aboutDiv.appendChild(nameDiv)
const socialMediaDiv = document.createElement('div')
socialMediaDiv.style.display = 'flex'
socialMediaDiv.style.flexWrap = 'wrap'
const linkedln = document.createElement('button')
linkedln.addEventListener('click', (event) =>{
    window.open(asabenehChallenges2020.author.socialLinks[0].url)
})
linkedln.style.margin = '2px'
let fontawesomeIcon1 = asabenehChallenges2020.author.socialLinks[0].fontawesomeIcon
console.log(fontawesomeIcon1)
linkedln.innerHTML = fontawesomeIcon1
socialMediaDiv.appendChild(linkedln)
const twitter = document.createElement('button')
twitter.setAttribute('class',asabenehChallenges2020.author.socialLinks[1].fontawesomeIcon)
twitter.addEventListener('click', (event) =>{
    window.open(asabenehChallenges2020.author.socialLinks[1].url)
})
let fontawesomeIcon2 = asabenehChallenges2020.author.socialLinks[1].fontawesomeIcon
twitter.innerHTML = fontawesomeIcon2
twitter.style.margin = '2px'
socialMediaDiv.appendChild(twitter)
const gitHub = document.createElement('button')
gitHub.setAttribute('class',asabenehChallenges2020.author.socialLinks[2].fontawesomeIcon)
gitHub.addEventListener('click', (event) =>{
    window.open(asabenehChallenges2020.author.socialLinks[2].url)
})
let fontawesomeIcon3 = asabenehChallenges2020.author.socialLinks[2].fontawesomeIcon
gitHub.innerHTML = fontawesomeIcon3
gitHub.style.margin = '2px'
socialMediaDiv.appendChild(gitHub)
aboutDiv.appendChild(socialMediaDiv)
socialMediaDiv.style.marginLeft = '45rem'
wrapperClass.appendChild(aboutDiv)

const introDiv = document.createElement('div')
const introPara = document.createElement('p')
introPara.textAlign = 'center'
introPara.style.marginLeft = '30rem'
introPara.style.marginRight = '20rem'
introPara.textContent = asabenehChallenges2020.author.bio
introDiv.appendChild(introPara)
wrapperClass.appendChild(introDiv)

const detailsDiv = document.createElement('div')
detailsDiv.style.marginLeft = '30rem'
detailsDiv.style.marginTop = '2rem'
detailsDiv.style.display = 'flex'
detailsDiv.style.justifyContent = 'space-between'
detailsDiv.style.width = '40rem'
const titlesDiv = document.createElement('div')
const skillsDiv = document.createElement('div')
const qualiDiv =  document.createElement('div')
const boldTitle = document.createElement('b')
boldTitle.textContent = 'Titles'
titlesDiv.appendChild(boldTitle)
const boldSkills = document.createElement('b')
boldSkills.textContent = 'Skills'
skillsDiv.appendChild(boldSkills)
const boldQuali = document.createElement('b')
boldQuali.textContent = 'Qualifications'
qualiDiv.appendChild(boldQuali)
detailsDiv.appendChild(titlesDiv)
detailsDiv.appendChild(skillsDiv)
detailsDiv.appendChild(qualiDiv)
wrapperClass.appendChild(detailsDiv)
const titleContainer = document.createElement('div')
titlesDiv.appendChild(titleContainer)
const tempTitleArr = [...asabenehChallenges2020.author.titles]
const titleArr = []
for (const element of tempTitleArr) {
    titleArr.push(element.toString().replace(',' ,'  '))

}
for (const element of titleArr) {
    const item = document.createElement('div')
    item.textContent = element
    titleContainer.appendChild(item)
}

const skillsContainer = document.createElement('div')
skillsDiv.appendChild(skillsContainer)
const tempSkillsArr = [...asabenehChallenges2020.author.skills]
for (const element of tempSkillsArr) {
    const item = document.createElement('div')
    item.textContent = element
    skillsDiv.appendChild(item)
}

const qualiContainer = document.createElement('div')
qualiDiv.appendChild(skillsContainer)
const tempQualiArr = [...asabenehChallenges2020.author.qualifications]
const qualiArr = []
for (const element of tempQualiArr) {
    qualiArr.push(element)

}
for (const element of qualiArr) {
    const item = document.createElement('div')
    item.textContent = element
    qualiDiv.appendChild(item)
}

const keyWordsDiv = document.createElement('div')
keyWordsDiv.style.marginLeft = '32rem'
keyWordsDiv.style.marginTop = '2rem'
const headingDiv = document.createElement('div')
headingDiv.style.display = 'flex'
const boldKeyWord = document.createElement('b')
boldKeyWord.textContent = 'KeyWords'
const contentsDiv = document.createElement('div')
contentsDiv.style.marginTop = '1rem'
contentsDiv.style.width = '40rem'
contentsDiv.style.marginLeft = '2rem'
contentsDiv.style.display = 'flex'
contentsDiv.style.flexWrap = 'wrap'
const keyWordsArr = asabenehChallenges2020.keywords
console.log(keyWordsArr) 
for (const keyword of keyWordsArr) {
    const wordDiv = document.createElement('div')
    wordDiv.style.padding = '0.25rem'
    wordDiv.style.marginRight = '0.5rem'
    wordDiv.style.marginBottom = '0.5rem'
    wordDiv.style.borderRadius = '15px'
    wordDiv.style.background = randomHexaId()
    const boldWord = document.createElement('b')
    boldWord.textContent = '# '+keyword
    boldWord.style.fontStyle = 'italic'
    wordDiv.appendChild(boldWord)
    contentsDiv.appendChild(wordDiv)
}   
headingDiv.appendChild(boldKeyWord)
keyWordsDiv.appendChild(headingDiv)
keyWordsDiv.appendChild(contentsDiv)
wrapperClass.appendChild(keyWordsDiv)
