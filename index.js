let log = console.log
const app = document.getElementById('app')
//create nav bar
const nav = document.createElement('div')
// create main container
const main = document.createElement('div')
app.appendChild(nav)
nav.textContent = 'De schone slaapster '
nav.className = 'nav-style'

app.appendChild(main)
main.className = 'main-style'
main.textContent = 'Main content'

const  data = [
    {  "id" : 1,
        "title" :  "roze wolk",
        "price"  : "$4.99"
    } ,
    {    "id" : 2,
        "title" : "green meer",
        "price" :"$234.99"
    } ,
    {   "id" : 3,
        "title" : "blue umbrella",
        "price" :"$14.99"
    }  ,
    {     "id"  : 4,
        "title" : "sweet pado",
        "price" : "$5.99"
    }
]
const prods = data

// create function to make
    let cardCreation = (arr)=> {
        arr.forEach((item, index) => {
            let card = document.createElement('div')
            main.appendChild(card)
            card.className = 'card-style'

    let createCardImg = (item)=> {
                let cardImg = document.createElement('img')
                cardImg.src = 'img/roze.jpg'
                cardImg.className = 'card-img'
                card.appendChild(cardImg)
            }
       createCardImg(item)
      let createCardTitle = (item)=> {
                let cardTitle = document.createElement('h3')
                cardTitle.className = 'cart-title'
                cardTitle.textContent = item.title
                card.appendChild(cardTitle)
            }
            createCardTitle(item)
     let createCardPrice = (item)=> {
                let cardPrice = document.createElement('h4')
                cardPrice.textContent = `Price: ${item.price}`
                cardPrice.className = 'card-price'
                card.appendChild(cardPrice)
            }
    createCardPrice(item)

    })


}
cardCreation(prods)



