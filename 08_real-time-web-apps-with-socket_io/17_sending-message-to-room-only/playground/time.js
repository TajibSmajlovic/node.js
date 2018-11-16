let moment = require('moment')

let date = moment()
date.add(100, 'year').subtract(9, 'months')
console.log(date.format('MMM Do, YYYY'))

console.log(moment().format('h:mm'))

let someTimestamp = moment().valueOf()
console.log(someTimestamp)