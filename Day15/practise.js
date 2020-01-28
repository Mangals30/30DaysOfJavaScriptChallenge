class Person {
    constructor(firstName,lastName,age,country,city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName () {
        return (this.firstName + ' ' + this.lastName)
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score){
        this.score +=score
    }
    set setSkills(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''
    
        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
      }
      static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
      }
      static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
    
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
      }

  }
  const person1 = new Person('Mangalam','Krishnan',34,'India','Bangalore')
  const person2 = new Person('Sanjay','Jayaraman')
  const person3 = new Person('Shwetha','Sanjay')
  console.log(person1)
  console.log(person2)
  console.log(person3)
  console.log(person1.getFullName())
  console.log(person2.getFullName())
  console.log(person3.getFullName())
  person1.setScore = 1
  person2.setScore = 2
  person1.setSkills = 'HTML'
  person1.setSkills = 'CSS'
  person1.setSkills = 'Javascript'
  person2.setSkills = 'MongoDB'
  person2.setSkills = 'SQL'
  person2.setSkills = 'Java'
  console.log(person1.score) 
  console.log(person2.score) 
  console.log(person1.skills) 
  console.log(person2.skills)
  console.log(person1.getPersonInfo())
  console.log(person2.getPersonInfo())
  console.log(person3.getPersonInfo()) 
  console.log(Person.favoriteSkill())
  console.log(Person.showDateTime())
  class Per {
      constructor(
          firstName = 'Sharanya',
          lastName = 'Sanjay',
          age = 30
      ) {
          this.firstName = firstName
          this.lastName = lastName
          this.age = age

      }

  }
  const per1 = new Per()
  const per2 = new Per ('Charu','Krishnan',70)
  console.log(per1)
  console.log(per2)

  class Student extends Person {
      constructor(firstName,lastName,age,country,city,gender){
          super(firstName,lastName,age,country,city)
          this.gender = gender
      }
    saySomething() {
      console.log('I am a child of the person class')
    }
  }
  const s1 = new Student('Giri','Navi')
  console.log(s1)
  console.log(s1.getFullName())
  console.log(s1.getPersonInfo())
  console.log(s1.saySomething())