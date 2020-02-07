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
   

   const personAccount1 = {
    firstName: 'Mangalam',
    lastName: 'Krishnan',
    incomes: [{description: 'Salary',
               amount: 3000},
               {description: 'onlineIncome',
                amount: 1000},
                {description: 'rent',
                 amount: 500 
                }],
    expenses: [{description: 'transport',
                amount:100},
                {description: 'food',
                 amount: 400},
                 {description: 'fee',
                 amount: 1000}],


    addIncome () {
    const description = prompt('Enter description: ') 
    const amount = prompt('Enter amount: ')   
    const income = {description,
                    amount: Number(amount)}
    this.incomes.push(income)
    },
    addExpense () {
    const description = prompt('Enter description: ') 
    const amount = Number(prompt('Enter amount: '))
    const expense = {description: description,
                    amount: Number(amount)}
    this.expenses.push(expense)
    },           
    totalIncome () {
        let values = this.incomes.map(income => income.amount)
        let sum = 0
        for (let value of values) {
        sum = sum + value
        }
        return (sum)

    },
    totalExpense () {
       let values = this.expenses.map(expense => expense.amount)
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
        return `Account name is ${this.firstName} ${this.lastName}.\n
        The total expense of the account person is ${this.totalIncome()} and the total expense is ${this.totalExpense()}.\n
        His accaount balance is ${this.accountBalance()}`
    }
            
   }
   const personAccountJson1 = localStorage.setItem('account',personAccount1)
   personAccount1.addIncome()
   personAccount1.addExpense()
   console.log('Total income: ',personAccount1.totalIncome())
   console.log('Total expense: ',personAccount1.totalExpense())
   console.log('Account balance: ',personAccount1.accountBalance())
   
   
  /* const personAccountJson1 = JSON.stringify(personAccount1)
   console.log(personAccountJson1)
   localStorage.setItem('personAccount',personAccountJson1)
   console.log(localStorage.getItem('personAccount'))
   const personAccountParsed1 = JSON.parse(personAccountJson1)
   console.log('parsed person account',personAccountParsed1)
   //console.log(localStorage)
   /* incomes: [{
       description: 'Salary'
       amount: 4000
   }]*/ 



