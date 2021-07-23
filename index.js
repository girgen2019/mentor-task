const sweets = [
    { id: 1, price: 20, name: 'chocolate' },
    { id: 2, price: 10, name: 'ice-cream' },
    { id: 3, price: 30, name: 'coca-cola' },
]
let searchChocolate = sweets.find(names => names.name === 'chocolate')
let searchIceCream = sweets.find(names => names.name === 'ice-cream')
let searchCocaCola = sweets.find(names => names.name === 'coca-cola')

function askToSelectTheSweet() {
    let answerOnQuestion = prompt('Что вы хотите покушать?')
    if (answerOnQuestion === "chocolate") {
        alert(`Товар ${searchChocolate.name} стоит ${searchChocolate.price} рублей`)
    } else if (answerOnQuestion === "ice-cream") {
        alert(`Товар ${searchIceCream.name} стоит ${searchIceCream.price} рублей`)
    } else if (answerOnQuestion === "coca-cola") {
        alert(`Товар ${searchCocaCola.name} стоит ${searchCocaCola.price} рублей`)
    }
}


 console.log(askToSelectTheSweet())