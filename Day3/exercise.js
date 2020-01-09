//Declare firstName, lastName, country, city, age, isMarried, 
//year variable and assign value to it
let firstName = 'Mangalam'
let lastName = 'Krishnan'
let country = 'India'
let city = 'Bangalore'
let age =34
let isMarried = true
let year = 2013

//The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.
console.log(firstName === lastName)
console.log(age === year)
console.log(city === isMarried)

//Check if type of '10' is equal to 10
console.log('10'===10)
console.log((typeof('10'))==(typeof(10)))

//Check if parseInt('9.8') is equal to 10
console.log((parseInt(9.8))==10)

//Write a script that prompt the user 
//to enter base and height of the triangle and 
//calculate an area of a triangle (area = 0.5 x b x h).
let baseOfTriangle = prompt('Enter base: ')
let heightOfTriangle = prompt('Enter height: ')
let areaOfTriangle = 0.5 * parseInt(baseOfTriangle) * parseInt(heightOfTriangle)
console.log(`The area of the triangle is ${areaOfTriangle}`)

//Write a script that prompt the user 
//to enter side a, side b, and side c of the triangle and 
//calculate the perimeter of triangle (perimeter = a + b + c)

let sideA = prompt('Enter side a: ')
let sideB = prompt('Enter side b: ')
let sideC = prompt('Enter side c: ')
let perimeterOfTriangle = parseInt(sideA) + parseInt(sideB) + parseInt(sideC)
console.log(`The perimeter of the triangle is ${perimeterOfTriangle}`)

//Get length and width using prompt and 
//calculate an area of rectangle 
//(area = length x width and the 
//perimeter of rectangle (perimeter = 2 x (length + width))
let lengthOfRect = prompt('Enter the length of the rectangle: ')
let widthOfRect = prompt('Enter the height of the rectangle: ')
let areaOfRect = parseInt(lengthOfRect) * parseInt(widthOfRect)
let perimeterOfRect = 2 * (parseInt(lengthOfRect) + parseInt(widthOfRect))
console.log(`The area of the rectangle is ${areaOfRect} and the perimeter of the rectangle is ${perimeterOfRect}`)

//Get radius using prompt and calculate the area of a circle
// (area = pi x r x r) and circumference of a circle
//(c = 2 x pi x r) where pi = 3.14.
let PIValue = (Math.PI).toFixed(2)
//console.log('PIVal is ',PIVal)
let radiusOfCircle = prompt('Enter the radius of the circle: ')
let areaOfCircle = 2 * PIValue * parseInt(radiusOfCircle)
console.log(`Area of the circle is ${areaOfCircle}`)

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x1=0
let y = (2*x1) - 2
console.log('Y-intercept is',y)
let y1 = 0
let x = (y1+2) / 2
console.log('X-intercept is',x)
slope1 = 2
console.log('Slope is ',slope1) // y = mx + C

//Slope is (m = y2-y1/x2-x1). 
//Find the slope between point (2, 2) and point(6,10)
x1 = 2
y1 = 2
x2 = 6
y2 = 10
let m = (y2-y1) / (x2-x1)
console.log('Slope is ',m)

let slopes = (slope1 == m)
if(slopes) {
   console.log ('Both slopes are equal')
}
else {
   console.log ('Both slopes are not equal')
}
//Calculate the value of y (y = x^2 + 6x + 9). 
//Try to use different x values and figure out 
//at what x value y is 0.

let a = 1
let b= 6
let c = 9
y1 = (-b + (Math.sqrt((b * b)-(4 * a * c))))/(2 * a)
y2 = (-b - (Math.sqrt((b * b)-(4 * a * c))))/(2 * a)
console.log(y1, y2)
if(y1==y2) {
    console.log ('Value of x at y=0 is',y1)
}
else{
    console.log ('Values are',y1,'and',y2)
} 

//Writ a script that prompt a user to 
//enters hours and rate per hour. 
//Calculate pay of the person?
let hours = prompt('Enter hours: ')
let ratePerHour = prompt('Enter rate per hour: ')
let weeklyEarning = parseInt(hours) * parseInt(ratePerHour)
console.log('Your weekly earning is',weeklyEarning)

//Write a script that prompt the user to enter number of years. 
//Calculate the number of seconds a person can live. 
//Assume some one lives just hundred years
let noOfYears = prompt('Enter number of yours you live: ')
let secondsLived = parseInt(noOfYears) * 365 * 24 * 60 *60
console.log(`You lived ${secondsLived} seconds`)

//Write three JavaScript statement which provide truthy value.
console.log(0=='')
console.log(0==' ')
console.log(undefined==null)

//Write three JavaScript statement which provide falsy value.
console.log(NaN==NaN)
console.log(undefined===null)
console.log(0==='')

//Figure out the result of the following comparison expression 
//first without using console.log(). After you decide the result
// confirm it using console.log()

