const informationForMy = {
    firsName: 'Гена',
    lastName: 'Гирилович',
    myAge: 30,
    myTechnologys: 'HTML, CSS, Java Script',
    myAims: 'Стать web - разработчиком',
}

informationForMy.firsName = informationForMy.firsName.toUpperCase()
informationForMy.lastName = informationForMy.lastName.toLocaleUpperCase()
informationForMy.myTechnologys = informationForMy.myTechnologys.toLocaleUpperCase()
informationForMy.myAims = informationForMy.myAims.toLocaleUpperCase()

const text = `Привет! Меня зовут ${informationForMy.firsName} ${informationForMy.lastName}. Мне на данный момент ${informationForMy.myAge} лет.\n Я занимаюсь веб-разработкой и моя цель ${informationForMy.myAims}.\n Я хочу достичь ее в этом 2021 году.\n На данный момент я работаю с технологиями ${informationForMy.myTechnologys}  и в скором времени буду знать на хорошем уровне.`
const newText = text.split('.').join('!')
console.log(newText)

