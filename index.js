// =================================== Задание 1 ===========================================

// const sweets = [
//   { id: 1, price: 20, name: 'chocolate' },
//   { id: 2, price: 10, name: 'ice-cream' },
//   { id: 3, price: 30, name: 'coca-cola' },
// ]
// let answerOnQuestion = prompt('Что вы хотите покушать?')
// let searchProduct = sweets.find(names => names.name === answerOnQuestion)
// if (searchProduct) {
//   alert(`Товар ${searchChocolate.name} стоит ${searchChocolate.price} рублей`)
// } else {
//   alert('Товар не был найден')
// }

// // // ==================   Задание 2   ======================================

// let enterCommand = prompt('Введите комманду!')
// if (enterCommand === 'All') {
//   sweets.forEach(all => alert(`Товар ${all.name} стоит ${all.price}`))
// }
// else if (enterCommand === 'Low price') {
//   sweets.filter((element) => {
//     return element.price < 15;
//   }).forEach(lows => alert(`Самый дешевый товар - это ${lows.name} стоит ${lows.price}`))
// }
// else if (enterCommand === 'High price') {
//   sweets.filter((element) => {
//     return element.price > 15;
//   }).forEach(highs => alert(`Самый дорогой товар - это ${highs.name} стоит ${highs.price}`))
// } else if (enterCommand === 'All low price'){
//   let isAllLowPrice = true
//   sweets.forEach((sweet) => {
//     if(sweet.price > 15 ){
//       isAllLowPrice = false
//     }
//   })
//   if(isAllLowPrice){
//     alert(`Все товары являются категорией Low Price`)
//   }
//   else{
//     alert('НЕ Все товары являются категорией Low Price')
//   }
// sweets.filter((element) => {
// element.price > 0 < 15 })

//  return 
// }
// else {
//   alert('Товар не найден')
// }
// // ==========================  Задание 3     ==================================================


// const sweets = [
//   { id: 1, price: 20, name: 'chocolate' },
//   { id: 2, price: 10, name: 'ice-cream' },
//   { id: 3, price: 30, name: 'coca-cola' },
// ]
// // map

// const newSweets = sweets.map((discount) => {
//  return `id: 1, price: ${Math.round(discount.price * 100 / 120)}, name: ${discount.name}`
// })
// console.log(newSweets)

// // цикл for

// for(i = 0; i < sweets.length; i++){
//   sweets[i].price =  Math.round(sweets[i].price * 100 /120)
//   console.log(sweets[i])
// }


// ============================   Задание 4  =======================================================


const sweets = [
  { id: 1, price: 20, name: 'chocolate' },
  { id: 2, price: 10, name: 'ice-cream' },
  { id: 3, price: 30, name: 'coca-cola' },
]
const giveDiscount = function(){

}

const giveDiscount = () => {

}

function giveDiscount(sweetsArray) {
  const discounts = prompt('Введиде скидку %')
  // const discounts = 10

  // Цикл for
  // if (Number(discounts)) {
  //   for (i = 0; i < sweets.length; i++) {
  //     sweets[i].price = Math.round((sweets[i].price) - (sweets[i].price * `${discounts}`/ 100 ))
  //     console.log(sweets[i])

  // map
  if (Number(discounts)) {

    const newSweetsArray = sweetsArray.map((sweet) => {
      sweet.price = (sweet.price) - (sweet.price * `${discounts}` / 100)
      return sweet
    })
    // for (let i = 0; i < newSweetsArray.length; i++) {
    //   alert(`Продукт ${newSweetsArray[i].name} стоит со скидкой ${newSweetsArray[i].price} рублей`)
    // }
    newSweetsArray.forEach((sweet, sweetIndex) => {
      alert(`Продукт ${sweet.name} стоит со скидкой ${sweet.price} рублей`)
      alert(sweetIndex)
    })
    let newSweetsLowPrice = newSweetsArray.filter((sweet) => {
      return sweet.price > 8
    })
    newSweetsLowPrice.forEach((sweet) =>{
      alert(`${sweet.name}`)
    })
    
    return newSweetsArray
  }
  else {
    console.log('Неправильный формат скидки')
  }
  return
}
console.log(giveDiscount(sweets))


//=======================  Задание 5   =================================

// const numbers1 = [14, 1234, -5, 100];
// const numbers2 = [234, 12, 1234, 5, 23];
// const numbers3 = [-1, -4, 0, 1, 2, 5, -100];

// spread

//  function findMinimalNumbers(numbers){
//  return Math.min(...numbers)
//  }

//  const findMinimalNumbers = function (numbers) {
//   return Math.min(...numbers)
//  }

//  const findMinimalNumbers = ((numbers) => {return Math.min(...numbers)})

// function findMinimalNumbers(numbers){

//   for(i = 0; i < numbers.length; i++){
//    return (Math.min(...numbers))
//   }
//   return 
//    }

// console.log(findMinimalNumbers(numbers1))
// console.log(findMinimalNumbers(numbers2))
// console.log(findMinimalNumbers(numbers3))

//========================= Задание 6  =====================================

// const matrix = [
//   [14, 1234, -5, 100],
//   [234, 12, 1234, 5, 23],
//   [-1, -4, 0, 1, 2, 15, -100],
//  ];
 
// for(let i = 0; i < matrix.length; i++){
//   for(let y = 0; y < matrix[i].length; y++){
//     console.log(i,y)
// }
// }

// ====================================  Задание 7   ===========================================

const matrix = [
  [14, 1234, -5, 100],
  [234, 12, 1234, 5, 23],
  [-1, -4, 0, 1, 2, 15, -100],
 ];
 
 const matrix2 = [
  [75, 45, 2, -5, 12],
  [43, 100, 101, 102, 0, 0.5],
  [6, 1, 234, 50, 21],
 ]

 const matrix3 = [
  [75, 45, 2, -5555, 12],
  [43, 100, 101, 102, 0, 0.5],
  [6, -1, 234, 50, 21],
 ] 
 function getSumOfLowNumbersInMatrix (min){
  for(let i = 0; i < min.length; i++){ 
    console.log(Math.min.apply(null, min[i]))
}
return
 }
  getSumOfLowNumbersInMatrix(matrix3)

