//Create an index.html file and put four
//p elements as above: Get the first paragraph
// by using document.querySelector(tagname) 
//and tag name
const pquery = document.querySelector('.p1')
const pclass = document.getElementById('p1')
console.log(pquery)
console.log(pclass)
//Get get each of the the paragraph using document.querySelector('#id') and by their id
const p1id = document.getElementById('p1')
const p2id = document.getElementById('p2')
const p3id = document.getElementById('p3')
const p4id = document.getElementById('p4')
console.log(p1id)
console.log(p2id)
console.log(p3id)
console.log(p4id)
const p1q = document.querySelector('#p1')
const p2q = document.querySelector('#p2')
const p3q = document.querySelector('#p3')
const p4q = document.querySelector('#p4')
console.log(p1q)
console.log(p2q)
console.log(p3q)
console.log(p4q)
//Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const pNode = document.getElementsByTagName('p')
console.log(pNode)
//Loop through the nodeList and get the text content of each paragraph
for (const p of pNode) {
    console.log(p)
}
//Set a text content to paragraph the fourth paragraph,Fourth Paragraph
pNode[3].textContent = 'Fourth Paragraph changed'
//Set id and class attribute for all the paragraphs using different attribute setting methods
const p5 = document.createElement('p')
const p6 = document.createElement('p')
const p7 = document.createElement('p')
const p8 = document.createElement('p')
p5.textContent = 'Paragraph5'
p6.textContent = 'Paragraph6'
p7.textContent = 'Paragraph7'
p8.textContent = 'Paragraph8'
p5.setAttribute('id','p5')
p6.setAttribute('id','p6')
p7.setAttribute('id','p7')
p8.setAttribute('id','p8')
p5.setAttribute('class','p5')
p6.setAttribute('class','p6')
p7.setAttribute('class','p7')
p8.setAttribute('class','p8')
document.body.appendChild(p5)
document.body.appendChild(p6)
document.body.appendChild(p7)
document.body.appendChild(p8)
p5.style.background = 'red'
p6.style.background = 'green'
p7.style.background = 'yellow'
p8.style.background = 'blue'
