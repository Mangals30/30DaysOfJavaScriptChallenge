const mainDiv = document.querySelector('.main-div')
let word1 = '30  DAYS  OF  JAVASCRIPT' 
let word2 = 'CHALLENGE  2020 '
let word3 = 'ASABENEH  YETAYEH'
const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const div3 = document.querySelector('.div3')



const randomFontWeight = () => {
    const fontWeightArray = ['100','200','300','400','500','600','700','800','900']
    let index = Math.floor(Math.random() * fontWeightArray.length)
    let fontWeight = fontWeightArray[index]
    return fontWeight
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

const createDivs = (word,div) => {
    //clearInterval(backgroundTimer)
    for (let i=0; i<word.length; i++) {
        const alpha = document.createElement('div')
        alpha.style.fontSize = '40px'
        alpha.textContent = word[i]
        alpha.style.color = randomHexaId()
        div.appendChild(alpha)
    }
}


const backgroundTimer = () => {
    mainDiv.style.backgroundColor = randomHexaId()
    mainDiv.style.fontWeight = randomFontWeight()

    

}
const divTimer = () => {
    const subDiv = document.createElement('div')
    subDiv.setAttribute('class','sub-div')
    //mainDiv.textContent = ''
    div1.textContent = ''
    div2.textContent = ''
    div3.textContent = ''
    createDivs(word1,div1)
    createDivs(word2,div2)
    createDivs(word3,div3)
    subDiv.appendChild(div1)
    subDiv.appendChild(div2)
    subDiv.appendChild(div3)
    mainDiv.appendChild(subDiv)

}


const mainDivTimer = setInterval(backgroundTimer,2000)
const wordTimer = setInterval(divTimer,2000)

