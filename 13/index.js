const prices = [59, 12, 20, 5, 2, 100];
const discount = prompt("Введите скидку", 20)
if (discount > 1 && discount < 50) {
    let pricesWithDiscount = prices.map((number) => {
        alert(Math.round(number - (number * discount) / 100))
    })
} else if (discount === 'string') {
    alert('Неправильный формат скидки')
} else {
    alert('Неправильный формат скидки')
}




