localStorage.setItem('first','Orange')
console.log(localStorage.getItem('first'))
let skills = ['HTML','CSS','Javascript']
localStorage.setItem('skills',skills)
console.log(localStorage.getItem('skills'))
console.log(localStorage)
const ITskills = ['dotnet','java','mainframes']
console.log(ITskills)
const ITJSON = JSON.stringify(ITskills,undefined,3)
console.log(ITJSON)
localStorage.setItem('ITSkills',ITJSON)
console.log(localStorage)
skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]
  
  let skillJSON = JSON.stringify(skills)
  localStorage.setItem('skills', skillJSON)
  console.log(localStorage)
  const user = {
    firstName: 'Mangalam',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)
  console.log(localStorage)
  console.log(localStorage.getItem('skills'))
  console.log(localStorage.getItem('user'))
  console.log(localStorage.getItem('first'))
  console.log(localStorage.getItem('ITSkills'))

  localStorage.clear()
  console.log(localStorage)