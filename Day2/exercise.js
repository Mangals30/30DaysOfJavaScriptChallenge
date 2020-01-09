//Declare a variable name challenge and 
//assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days Of JavaScript'

//Print the string on the browser console using console.log()
console.log('The challege is', challenge)

//Print the length of the string on the browser console
// using console.log()
console.log('The length of the challenge is',challenge.length)

//Change all the 
//string to capital letters using toUpperCase() method
console.log('Challenge in uppercase is',challenge.toUpperCase())

//Change all the
//string to lowercase letters using toLowerCase() method
console.log('Challenge in lowercase is', challenge.toLowerCase())

//Cut(slice) out the first word of the string 
//using substr() or substring() method
console.log('Cutting the first word of the string using substr() is',challenge.substr(0,2))
console.log('Cutting the first word of the string using substring() is',challenge.substring(0,2))

//Slice out the phrase Days Of JavaScript 
//from 30 Days Of JavaScript.
let phrase1 = 'Days Of JavaScript'
let lenphrase1 = phrase1.length
let indexPhrase = challenge.indexOf(phrase1)
let len1 = indexPhrase + lenphrase1 +1
console.log(challenge.slice(indexPhrase,len1))

//Use substr to slice out the phase 
//because because because in the following sentence:
//'You cannot end a sentence with because because because 
//is a conjunction'
let phrase2 = 'You cannot end a sentence with because because because is a conjunction'
let phrasevalue = 'because because because'
let indexPhrase2 = phrase2.indexOf(phrasevalue)
let lenphrase2 = phrasevalue.length
let len2 = indexPhrase2 + lenphrase2 + 1
console.log(phrase2.slice(indexPhrase2,len2))

//Check if the string contains a word Script
// using includes() method
let includeScript = 'Script'
if(includeScript) {
    console.log(`The word ${includeScript} is included in the string ${challenge}`)
    }
else {
    console.log(`The word ${includeScript} is not included in the string ${challenge}`)
}

//Split the string into array using split() method
console.log('The string challenge in array is', challenge.split())

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
//split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log('Companies in array is', companies.split(','))

//Change 30 Days Of JavaScript to 
//30 Days Of Python using replace() method.
console.log('Repacing Javascript to Python in challenge.\n',challenge.replace('JavaScript', 'Python'))

//What is character at index 15 in 
//'30 Days Of JavaScript' string use charAt() method.
console.log('Character at index 15 is',challenge.charAt(15))

//What is the character code of J in 
//'30 Days Of JavaScript' string using charCodeAt()
console.log('Character code of J is',challenge.charCodeAt('J'))

//Use indexOf to determine the position of the first occurrence of 
//a in 30 Days Of JavaScript
console.log('First occurence of a is',challenge.indexOf('a'))

//Use lastIndexOf to determine the position of 
//the last occurrence of a in 30 Days Of JavaScript.
console.log('Last occurence of a is',challenge.lastIndexOf('a'))

//Use indexOf to find the position of the first occurrence 
//of the word because in the following sentence:
//'You cannot end a sentence with because because because 
//is a conjunction'
console.log('First occurence of because is',phrase2.indexOf('because'))

//Use lastIndexOf to find the position of the last occurrence 
//of the word because in the following sentence:
//'You cannot end a sentence with because because because
// is a conjunction'
console.log('Last occurence of because is',phrase2.lastIndexOf('because'))

//Use search to find the position of the first occurrence 
//of the word because in the following sentence:
//'You cannot end a sentence with because because because 
//is a conjunction'
console.log('First occurence of because using search is',phrase2.search('because'))

//Use trim() to remove if there is trailing whitespace 
//at the beginning and the end of a string.E.g 
//' 30 Days Of JavaScript '.
let trimChallenge = ' 30 Days Of JavaScript '
console.log('Trimming the whigtespaces of trimChallenge',trimChallenge.trim())

//Use startsWith() method with the string 
//30 Days Of JavaScript make the result true
console.log(challenge.startsWith('30'))

//Use endsWith() method with the string 
//30 Days Of JavaScript make the result true
console.log(challenge.endsWith('JavaScript'))

//Use match() method to find all the a’s in 
//30 Days Of JavaScript
console.log('All the a \'s in challenge',challenge.match(/a/ig))

//Use match() to count the number all because's in the 
//following sentence:'You cannot end a sentence with because
// because because is a conjunction'
console.log('All the becauses in phrase2 is',phrase2.match(/because/ig))

//Use concat() and merge '30 Days of' and 'JavaScript' 
//to a single string, '30 Days Of JavaScript'
let string1 = '30 Days of'
let string2 = ' '
let string3 = 'JavaScript'
console.log('Concating two strings',string1.concat(string2,string3))

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log('Repeat', challenge.repeat(2))

//Love is the best thing in this world. Some found their love and some are still looking for their love.
// Count the number of word love in this sentence.
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
let countLove = love.match(/love/ig)
console.log('Number of love in the sentence is',countLove.length)

//Calculate the total annual income of the person by
//extract the numbers from the following text. 
//'He earns 5000 euro from salary per month, 10000 euro 
//annual bonus, 15000 euro online courses per month.'
let incomeSentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month'
let incomes = /\d+/g
let incomeArray = incomeSentence.match(incomes)
let totalIncome = incomeArray.reduce((accumulator,current) => parseInt(accumulator) + parseInt(current))
console.log('Total income is', totalIncome)

//Clean the following text and find the most frequent word
//(hint, use replace and regular express).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
let symbols = /[^\w\s]/g
let words = sentence.replace(symbols,'')
console.log(words)

//Using console.log() print out the following statement.
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help to one another.
console.log('\The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help to one another.')

//Using console.log() print out the following quote by Mother Teresa.
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same --ty yo
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')