console.log(4 > 3)       //true
console.log(4 >= 3)      //true
console.log(4 < 3)       //false
console.log(4 <= 3)      //false
console.log(4 == 4)      //true
console.log(4 === 4)     //true
console.log(4 != 4)      //false
console.log(4 !== 4)     //false
console.log(4 != '4')    //false
console.log(4 == '4')    //true
console.log(4 === '4')   //false 
console.log('python'.length > 'jargon'.length) //false

//Figure out the result of the following expressions first 
//without using console.log(). After you decide the result 
//confirm it by using console.log()
console.log(4 > 3 && 10 < 12)              //true
console.log(4 > 3 && 10 > 12)              //false
console.log(4 > 3 || 10 < 12)              //true
console.log(4 > 3 || 10 > 12)              //true
console.log(!(4 > 3))                      //false
console.log(!(4 < 3))                      //true 
console.log(!(false))                      //true
console.log(!(4 > 3 && 10 < 12))           //false 
console.log(!(4 > 3 && 10 > 12))           //true
console.log(!(4 === '4'))                  //true
console.log(!('python'.includes('on')))    //false
console.log(!('dragon'.includes('on')))    //false

//If the length of your name is greater than 7 say, 
//your name is long else say your name is short.
let firstName1 = 'Mangalam'
let lastName1 = 'Krishnan'

//Compare your first name length and your family name length 
//and you should get this output.
firstName1.length > 7
? console.log('My name is long')
: console.log('My name is not long')
firstName > lastName
? console.log(`My first name ${firstName1} is longer than my last name ${lastName1}`)
: console.log(`My last name ${lastName1} is longer than my first name ${firstName1}`)

//Declare two variables myAge and yourAge and assign them 
//initial values and myAge and yourAge. Output:
let myAge = 250
let yourAge = 25
console.log(`I am ${myAge-yourAge} years older than you`)

//Using prompt get the year the user was born and 
//if the user is 18 or above allow the user to drive 
//if not tell the user to wait a certain amount of years.
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


//What is the year today?
let now = new Date()
let year1 = now.getFullYear()
console.log('Year today is ',year1)


//What is the month today as a number?
let month = now.getMonth()
let monthToday = ''
switch(month) {
    case 0: 
    monthToday = 'January'
    break
    case 1: 
    monthToday = 'February'
    break
    case 2: 
    monthToday = 'March'
    break    
    case 3: 
    monthToday = 'April'
    break
    case 4: 
    monthToday = 'May'
    break
    case 5: 
    monthToday = 'June'
    break
    case 6: 
    monthToday = 'July'
    break         
    case 7: 
    monthToday = 'August'
    break 
    case 8: 
    monthToday = 'September'
    break 
    case 9: 
    monthToday = 'October'
    break 
    case 10: 
    monthToday = 'November'
    break 
    case 11: 
    monthToday = 'December'
    break  
    case 12: 
    monthToday = 'January'
    break                

}
console.log('The month today is',monthToday)


//What is the date today?
let date1 = now.getDate()
console.log('Today\'s date is',monthToday,date1)


//What is the day today as a number?
let day1 = now.getDay()
let dayToday = ''
switch(day1) {
    case 0:
        dayToday = 'Sunday'
        break
    case 1:
        dayToday = 'Monday'
        break   
    case 2:
        dayToday = 'Tuesday'
        break   
    case 3:
        dayToday = 'Wednesday'
        break   
    case 4:
        dayToday = 'Thursday'
        break  
    case 5:
        dayToday = 'Friday'
        break  
    case 6:
        dayToday = 'Saturday'
        break           

}
console.log('Today is',dayToday)


//What is the hours now?
let hours1 = now.getHours()
console.log('Hours now is',hours1)


//What is the minutes now?
let minutes1 = now.getMinutes()
console.log('Minutes now is',minutes1)


//Find out the numbers of seconds elapsed from 
//January 1, 1970 to now.
let seconds1 = now.getTime()
console.log('Number of seconds elapsed from Jan1 1970 is',seconds1)

//YYY-MM-DD HH:mm:ss
let seconds2 = now.getSeconds()
let monthNow = ('0' + (month+1)).slice(-2)
let dateNow = ('0' + (date1)).slice(-2)
let minutesNow = ('0' + (minutes1)).slice(-2)
let secondsNow = ('0' + (seconds2)).slice(-2)
let hoursNow = ('0' + (hours1)).slice(-2)
console.log(`${year1}-${monthNow}-${dateNow} ${hoursNow}:${minutesNow}:${secondsNow}`)

//DD-MM-YYYY HH:mm:ss
console.log(`${dateNow}-${monthNow}-${year1} ${hoursNow}:${minutesNow}:${secondsNow}`)

//DD/MM/YYY HH:mm:ss
console.log(`${dateNow}/${monthNow}/${year1} ${hoursNow}:${minutesNow}:${secondsNow}`)

