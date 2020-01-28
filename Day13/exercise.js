//Display the countries array as a table
console.table(countries)

//Display the countries object as a table
console.table(allCountries)

//Use console.group() to group logs
console.group('Countries')
console.log(allCountries)
console.groupEnd()

//10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 is not greater than 2 * 10')
//Write a warning message using console.warn()
console.warn('This is a warning')
//Write an error message using console.error()
console.error('This is an error')

//Check the speed difference among the following loops: while, for, for of, forEach
const countries1 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries1.length; i++) {
    console.log(countries1[i][0], countries1[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries1) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries1.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')
