const titles = [ ['🌱', 'Educator'],['💻', 'Programmer'], ['🌐', 'Instructor'],['🔥', 'Motivator'],  ['🔥', 'Motivational Speaker'],['📔', 'Content Creator']]
const skills = ['React','Redux','node','python','Mongodb','pandas','numpy','html','javascript']
const headerDiv = document.querySelector('.header-div')
const technologies = document.querySelector('.technologies')


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

const getTitles = () => {
    let index = Math.floor(Math.random() * titles.length)
    let display = titles[index]
    return display
}


const setTitles = () => {
    headerDiv.textContent = ''
    const emoji = document.createElement('div')
    const movingText = document.createElement('div')
    emoji.setAttribute('class','emoji')
    movingText.setAttribute('class','move')
    let display = getTitles()
    emoji.textContent = display[0]
    movingText.textContent = display[1]
    headerDiv.appendChild(emoji)
    headerDiv.appendChild(movingText)
}

const getSkills = () => {

    let index = Math.floor(Math.random() * skills.length)
    let display = skills[index].toUpperCase()

    return display

}
const outerSkills = document.createElement('div')
outerSkills.setAttribute('class','outers-skills')
const setSkills = () => { 
outerSkills.textContent = ''    
let display = getSkills()
const skills = document.createElement('div')
skills.textContent = ''
skills.setAttribute('class','tech')
skills.style.fontStyle = 'bold'
skills.style.color = randomHexaId()
skills.textContent = display
outerSkills.appendChild(skills)
technologies.appendChild(outerSkills)
//technologies.classList.add('animated', 'fadeIn')

}

const titleTimer = setInterval(setTitles,2000)
const skillTimer = setInterval(setSkills,2000)

