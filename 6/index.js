const studentName = prompt('Введите ваше имя…', 'Gena')

function namePrompt() {
    if (studentName) {
        alert(studentName.toUpperCase().trim(''))
    } else if (studentName === null || studentName === '') {
        alert('Имя не должно быть пустым')
    }
    return
}
namePrompt(studentName)