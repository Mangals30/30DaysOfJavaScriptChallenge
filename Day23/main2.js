const inputDiv = document.createElement('div')
inputDiv.style.display = 'flex'
inputDiv.style.justifyContent = 'center'
const inputHead = document.createElement('h1')
inputHead.style.marginRight = '1rem'
document.body.appendChild(inputDiv)
inputHead.textContent = 'Press any key'
inputDiv.appendChild(inputHead)
inputDiv.style.borderWidth = '0.5px'
inputDiv.style.borderColor = 'black'
inputDiv.style.borderStyle = 'solid'
inputDiv.style.textAlign = 'center'
inputDiv.style.width = '60%'
inputDiv.style.marginLeft = '15rem'
inputDiv.style.marginTop = '15rem'
inputDiv.style.marginBottom = '2rem '

const keyDiv = document.createElement('div')
const keyHead = document.createElement('h1')
keyDiv.appendChild(keyHead)
inputDiv.appendChild(keyDiv)

const keyCodeDiv = document.createElement('div')
const keyCodeHead = document.createElement('h1')
keyCodeDiv.appendChild(keyCodeHead)
document.body.appendChild(keyCodeDiv)

document.body.addEventListener('keydown',event => {
    inputHead.textContent = 'You have pressed'
    keyHead.textContent = event.key
    keyHead.style.color = '#35C17E'
    keyCodeHead.textContent = event.keyCode
    keyCodeHead.style.color = '#35C17E'
    keyCodeDiv.style.border = '0.5px'
    keyCodeDiv.style.borderColor = 'black'
    keyCodeDiv.style.borderStyle = 'solid'
    keyCodeDiv.style.textAlign = 'center'
    keyCodeDiv.style.width = '10%'
    keyCodeDiv.style.marginLeft = '30rem'
})
