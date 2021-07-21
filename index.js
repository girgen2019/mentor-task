// ====================    Задание 2      ====================================

const sweets = [
    { id: 1, price: 20, name: 'chocolate' },
    { id: 2, price: 10, name: 'ice-cream' },
    { id: 3, price: 30, name: 'coca-cola' },
 ]
        let productAll = {}
        sweets.forEach(function(product){
         productAll[product.name] = product.price})
       
        let lowPrice = sweets.filter(sweet => {
            return (sweet.price < 15)})
        
        let highPrice = sweets.filter(sweet => {
            return (sweet.price > 15)})
       
 
        
        function askToSelectTheSweet(){
        let answerOnQuestion = prompt('Что вы хотите покушать?')
        if(answerOnQuestion == "All"){
        console.log(productAll)
        }else if(answerOnQuestion == "Low price"){
        console.log(lowPrice)
        }else if (answerOnQuestion == "High price"){
         console.log(highPrice)
         }
                                           
 }
 console.log(askToSelectTheSweet())
 