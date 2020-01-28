//Create a closure which has one inner function
function outerFunction() {
    console.log('Outer function')
    let count = 0;
    function innerFunction() {
        console.log('Inner function')
        count++
        return count
    }
    //console.log(count)
    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
//Create a closure which has three inner functions
function main() {
    let count = 2
    function main1() {
        count++
        return count
    }
    function main2() {
        count-- 
        return count
    }
    function main3(){
        count = count * count
        return count
    }
    return {main1:main1(),main2:main2(),main3:main3()}
}
const mainFun = main()
console.log(mainFun)

//Create a personAccount out function. It has
//firstname, lastname, incomes, expenses inner
//variables. 
//It has totalIncome, totalExpense, 
//accountInfo,addIncome, addExpense and 
//accountBalance inner functions. 
//Incomes is a set of incomes and its 
//description and expenses is also a set of 
//expenses and its description.
function personAccount() {
    firstName = 'Mangalam'
    lastName = 'Krishnan'
    incomes = {salary: 3000,onlineIncome:1000,rent:500}
    expenses =  {transport: 100,food: 400,fee:1000}

    function addIncome() {
        incomes.bonus = 1000
        return incomes
    }

    function addExpense () {
        expenses.outing = 500
        return expenses
    }

    function totalIncome () {
        let values = Object.values(incomes)
        let sum = 0
        for (let value of values) {
        sum = sum + value
        }
        return (sum)

    }

    function totalExpense () {
        let values = Object.values(expenses)
        let sum = 0
        for(let value of values) {
            sum = sum + value
        }
        return sum
 
     }

    function accountBalance () {
        return(totalIncome() - totalExpense())
    }

    function accountInfo () {
        return `Account name is ${firstName} ${lastName}.\n
        The total expense of the account person is ${totalIncome()} and the total expense is ${totalExpense()}.\n
        His accaount balance is ${accountBalance()}`
    }

    return {incomes:addIncome(),expenses:addExpense(),totalExpense:totalExpense(),totalIncome:totalIncome(),accountBalance:accountBalance(),accountInfo:accountInfo()}

}

const account = personAccount()

console.log(account)