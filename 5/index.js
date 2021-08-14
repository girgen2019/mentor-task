const student = {
    firsName: 'Гена',
    lastName: 'Гирилович',
    myAge: 30,
    myTechnologys: 'HTML, CSS, Java Script',
    myAims: 'Стать web - разработчиком',
}

// student.firsName = student.firsName.toUpperCase()
// student.lastName = student.lastName.toLocaleUpperCase()
// student.myTechnologys = student.myTechnologys.toLocaleUpperCase()
// student.myAims = student.myAims.toLocaleUpperCase()

const text =(`Привет! Меня зовут ${student.firsName.toUpperCase()} ${student.lastName.toUpperCase()}. Мне на данный момент ${student.myAge} лет.\n Я занимаюсь веб-разработкой и моя цель ${student.myAims.toUpperCase()}.\n Я хочу достичь ее в этом 2021 году.\n На данный момент я работаю с технологиями ${student.myTechnologys.toUpperCase()}  и в скором времени буду знать на хорошем уровне.`)
// const newText = text.split('.').join('!')
alert(text.replaceAll('.','!'))

