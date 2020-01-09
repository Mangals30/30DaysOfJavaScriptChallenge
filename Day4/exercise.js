//Get user input using prompt(“Enter your age:”). 
//If user is 18 or older , give feedback:
//You are old enough to drive but if not 18 give feedback to 
//wait for the years he supposed to wait for.
let userInputAge = prompt('Enter your age: ')
let userAge = parseInt(userInputAge)
if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive`)
}
else if (userAge < 18) {
    console.log(` You are ${userAge}. You will be allowed to drive after ${18-userAge} years.`)
}
else {
    console.log('Enter an proper age.')
}
//Compare the values of myAge and yourAge using if … else. 
//Based on the comparison log to console who is older (me or you).
// Use prompt(“Enter your age:”) to get the age as input.
let myAge = 34
let yourInputAge = prompt('Enter your age: ')
let yourAge = parseInt(yourInputAge)
if(myAge > yourAge) {
    console.log(`I am ${myAge-yourAge} years older than you.`)
}
else if (yourAge > myAge) {
    console.log(`You are ${yourAge-myAge} years older than me.`)
}
else if (yourAge == myAge) {
    console.log(`We both are ${myAge} years old`)
}
else {
    console.log('Enter a proper age')
}
let a = 4
let b = 3
a > b 
? console.log(`${a} is greater than ${b}`)
: console.log(`${b} is greater than ${a}`)
let userInputScore = prompt('Enter your score: ')
let score = parseInt(userInputScore)
let grade = ''
switch(true) {
    case ((score > 0)&&(score < 50)) :
        grade = 'F'
        break
    case ((score >= 50)&&(score < 60)) :
        grade = 'D'
        break
    case ((score >= 60)&&(score < 70)) :
        grade = 'C'
        break 
    case ((score >= 70)&&(score < 80)) :
        grade = 'B'
        break  
    case ((score >= 80)&&(score <= 100)) :
        grade = 'A'
        break  
    default:
        grade ='No Grade'           


}
console.log(`Your score is ${score} and your grade is ${grade}`)
//debugger
let userInputMonth = prompt('Enter the month: ')
let userMonth = userInputMonth.toLowerCase()
let season = ''
switch (userMonth) {
    case 'january' :
    season = 'WINTER'
    break

    case 'february' :
    season = 'WINTER'
    break

    case 'march' :
    season = 'SPRING'
    break

    case 'april' :
    season = 'SPRING'
    break   
    
    case 'may' :
    season = 'SPRING'
    break    

    case 'june' :
    season = 'SUMMER'
    break

    case 'july' :
    season = 'SUMMER'
    break

    case 'august' :
    season = 'SUMMER'
    break

    case 'september' :
    season = 'AUTUMN'
    break

    case 'october' :
    season = 'AUTUMN'
    break

    case 'november' :
    season = 'AUTUMN'
    break

    case 'december' :
    season = 'WINTER'
    break

    default:
    console.log(`Enter the month properly`)
}
let firstLetter = userMonth[0].toUpperCase()
let restLetters = userMonth.slice(1)
let monthOutput = firstLetter + restLetters
console.log(`The month is ${monthOutput}, and the season is ${season}`)

let num = prompt('Enter the number: ')
let userInputNum = parseInt(num)
if (userInputNum    <=0) {
    console.log('Enter a positive number greater than 0')
}
else if(userInputNum % 2 == 0) {
    console.log(`${num} is a even number`)
}
else if(userInputNum % 2 == 1) {
    console.log(`${num} is a odd number`)
}
else {
    console.log('Enter a proper whole number')
}
let userInputDay = prompt('Enter a day: ')
let userDay = userInputDay.toLowerCase()
let isDay = ''
switch (userDay) {
    case 'sunday' :
    isDay = 'weekend' 
    break;

    case 'monday' :
    isDay = 'work' 
    break;

    case 'tuesday' :
    isDay = 'work' 
    break;

    case 'wednesday' :
    isDay = 'work' 
    break;

    case 'thursday' :
    isDay = 'work' 
    break;

    case 'friday' :
    isDay = 'work' 
    break;

    case 'saturday' :
    isDay = 'weekend' 
    break;
           
    default:
        isDay='Not a valid day'
        break;
}
let firstCharOfDay = userDay[0].toUpperCase()
let restCharOfDay = userDay.slice(1)
let theDay = firstCharOfDay + restCharOfDay
console.log(`${theDay} is a ${isDay} day.`)

let userEnteredMonth = prompt('Enter the month: ')
let monthLower = userEnteredMonth.toLowerCase()
let NoOfDays = 0
switch (monthLower) {
    case 'january' :
    NoOfDays = 31
    break

    case 'february' :
    NoOfDays = 28
    break

    case 'march' :
    NoOfDays = 31
    break

    case 'april' :
    NoOfDays = 30
    break   
    
    case 'may' :
    NoOfDays = 31
    break    

    case 'june' :
    NoOfDays = 30
    break

    case 'july' :
    NoOfDays = 31
    break

    case 'august' :
    NoOfDays = 31
    break

    case 'september' :
    NoOfDays = 30
    break

    case 'october' :
    NoOfDays = 31
    break

    case 'november' :
    NoOfDays = 30
    break

    case 'december' :
    NoOfDays = 31
    break

    default:
    console.log(`Enter the month properly`)
}
let firstLetterOfMonth = monthLower[0].toUpperCase()
let restLettersOfMonth = monthLower.slice(1)
let theMonth = firstLetterOfMonth + restLettersOfMonth
console.log(`${theMonth} has ${NoOfDays} days.`)
