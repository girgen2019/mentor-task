// =================================== Задание 1 ===========================================

const sweets = [
  { id: 1, price: 20, name: 'chocolate' },
  { id: 2, price: 10, name: 'ice-cream' },
  { id: 3, price: 30, name: 'coca-cola' },
]
let answerOnQuestion = prompt('Что вы хотите покушать?')
let searchProduct = sweets.find(names => names.name === answerOnQuestion)
if (searchProduct) {
  alert(`Товар ${searchChocolate.name} стоит ${searchChocolate.price} рублей`)
} else {
  alert('Товар не был найден')
}

// // ==================   Задание 2   ======================================

let enterCommand = prompt('Введите комманду!')
if (enterCommand === 'All') {
  sweets.forEach(all => alert(`Товар ${all.name} стоит ${all.price}`))
}
else if (enterCommand === 'Low price') {
  sweets.filter((element) => {
    return element.price < 15;
  }).forEach(lows => alert(`Самый дешевый товар - это ${lows.name} стоит ${lows.price}`))
}
else if (enterCommand === 'High price') {
  sweets.filter((element) => {
    return element.price > 15;
  }).forEach(highs => alert(`Самый дорогой товар - это ${highs.name} стоит ${highs.price}`))
} else if (enterCommand === 'All low price'){
sweets.filter((element) => {
element.price > 0 < 15 })
 alert(`Low Price продукты есть в наличии`)
 return 
}
else {
  alert('Товар не найден')
}
// ==========================  Задание 3     ==================================================


const sweets = [
  { id: 1, price: 20, name: 'chocolate' },
  { id: 2, price: 10, name: 'ice-cream' },
  { id: 3, price: 30, name: 'coca-cola' },
]
// map

const newSweets = sweets.map((discount) => {
 return `id: 1, price: ${Math.round(discount.price * 100 / 120)}, name: ${discount.name}`
})
console.log(newSweets)

// цикл for

for(i = 0; i < sweets.length; i++){
  sweets[i].price =  Math.round(sweets[i].price * 100 /120)
  console.log(sweets[i])
}


// ============================   Задание 4  =======================================================


const sweets = [
  { id: 1, price: 20, name: 'chocolate' },
  { id: 2, price: 10, name: 'ice-cream' },
  { id: 3, price: 30, name: 'coca-cola' },
]
function giveDiscount() {
  const discounts = prompt('Введиде скидку %')
  // const discounts = 10
  // Цикл for
  if (Number(discounts)) {
    for (i = 0; i < sweets.length; i++) {
      sweets[i].price = Math.round((sweets[i].price) - (sweets[i].price * `${discounts}`/ 100 ))
      console.log(sweets[i])
  // map
  // if (Number(discounts)) {
  //   sweets.map((value) => {
  //    return (value.price) - (value.price * `${discounts}`/ 100)
  //   })
   }
   } else {
    console.log('Неправильный формат скидки')
  }
  return
}

console.log(giveDiscount())