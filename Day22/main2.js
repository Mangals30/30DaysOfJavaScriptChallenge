const isPrime = num => {
    if(num<=1) {
        return false
    }
    
    else if(num>3) {
        for (let i = 2; i<num; i++) {
            if( num % i == 0) {
                return false
            }
            
        }
        return true
    }
    else {
        return true
    }
}        
        
        
const flexContainer = document.querySelector('.flex-container')
for (let i = 0; i < 102; i++) {
    const number = document.createElement('h2')
    const numberDiv = document.createElement('div')
    number.textContent = i
    numberDiv.setAttribute('class', 'num')
    if(isPrime(i)) {
        numberDiv.style.background = '#FA5D5E'
    }
    else if (i%2 == 0){
        numberDiv.style.background = '#35C17E'
    }
    else {
        numberDiv.style.background = '#FBDC3A'
    }
        numberDiv.appendChild(number)
        flexContainer.append(numberDiv)
    }