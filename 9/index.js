function getSumInRage(from, to){
    let sumInterval = 0
    for( from = 0; from <= to; from++){
        sumInterval+=from
    }
return sumInterval
}
console.log(getSumInRage(1,6))