function getSumOfSquares(numbers, method) {
    if (method === 'for') {
        let sumFor = 0
        for (let i = 0; i < numbers.length; i++) {
            sumFor += numbers[i] ** 2
        }
        return sumFor

    } else if (method === 'forEach') {
        let sumForEach = 0
        numbers.forEach((item) => {
            sumForEach += item ** 2
        })   
        return sumForEach

    }

    else if (method === 'reduce') {
        let sumReduce = numbers.reduce(function(sum, elem) {
            	return sum + (elem**2);
            }, 0);
        return sumReduce
    }
    return 0
}


console.log(getSumOfSquares([100, 200, 300], 'forEach'))
