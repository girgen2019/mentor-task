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

// function getMax(a){
//   return Math.max(...a.map(e => Array.isArray(e) ? getMax(e) : e));
// }

// var arr = [[1,  37.8, 80.8, 41.8],
//            [2,  30.9, 69.5, 32.4],
//            [3,  25.4,   57, 25.7],
//            [4,  11.7, 18.8, 10.5],
//            [5,  11.9, 17.6, 10.4],
//            [6,   8.8, 13.6,  7.7],
//            [7,   7.6, 12.3,  9.6],
//            [8,  12.3, 29.2, 10.6],
//            [9,  16.9, 42.9, 14.8],
//            [10, 12.8, 30.9, 11.6],
//            [11,  5.3,  [6.1,[56.7,[98.55]]],  4.7],
//            [12,  6.6,  8.4,  5.2],
//            [13,  4.8,  6.3,  3.6],
//            [14,  4.2,  6.2,  3.4]];
//  console.log(getMax(arr));
