console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')

// console.log(_.isString(true))
// console.log(_.isString('Tajib'))
var filteredArray = _.uniq(['Tajib', 1, 'Tajib', 1,2 , 3, 4])
console.log(filteredArray)

/*var res = notes.addFunc()
console.log(res)

var result = notes.add(16, 98)
console.log(result)*/

/*var user = os.userInfo()

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
    if (err) {
        console.log('Unable to write the file')
    }
})*/
