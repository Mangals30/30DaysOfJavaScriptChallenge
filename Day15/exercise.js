//Create an Animal class. The class will have
// name, age, color, legs properties 
//and create different methods
class Animal {
    constructor(name,age,color,legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.type = ''
    }
    getAnimalInfo() {
        return `The animal is ${this.name}.Its color is ${this.color} and it has ${this.legs} legs`
    }
    get getAnimalType() {
        return this.type
    }
    set setAnimalType(type) {
        this.type = type
    }
    
}
const animal1 = new Animal('tiger',2,'yellow',4)
console.log(animal1)
console.log(animal1.getAnimalInfo())
animal1.setAnimalType = 'wild'
console.log(animal1.getAnimalType)
//Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal{
   constructor(name,age,color,legs,pet) {
      super(name,age,color,legs)
      this.pet = pet
    
   }
   getAnimalInfo() {
      return `Hi!.I am a cute ${this.name}.I am ${this.age} years old.`
   }

}
class Cat extends Animal{
    constructor (name,age,color,legs,meow) {
    super (name,age,color,legs)
    this.meow = meow
    }
    getAnimalInfo() {
        return `Hi!.I am a cute ${this.name}.I am ${this.age} years old.`
     }

}
const dog = new Dog('Steffy',5,'white',4,true)
const cat = new Cat('Catty',3,'black',4,true)
console.log(dog.getAnimalInfo())
console.log(cat.getAnimalInfo())

//Let's try to develop a program which 
//calculate measure of central tendency of a 
//sample(mean, median, mode) and measure of 
//variability(range, variance, standard deviation).
// In addition to those measures find the min, 
//max, count, percentile, and frequency 
//distribution of the sample. 
//You can create a class called Statistics and 
//create all the functions which do statistical 
//calculations as method for the Statistics class. 
//Check the output below.

class Statistics {
   constructor(ages){
       this.ages =ages
   }
   getCount() {
       return this.ages.length
   }
   getSum(){
    let sumOfAges = this.ages.reduce((accum,curr) => accum + curr)
    return sumOfAges
   }
   getMin(){
    const minAge = [...this.ages]
    minAge.sort()
    return minAge[0]
   }
   getMax(){
    const maxAge = [...this.ages]
    maxAge.sort()
    maxAge.reverse()
    return maxAge[0]
   }
   getRange(){
    return `${this.getMax()-this.getMin()}`
   }
   getMean() {
    return `${Math.round(this.getSum()/this.getCount())}`
   }
   getMedian() {
    const medianArr = [...this.ages]
    medianArr.sort()
    const index = Math.ceil((medianArr.length)/2)
    const median = medianArr[index - 1]
    return median
   }
   getMode() {
    const modes = {}
    const modeObj =[]
    const modeArr = [...this.ages]
    const modeSet = new Set(modeArr)
    const modeUniq = Array.from(modeSet)
    for (const element of modeUniq) {
        let count = 0
        for (const arr of modeArr) {
            if(element == arr) {
             count++
            }
        }
        modeObj.push({element,count})
        modeObj.sort((a,b) =>{
            if(a.count<b.count) return 1
            if(a.count>b.count) return -1
            return 0
        })
    }
    modes.mode = modeObj[0].element
    modes.count = modeObj[0].count
    return modes
   }
   getVariance() {
    const varianceArr = [...this.ages]
    let vari = 0
    for (const variance of varianceArr){
        vari = vari + (this.getMean()-variance)**2
    }
    return `${vari/this.getCount()}`
   }
   getStd() {
    const std = Math.sqrt(this.getVariance())
    return (std.toFixed(1))
   }
   getFrequency() {
    const modeObj = {}
    const modeArr = [...this.ages]
    const modeSet = new Set(modeArr)
    const modeUniq = Array.from(modeSet)
    for (const element of modeUniq) {
        let count = 0
        for (const arr of modeArr) {
            if(element == arr) {
             count++
            }
        }
        modeObj[element] = count
    }
    return modeObj
   }
   describe() {
    return {
        Count: this.getCount(),
        Sum:  this.getSum(),
        Min:  this.getMin(),
        Max:  this.getMax(),
        Range: this.getRange(),
        Mean:  this.getMean(),
        Median:  this.getMedian(),
        Mode:  this.getMode(),
        Variance:  this.getVariance(),
        StandardDeviation: this.getStd(),
        FrequencyDistribution: this.getFrequency()
        }
   }
}
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics(ages)
const describe = statistics.describe()
console.log(JSON.stringify(describe,undefined,4))

//Create a class called PersonAccount.
// It has firstname, lastname, incomes,
//expenses properties and it has totalIncome,
//totalExpense, accountInfo,addIncome, 
//addExpense and accountBalance methods.
//Incomes is a set of incomes and its description
// and expenses is also a set of expenses and its
// description.
class PersonAccount {
    constructor(firstName,lastName,incomes,expenses){
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
    }
    totalIncome () {
        const values = Object.values(this.incomes)
        let sum = 0
        for (const value of values) {
            sum = sum + value
        }
        return sum
    }
    totalExpense() {
        let sum = 0
        const values = Object.values(this.expenses)
        for (const value of values) {
            sum = sum + value
        } 
        return sum
    }
    set setIncome (income) {
        this.incomes = this.incomes + income
    }
    set setExpense(expense) {
        this.expenses = this.expenses + expense
    }    
    get addIncome() {
        return this.incomes
    }
    get addExpense() {
        return this.expenses
    }
    accountInfo() {
        return `This account belongs to ${this.firstName} ${this.lastName}. Total expense is ${this.totalExpense()}. Total income is ${this .totalIncome()}.Account balance is ${this.accountBalance()}`
    }
    accountBalance() {
        return (this.totalIncome() - this.totalExpense())
    }
}

const personaccount = new PersonAccount('Mangalam','Krishnan',{salary : 3000,online : 2000,rent : 1000}, {transport :100,food : 1000,fee : 500})
console.log(personaccount.accountBalance())
personaccount.setExpense = 