//Calculate the total annual income of the person
//from the following text. ‘He earns 4000 euro 
//from salary per month, 10000 euro annual bonus,
// 5500 euro online courses per month.’
let incomeSentence  = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let incomePattern = /\d+/g
let incomeStr = incomeSentence.match(incomePattern)
let incomes = incomeStr.map(income => parseInt(income))
let totalIncome = incomes.reduce((accumulator,current) => accumulator + current)
console.log(totalIncome )

//The position of some particles on the horizontal x-axis
// -12, -4, -3 and -1 in the negative direction, 0 at origin,
// 4 and 8 in the positive direction. 
//Extract these numbers and find the distance between the two 
//furthest particles.

let positionSentence = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles'
let digitsPattern1 = /-\d+/g
let digitsPattern2 = /[^-.*\d]\d+/g
let digitsFromSen1 = positionSentence.match(digitsPattern1)
console.log(digitsFromSen1)
let digitsFromSen2 = positionSentence.match(digitsPattern2)
console.log(digitsFromSen2)
digitsFromSen = [...digitsFromSen1,...digitsFromSen2]
digitsFromSen.sort((a,b) => {
    return a-b
})
const distance = digitsFromSen[digitsFromSen.length-1] - digitsFromSen[0]
console.log(distance)

//Write a pattern which identify if a string is a valid JavaScript variable
let pat1 = /^[A-Za-z_$]*$/ig
let pat2 = /[-]/ig
let var1 = 'first-name'
let mat1 = var1.match(pat1)
let mat2 = var1.match(pat2)
if ((mat1!=null) && (mat1==null)) {
   console.log(true)
}
else {
    console.log(false)
}
let var2 = 'first_name'
let mat3 = var2.match(pat1)
let mat4 = var2.match(pat2)
if ((mat3!=null) && (mat4==null)) {
    console.log(true)
 }
 else {
     console.log(false)
 }

 let var3 = 'firstname'
 let mat5 = var3.match(pat1)
let mat6 = var3.match(pat2)
if ((mat5!=null) && (mat6==null)) {
    console.log(true)
 }
 else {
     console.log(false)
 }

 let var4 = '1first_name'
 let mat7 = var4.match(pat1)
let mat8 = var4.match(pat2)
if ((mat7!=null) && (mat8==null)) {
    console.log(true)
 }
 else {
     console.log(false)
 }

 let paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'
 let rega = /[^.,]+/ig
 let paragraph1 = paragraph.match(rega)
 console.log(paragraph1)
 let paraArr1 = paragraph1.join(' ')
 let paraArr = paraArr1.split(' ')
 console.log(paraArr)
 let paraArrLower = paraArr.map(para => para.toLowerCase())
 console.log(paraArrLower)
 paraArrSet = new Set(paraArrLower)
 paraArrUni = Array.from(paraArrSet)
 console.log(paraArrUni)
 let countObj = {}
 let countArr = []
 console.log('paraArrUni',paraArrUni)
 console.log('paraArr',paraArr)
for (const para of paraArrUni) {
    let count = 0
    let reg = new RegExp(para,'gi')
    console.log()
    for (const para1 of paraArr) {
        if (para1.toLowerCase().match(reg)) {
            count++
            
        }
    }
    if(para!='') {
        countArr.push({count,para})
    }
    
}
let sortArr = countArr.sort((a,b) =>{
    if(a.count<b.count) return 1
    if(a.count>b.count) return -1
    return 0
})
console.log(sortArr.slice(0,10))

//Writ a function which cleans text. 
//Clean the following text. After cleaning,
// count three most frequent words in the string.
const cleanText = (sentence) => {
    let regSent = /[^\w\s.?]+/ig
    let cleanedText = sentence.replace(regSent,'')
    return cleanedText
}
let sent = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?'
console.log(cleanText(sent))
