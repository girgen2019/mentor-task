// function getSumInRage(from = 0, to = 50){
//     let sumInterval = 0
//     for( from = 0; from <= to; from++){
//         sumInterval+=from
//     }
// return sumInterval
// }
// console.log(getSumInRage(0,50))

// const getSumInRage = (from = 0, to = 50) => {
//     let sumInterval = 0
//     for (from = 0; from <= to; from++) {
//         sumInterval += from
//     }
//     return sumInterval
// }
// console.log(getSumInRage())

const getSumInRage = function(from = 0, to = 50){
    let sumInterval = 0
    for( from = 0; from <= to; from++){
        sumInterval+=from
    }
return sumInterval
}
console.log(getSumInRage())
