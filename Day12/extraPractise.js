let regex;
let expression = 'hello Hello helllloooo Hellooo. Hello is a hello word which hellooo Helloooss'
regex = /hello/ // Only one result
console.log(expression.match(regex))
regex = /hello/i //Only one result
console.log(expression.match(regex))
regex = /hello/ig //Multiple results due to g
console.log(expression.match(regex))
regex = /hello./ // 1 character after o
console.log(expression.match(regex))
regex = /hello./g
console.log(expression.match(regex))
regex = /hello../g //2 characters after o
console.log(expression.match(regex))
regex = /hell.o/g //i chacter between l and o
console.log(expression.match(regex))
regex = /hell.*o/g // any number of characters between l and o (between the first index of l and the last inex of o)
console.log(expression.match(regex))
regex = /(l){4}/ig //llll
console.log(expression.match(regex))
regex = /hello{3}/ig //hellooo and Hellooo
console.log(expression.match(regex))
let digi = '0 1 and 2 and 3 and 4 and 12 and 2 and 5 and 2 and 2 and 123 and 45 and 65764 56754 9807897945'
regex = /\d{3}/g
console.log(digi.match(regex))
regex = /\d{3,}/g
console.log(digi.match(regex))
regex = /\d{3,7}/g
console.log(digi.match(regex))
let alpha = 'ab abc ac bc abbc accb bcab abbbbc'
regex = /ab*c/ig
console.log(alpha.match(regex))
regex = /ab+c/ig
console.log(alpha.match(regex))
regex = /ab.c/ig
console.log(alpha.match(regex))
let begin = 'Hello3. How are you'
regex = /^[A-Z]/ig  // only H
console.log(begin.match(regex))
regex = /^[A-Z]*/ig //Hello
console.log(begin.match(regex))
regex = /^[A-Z]\w*/ig //Hello3
console.log(begin.match(regex))
let end = 'do cats like taco dogs'
regex = /\w*s$/ig
console.log(end.match(regex))
let words = 'cats, dogs, s, pig cow'
regex = /\w*s/ig
console.log(words.match(regex))
let wordBound = 'Hello, look at you'
regex = /\blo/ig
console.log(wordBound.match(regex))
regex = /ok\b/ig
console.log(wordBound.match(regex))
let fin = 'It is ice cold outside'
regex = /ice(?= cold)/ // searches the ice before the cold (without space)
console.log(fin.match(regex))
regex = /cold(?!ice)/
console.log(fin.match(regex)) // searches the cold after ice
regex = /(ice )?cold/ig
console.log(fin.match(regex))
regex = /(?:ice )?cold/ig
console.log(fin.match(regex))
regex = /(ice)\1/
console.log(fin.match(regex))
regex = /(?<=[It])\w/;
console.log(fin.match(regex))
regex = /(?<![cold])\w/;
console.log(fin.match(regex))