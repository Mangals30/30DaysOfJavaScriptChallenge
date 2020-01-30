console.log('Welcome')
const button1 = document.querySelector('.clickMe')
const buttonDiv = document.querySelector('.click')
const onClickDiv = document.querySelector('.onclick')
const doubleClickbutton = document.querySelector('.doubleclick')
const doubleClickDiv = document.querySelector('.dbc')
const mouseEnterbutton = document.querySelector('.mouse-enter')
const mouseEnterDiv = document.querySelector('.me')
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

mouseEnterbutton.addEventListener('mouseenter',event => {
  mouseEnterDiv.textContent = event.target.textContent
})

mouseEnterbutton.addEventListener('mouseleave',event => {
  mouseEnterDiv.textContent = ''
})

const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const calculate = document.querySelector('.calc')
const bmiDiv = document.querySelector('.bmi')
let bmi
calculate.addEventListener('click', () => {
  bmi = mass.value / height.value ** 2
  bmiDiv.textContent = 'Your BMI is '+bmi
})

const inputField = document.querySelector('.some')
const para = document.querySelector('.thing')

inputField.addEventListener('input', e => {
  para.textContent = e.target.value
})

const blurField = document.querySelector('.blur')
const blurPara = document.querySelector('.test')

blurField.addEventListener('blur', e => {
  blurPara.textContent = '*Field is required'
  blurPara.style.color = 'red '
})

const displayKey = document.querySelector('.display')

document.body.addEventListener('keydown', e => {
  console.log(e.key)
  displayKey.textContent = 'Key is '+e.key + ' and key code is '+e.keyCode
})

