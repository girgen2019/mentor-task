const sweets = [
    { id: 1, price: 20, name: 'chocolate' },
    { id: 2, price: 10, name: 'ice-cream' },
    { id: 3, price: 30, name: 'coca-cola' },
]
let answerOnQuestion = prompt('Что вы хотите покушать?')

// //=========================    Find    =================================

function askToSelectTheSweetFind(){
        let result = sweets.find(answerOnQuestion => answerOnQuestion.name == 'coca-cola') 
        return result 
}
 console.log(askToSelectTheSweetFind())
 
// //=========================    FindIndex    =================================

function askToSelectTheSweetFindIndex(){
        let resultIndex = sweets.findIndex(answerOnQuestion => answerOnQuestion.name == 'coca-cola') 
        return resultIndex 
}
 console.log(askToSelectTheSweetFindIndex())
 
 
//=========================    for    =================================
 
 
 function askToSelectTheSweet(){
           for( i = 2; i < sweets.length; i++){
                   console.log(answerOnQuestion)
           }
   }
   console.log(askToSelectTheSweet())