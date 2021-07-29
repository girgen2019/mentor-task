// const sweets = [
//   { id: 1, price: 20, name: 'chocolate' },
//   { id: 2, price: 10, name: 'ice-cream' },
//   { id: 3, price: 30, name: 'coca-cola' },
// ]
// function giveDiscount(sweetsArray) {
//   const discounts = 50

//   if (Number(discounts)) {
//      let newSweetsArray = newSweets.map((sweet) => {
//       sweet.price = (sweet.price) - (sweet.price * `${discounts}` / 100)
//       return sweet
//     })
//   }
//   else {
//     console.log('Неправильный формат скидки')
//   }
//   return newSweetsArray
// }

// console.log(giveDiscount(sweets))


// const sweets = [
//   { id: 1, price: 20, name: 'chocolate' },
//   { id: 2, price: 10, name: 'ice-cream' },
//   { id: 3, price: 30, name: 'coca-cola' },
// ]



// function calculatePrice(sweetsArray){
//   const discounts = 10
//   let newSweetsArray = sweetsArray.map((sweet)=>{
//     sweet.price = (sweet.price) - (sweet.price * `${discounts}` / 100)
//     return sweet 
//   })
//   return newSweetsArray
// }

// console.log(calculatePrice(sweets))


// const initionalSrting = "Масяк"



// console.log(initionalSrting)


// const numbers1 = [14, 1234, -5, 100];
// const numbers2 = [234, 12, 1234, 5, 23];
// const numbers3 = [-1, -4, 0, 1, 2, 5, -100];

// // function findMinimalNumbers(numbers){
// // return Math.min(...numbers)
// // }

// // const findMinimalNumbers = function (numbers) {
// //   return Math.min(...numbers)
// // }

// // const findMinimalNumbers = ((numbers) => {return Math.min(...numbers)})

// function findMinimalNumbers(numbers){
  
//   for(i = 0; i < numbers.length; i++){
//    return (Math.min(...numbers))
//   }
//   return 
//    }

// console.log(findMinimalNumbers(numbers1))
// console.log(findMinimalNumbers(numbers2))
// console.log(findMinimalNumbers(numbers3))

const matrix = [
  [14, 1234, -5, 100],
  [234, 12, 1234, 5, 23],
  [-1, -4, 0, 1, 2, 15, -100],
 ];
 
for(i = 0; i < matrix.length; i++){
  // for(y = 0; y < matrix[i].length; y++){
    console.log(matrix[i][i])
  }


