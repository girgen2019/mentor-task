// =============================== Задание 1  =============================================

const sweets = [
    { id: 1, price: 20, name: 'chocolate' },
    { id: 2, price: 10, name: 'ice-cream' },
    { id: 3, price: 30, name: 'coca-cola' },
]
    let answerOnQuestion = prompt('Что вы хотите покушать?')
    let searchChocolate = sweets.find(names => names.name === answerOnQuestion)
    if (searchChocolate) {
        alert(`Товар ${searchChocolate.name} стоит ${searchChocolate.price} рублей`)
    } else {
        alert('Товар не был найден')
    }
    let searchIceCream = sweets.find(names => names.name === answerOnQuestion)
    if (searchIceCream) {
        alert(`Товар ${searchIceCream.name} стоит ${searchIceCream.price} рублей`)
    } else {
        alert('Товар не был найден')
   }
    let searchCocaCola = sweets.find(names => names.name === answerOnQuestion)
    if (searchCocaCola) {
        alert(`Товар ${searchCocaCola.name} стоит ${searchCocaCola.price} рублей`)
    } else {
        alert('Товар не был найден')
   }

// // ==================   Задание 2   ======================================

    let enterCommand = prompt('Введите комманду!')
    if(enterCommand === 'All'){
  sweets.forEach(all => alert(`Товар ${all.name} стоит ${all.price}`))
}
    else if(enterCommand === 'Low price'){
        sweets.filter((element) => {
    return element.price < 15;
}).forEach(lows => alert(`Самый дешевый товар - это ${lows.name} стоит ${lows.price}`))


}
else if(enterCommand === 'High price'){
 sweets.filter((element) => {
    return element.price > 15;
}).forEach(highs => alert(`Самый дорогой товар - это ${highs.name} стоит ${highs.price}`))
} else {
alert('Товар не найден')
}


// ==========================  Задание 3     ==================================================

const sweets = [
  { id: 1, price: 20, name: 'chocolate' },
  { id: 2, price: 10, name: 'ice-cream' },
  { id: 3, price: 30, name: 'coca-cola' },
]
let newSweets = sweets.map(discount => `Цены со скидкой 20% - товар ${discount.name} по цене - ${Math.round(discount.price * 100 / 120)}`) 
console.log(newSweets)




