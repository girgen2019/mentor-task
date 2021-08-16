const userSpentToday = Number(prompt('Введите сумму в $').trim())
let discount = null
if (userSpentToday > 1 && userSpentToday < 50) {
    discount = 0 
    alert('Ваш discount составляет 0%')
    priceWithDiscount = ((userSpentToday) - ((discount * userSpentToday) / 100))
    alert(`Сумма к оплате со скидкой ${priceWithDiscount}, $`)
} else if (userSpentToday > 50 && userSpentToday < 100) {
    discount = 10
    alert('Ваш discount составляет 10%')
    priceWithDiscount = ((userSpentToday) - ((discount * userSpentToday) / 100))
    alert(`Сумма к оплате со скидкой ${priceWithDiscount}, $`)
} else if (userSpentToday > 100 && userSpentToday < 200) {
    discount = 20
    alert('Ваш discount составляет 20%')
    priceWithDiscount = ((userSpentToday) - ((discount * userSpentToday) / 100))
    alert(`Сумма к оплате со скидкой ${priceWithDiscount}, $`)
} else if (userSpentToday > 200) {
    discount = 30
    alert('Ваш discount составляет 30%')
    priceWithDiscount = ((userSpentToday) - ((discount * userSpentToday) / 100))
    alert(`Сумма к оплате со скидкой ${priceWithDiscount}, $`)
} else if (userSpentToday != typeof Number && userSpentToday < 1 ) {
    alert('Введите верное значение потраченной суммы')
}
// alert(userSpentToday)