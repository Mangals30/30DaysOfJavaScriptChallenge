//Exercises: Level 1
//Destructure and assign the elements of constants array to 
//e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
let[e,pi,garvity,humanBodyTemp,waterBoilingTemp] = constants
console.log(e,pi,garvity,humanBodyTemp,waterBoilingTemp)

//Destructure and assign the elements of countries array to fin,
// est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin,est,sw,den,nor] = countries
console.log(fin,est,sw,den,nor)

//Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  let {width,height,area,perimeter} = rectangle
  console.log(width,height,area,perimeter)

//Exercises: Level 2
//Iterate through the users array and get all the keys 
//of the object using destructuring
//Find the persons who have less than two skills
const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
  ]
const userArr = []
for (const {name,skills} of users){
  if (skills.length < 2) {
   userArr.push(name)
  }
}
console.log(userArr)

//Destructure the countries object print name, capital, population and languages of all countries
const countryObj = []
for({name,capital,population,languages} of allCountries) {
  countryObj.push({name:name,capital:capital,population:population,languages:languages})
}
console.log(countryObj)
//A junior developer structure student name, skills and 
//score in array of arrays which may not easy to read. 
//Destruction the following array name to name, 
//skills array to skills, 
//scores array to scores, 
//JavaScript score to jsScore and 
//React score to reactScore variable.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name1,skills,scores] = student
console.log(name1)
let [,,jsScore,reactScore] = scores
console.log(name1, skills, scores, jsScore, reactScore)

//Write a function called convertArrayToObject 
//which can convert the array to a structure object.

convertArrayToObject = (students) => {
  const studObj = []
 for (const[name,skills,scores] of students) {
     studObj.push({name:name,skills:skills,scores:scores})
 }
 return studObj
}

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
console.log((convertArrayToObject(students)))

//Copy the student object to newStudent without mutating 
//the original object. In the new object add the following ?
//Add Bootstrap with level 8 to the front end skill sets
//Add Express with level 9 to the back end skill sets
//Add SQL with level 8 to the data base skill sets
//Add SQL without level to the data science skill sets

const student1 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const copyStudent = {...student1,skills:{frontEnd:[{skill: 'BootStrap',level: 8}]}}
console.log(copyStudent)


