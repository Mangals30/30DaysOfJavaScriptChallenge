console.log('30 Days of JavaScript')
console.log('%d %s of JavaScript', 30, 'Days')
console.log('%c30 Days Of JavaScript', 'color:green') 
console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow')
console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')
console.error('This is an error message')
console.error('We all make mistakes')
const names = ['Mangalam', 'Sharanya', 'Sanjay', 'Shwetha']
console.table(names)
const userObj = {
    name: 'Mangalam',
    title: 'SoftwareEng',
    country: 'India',
    city: 'Bangalore',
    age: 34
  }
  console.table(userObj)
  const countries1 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries1)
  const usersArr = [
    {
      name: 'Essi',
      title: 'Teacher',
      country: 'Finland',
      city: 'Lapland',
      age: 35
    },
    {
      name: 'Freeda',
      title: 'Manager',
      country: 'Germany',
      city: 'Berlin',
      age: 40
    },
    {
      name: 'Emily',
      title: 'Student',
      country: 'France',
      city: 'Paris',
      age: 15
    },
    {
      name: 'Julia',
      title: 'Instructor',
      country: 'Sweden',
      city: 'Stockholm',
      age: 25
    }
  ]
  console.table(usersArr)
  const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')

  console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}
console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('UsersArray')
console.log(usersArr)
console.groupEnd()

const countFun = () => {
    console.count('Function has been called')
}
countFun()
countFun()
countFun()