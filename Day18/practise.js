const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)

  const doSomething1 = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 2000)
  }
  
doSomething1(callback)

const doPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise2
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))

    const doPromise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          const skills = ['HTML', 'CSS', 'JS']
          if (skills.indexOf('Node') !== -1) {
            resolve('fullstack developer')
          } else {
            reject('Something wrong has happened')
          }
        }, 2000)
      })
      
      doPromise3
        .then(result => {
          console.log(result)
        })
        .catch(error => console.log(error))

const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
.then(response =>response.json())
.then(data => {
    console.log(data)
}) .catch(error => console.log(error))  

const fetchUrl = async() =>{
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)

    }
}
fetchUrl()
