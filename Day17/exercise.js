const firstName = 'Mangalam'
const lastName = 'Krishnan'
const age = 34
const country = 'India'
const city = 'Bangalore'
localStorage.setItem('firstName',firstName)
localStorage.setItem('lastName',lastName)
localStorage.setItem('age',age)
localStorage.setItem('country',country)
localStorage.setItem('city',city)
console.log(localStorage)


const student = {
      firstName: 'Alex',
      lastName: 'John',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      country: 'America'
    }
const studentJson = JSON.stringify(student,undefined)
localStorage.setItem('student',studentJson)
console.log(localStorage)   

const personAccount = {
    firstName: 'Mangalam',
    lastName: 'Krishnan',
    incomes: {salary: 3000,
              onlineIncome:1000,
              rent:500},
    expenses: {transport: 100,
               food: 400,
               fee:1000},

    addIncome () {
    this.incomes.bonus = 1000
    },
    addExpense () {
        this.expenses.outing = 500
    },           
    totalIncome () {
        let values = Object.values(this.incomes)
        let sum = 0
        for (let value of values) {
        sum = sum + value
        }
        return (sum)

    },
    totalExpense () {
       let values = Object.values(this.expenses)
       let sum = 0
       for(let value of values) {
           sum = sum + value
       }
       return sum

    },
    accountBalance () {
        return(this.totalIncome() - this.totalExpense())
    },
    accountInfo () {
        `Account name is ${this.firstName} ${this.lastName}.\n
        The total expense of the account person is ${this.totalIncome()} and the total expense is ${this.totalExpense()}.\n
        His accaount balance is ${this.accountBalance()}`
    }
            
   }
   
   const personAccountJson = JSON.stringify(personAccount)
   localStorage.setItem('personAccount',personAccountJson)
   console.log(localStorage.getItem('personAccount'))
   console.log(localStorage)
   

