//Create an empty object called dog
const dog = {}

//Print the the dog object on the console
console.log('dog',dog)
//Add name, legs, color, age and bark properties for the dog object. 
//The bark property is a method which return woof woof
dog.name = 'Snoopy'
dog.color = 'white'
dog.age = 3
dog.bark = function () {
    return 'woof woof'
} 

//Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

//Set new properties the dog object: breed, getDogInfo
dog.object = 'breed'
dog.getDOgInfo = function () {
    return `Dogs name is ${this.name}. It is ${this.color} in color. It is ${this.age} years old. It barks ${dog.bark()}`
}
console.log(dog.object)
console.log(dog.getDOgInfo())

//Create an object literal called personAccount.
//It has firstName, lastName, incomes, expenses properties and
//it has totalIncome, totalExpense, accountInfo,addIncome, 
//addExpense and accountBalance methods. 
//Incomes is a set of incomes and its description and expenses 
//is a set of incomes and its description.
personAccount = {
    firstName: 'Mangalam',
    lastName: 'Krishnan',
    incomes:  {
             salary : 3000,
             online : 2000,
             rent : 1000
             },
    expenses: {
              transport :100,
              food : 1000,
              fee : 500
            },
    totalIncome: function() {
                const values = Object.values(this.incomes)
                let sum = 0
                for (const value of values) {
                sum = sum + value
                }
                 return sum
    },
    totalExpense: function() {
                  let sum = 0
                  const values = Object.values(this.expenses)
                  for (const value of values) {
                      sum = sum + value
                  } 
                  return sum
                },
    accountInfo: function () {
                 return `This account belongs to ${this.firstName} ${this.lastName}. Total expense is ${this.totalExpense()}. Total income is ${this .totalIncome()}.Account balance is ${this.accountBalance()}`
    },
    addIncome: function() {
               this.incomes.bonus = 200
               this.incomes.business = 500
                },
    addExpense: function ()  {
                this.expenses.vaccation = 1000
                this.expenses.shopping = 200
    },
    accountBalance: function() {
                    return (this.totalIncome() - this.totalExpense())
    }

}
console.log(personAccount.firstName)
console.log(personAccount.lastName)
console.log(personAccount.incomes.salary,personAccount.incomes.rent,personAccount.incomes.online)
console.log(personAccount.expenses.transport,personAccount.expenses.food,personAccount.expenses.fee)
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.addIncome())
console.log(personAccount.addExpense())
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
console.log(personAccount.accountBalance())

//Count logged in users,count users having greater than equal to 
//50 points from the following object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  let userValues = Object.values(users)
  let count = 0
  console.log(userValues)
  for (const userValue of userValues) {
      if ((userValue.points >= 50) && (userValue.isLoggedIn==true)) {
          count++
      }
  }
  console.log(count)
   
 //Find people who are MERN stack developer from the users object 
  let userKeys = Object.keys(users)
  let M = 'MongoDB'
  let E = 'Express'
  let R = 'React'
  let N = 'Node'
  let MERNUser = []
  let userCount = 0
  console.log(userKeys)
  for (const user in users) {
    console.log(users[user])  
    const skillArray = users[user].skills
    console.log(skillArray)
    if ((skillArray.includes(M)) && (skillArray.includes(E)) && (skillArray.includes(R)) && (skillArray.includes(N))) {
        userCount++
        MERNUser.push(user)
        console.log(MERNUser)
        
    }
  }
console.log('MERN user is',MERNUser.toString())
console.log(userCount)

//Set your name in the users object without modifying the original users object
users.Mangalam = {email: 'mkk@yahoo.com',
                 skills: ['HTML', 'CSS', 'JavaScript'],
                 age: 34,
                 isLoggedIn: true,
                 points: 60}
console.log(users) 

//Get all keys or properties of users object
console.log('Keys of user object are',userKeys)

//Get all the values of users object
console.log('Values of user object are',userValues)

//Use the countries object to print a country name, 
//capital, populations and languages.

const newCountry = []
for(const country of countries){
    newCountry.push({
        countryName: country.name,
        countryCapital: country.capital,
        countryPopulation: country.population,
        countryLanguages: country.languages
    })
}
console.log(newCountry)

  