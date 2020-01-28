//Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const skillsTxt = JSON.stringify(skills,undefined,4)
console.log(skills)
console.log(skillsTxt)
//Stringify the age variable
let age = 250;
const ageTxt = JSON.stringify(age,undefined,4)
console.log(age)
console.log(ageTxt)
//Stringify the isMarried variable
let isMarried = true
const isMarriedTxt = JSON.stringify(isMarried,undefined,4)
console.log(isMarried)
console.log(isMarriedTxt)
//Stringify the student object
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
const studentTxt = JSON.stringify(student,undefined,4)
console.log(student)
console.log(studentTxt)  

//Stringify the students object with only firstName, lastName and skills properties
const studentTxtFil = JSON.stringify(student,['firstName','lastName','skills'],4)
console.log(student)
console.log(studentTxtFil)

//Parse the txt JSON to object.
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const txtObj = JSON.parse(txt,undefined,4)
console.log(txt)
console.log(txtObj)
//Find the the user who has many skills from the
 //variable stored in txt.
 const userSkills = []
 for (const key in txtObj) {
     userSkills.push({user:key,count:txtObj[key].skills.length})
     
 }
 console.log(userSkills)
 userSkills.sort((a,b)=>{
     if(a.count < b.count) return 1
     if(a.count > b.count) return -1
     return 0
 })

 const userMaxSkill = userSkills[0].user
 console.log('User with maximum skills is '+userMaxSkill)
