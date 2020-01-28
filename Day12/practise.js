let pattern = 'love'
let regex1 = new RegExp(pattern)
let sentence = 'Love is divine. Everybody needs love. God id love.Love is beautiful'
console.log(sentence.match(regex1))

let flag2 = 'ig'
let regex2 = new RegExp(pattern,flag2)
console.log(sentence.match(regex2))

let flag3 = 'i'
let regex3 = new RegExp(pattern,flag3)
console.log(sentence.match(regex3))

let flag4 = 'g'
let regex4 = new RegExp(pattern,flag4)
console.log(sentence.match(regex4))

let regex5 = /love/ig
console.log(sentence.match(regex5))

let regexp = /love/ig
let result = regexp.test(sentence) // returns boolean, true or false
console.log(result)

let result1 = sentence.match(regexp) // null or array
console.log(result1)

let result2 = sentence.match(/kerala/ig)
console.log(result2)

let result3 = sentence.search(regexp)
console.log(result3)

let result4 = sentence.search(/kerala/ig)
console.log(result4)

let text = 'Bangalore is the most beatiful city because the climate of the bangalore is good.'
let result5 = text.replace(/Bangalore|bangalore/,'Kerala')
console.log(result5)

let result6= text.replace(/Bangalore|bangalore/g,'Kerala')
console.log(result6)

let result7 = text.replace(/Bangalore/ig,'Kerala')
console.log(result7)

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
let txtRes = txt.replace(/%/ig,'')
console.log(txtRes)

let teacher = 'I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.'

let sentence1 = 'This order was placed waste for 9 and 10 this QT3000! OK?. This is not Ok!#"%#¤%¤&"¤/.2001 to 2020 was a fantastic year for me'
let regexExp1 = /[a-c]/
console.log(sentence1.match(regexExp1))
let regexExp2 = /[a-z]/
console.log(sentence1.match(regexExp2))
let regexExp3 = /[A-Z]/
console.log(sentence1.match(regexExp3))
let regexExp4 = /[0-3]/
console.log(sentence1.match(regexExp4))
let regexExp5 = /[0-9]/ig
console.log(sentence1.match(regexExp5))
let regexExp6 = /[a-zA-Z0-9]/
console.log(sentence1.match(regexExp6))
let regexExp7 = /\d/
console.log(sentence1.match(regexExp7))
let regexExp8 = /\D/
console.log(sentence1.match(regexExp8))
let regexExp9 = /./
console.log(sentence1.match(regexExp9))
let regexExp10 = /^this/ // checks whether the sentence or string starts with This
console.log(sentence1.match(regexExp10))
let regexExp11 = /^[this]/i
console.log(sentence1.match(regexExp11))
let regexExp12 = /[T]./ig
console.log(sentence1.match(regexExp12))
let regexExp13 = /me$/
console.log(sentence1.match(regexExp13))
let regexExp14 = /[^this]/ig
console.log(sentence1.match(regexExp14))
let regexExp15 = /[was]/ig
console.log(sentence1.match(regexExp15))
let regexExp16 = /^[was]$/ig // Checks whether the sentence starts and ends with was
console.log(sentence1.match(regexExp16))
let regexExp17 = /[01]*/ig
console.log(sentence1.match(regexExp17))
let regexExp18 = /[01]+/ig
console.log(sentence1.match(regexExp18))
let regexExp19 = /[01]?/ig
console.log(sentence1.match(sentence1.regexExp19))
let regexExp20 = /0?1+$/
console.log(sentence1.match(regexExp20  ))
let rega1 = /\d/
console.log(sentence1.match(rega1))
let rega2 = /\d/ig
console.log(sentence1.match(rega2))
let rega3 =/^[\d]$/
console.log(sentence1.match(rega3))
let rega4 = /\d*/ig
console.log(sentence1.match(rega4))
let rega5 = /\d+/ig
console.log(sentence1.match(rega5))
let rega6 = /\d?/ig
console.log(sentence1.match(rega6))
let rega7 =/\d./ig
console.log(sentence1.match(rega7))
let rega8 = /\d+./ig
console.log(sentence1.match(rega8))


let texts = 'Apple and banana are fruits.An apple a day keeps the doctor away and Banana is good for bones.'

let pat1 = '[Aa]pple'
console.log(texts.match(pat1))

let pat2 = /[Aa]pple/g
console.log(texts.match(pat2))

let pat3 = /[Aa]pple|[Bb]anana/
console.log(texts.match(pat3))

let pat4 = /apple|banana/ig
console.log(texts.match(pat4))

let text1 = 'Apple and banana are fruits'
let pat5 = /[a]/g
console.log(text1.match(pat5))

let pat6 = /[a]+/g
console.log(text1.match(pat6))

let pat7 = /[a]./g
console.log(text1.match(pat7))

let pat8 = /[a]*/g
console.log(text1.match(pat8))

let pat9 = /[a]+./g
console.log(text1.match(pat9))

let pat10 = /[a].+/g
console.log(text1.match(pat10))
let pat11 = /\d.+/g
console.log(sentence1.match(pat11))

let pat12 = /[a].*/g
console.log(text1.match(pat12))
let pat13 = /\d.*/g
console.log(sentence1.match(pat13))

//let pat14 = /[a]*+/g
//console.log(text1.match(pat13))
//let pat15 = /\d*+/
//console.log(sentence1.match(pat15))
let pat16 = /[a]*./g
console.log(text1.match(pat16))
let pat17 = /\d*./g
console.log(sentence1.match(pat17))

let pat18 = /[a]?/g
console.log(text1.match(pat18))

let pat19 = /\d?/g
console.log(sentence1.match(pat19))

let pat20 = /[a]?./ig
console.log(text1.match(pat20))
let pat21 = /\d?./ig
console.log(sentence1.match(pat21))

/*let pat22 = /[a]?*//*ig
console.log(text1.match(pat22))
let pat23 = /\d?*//*ig
console.log(sentence1.match(pat23))*/
