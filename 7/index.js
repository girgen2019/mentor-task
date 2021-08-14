const userName = prompt('Введите имя','gena')
const userAge = Number(prompt('Введите количество полных лет',30))
const userBeginIndex = Number(prompt('Введите начальный индекс для обрезки строки'))
const userEndIndex = Number(prompt('Введите конечный индекс для обрезки строки'))
const text = `Вас зовут ${userName} и вам ${userAge} лет`

const newText = text.slice(`${userBeginIndex}`, `${userEndIndex}`).trim()
alert(newText)
