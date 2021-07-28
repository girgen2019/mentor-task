sweets = [
    { id: 1, price: 20, name: 'chocolate' },
    { id: 2, price: 10, name: 'ice-cream' },
    { id: 3, price: 30, name: 'coca-cola' },
  ]
  let enterCommand = 'All low price'
  if (enterCommand === 'All') {
    sweets.forEach(all => console.log(`Товар ${all.name} стоит ${all.price}`))
  }
  else if (enterCommand === 'Low price') {
    sweets.filter((element) => {
      return element.price < 15;
    }).forEach(lows => console.log(`Самый дешевый товар - это ${lows.name} стоит ${lows.price}`))
  }
  else if (enterCommand === 'High price') {
    sweets.filter((element) => {
      return element.price > 15;
    }).forEach(highs => console.log(`Самый дорогой товар - это ${highs.name} стоит ${highs.price}`))
  } else if (enterCommand === 'All low price'){
  sweets.filter((element) => {
  element.price > 0 < 15 })
   console.log(`Low Price продукты есть в наличии`)
   return 
  }
  else {
    console.log('Товар не найден')
  }