const app = document.getElementById('app')
//create nav bar
const nav = document.createElement('div')
// create main container
const main = document.createElement('div')
let log = console.log


app.appendChild(nav)
nav.textContent = 'De schone slaapster '
nav.className = 'nav-style'

app.appendChild(main)
main.className = 'main-style'
main.textContent = 'Main content'

//card

let card = document.createElement('div')
main.appendChild(card)
card.className = 'card-style'
// card.textContent ='card content'

//img for card
let cardImg = document.createElement('img')
cardImg.src = 'img/roze.jpg'
cardImg.className = 'card-img'
card.appendChild(cardImg)

//card title
let cardTitle = document.createElement('h3')
cardTitle.className = 'card-title'
cardTitle.textContent ='Roze wolkjes'
card.appendChild(cardTitle)

// card price
let cardPrice = document.createElement('h4')
cardPrice.textContent ='Price: $4.99'
cardPrice.className ='card-price'
card.appendChild(cardPrice)



