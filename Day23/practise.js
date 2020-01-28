console.log('Welcome')
const button1 = document.querySelector('.clickMe')
const buttonDiv = document.querySelector('.click')
const onClickDiv = document.querySelector('.onclick')
const doubleClickbutton = document.querySelector('.doubleclick')
const doubleClickDiv = document.querySelector('.dbc')
button1.addEventListener('click',event => {
    console.log('I am clicked')
    console.log(event.target.textContent)
  buttonDiv.textContent = event.target.textContent
})

const clickMe = () => {
 onClickDiv.textContent = 'I am clicked'
}

doubleClickbutton.addEventListener('dblclick',event => {
  doubleClickDiv.textContent = event.target.textContent
})