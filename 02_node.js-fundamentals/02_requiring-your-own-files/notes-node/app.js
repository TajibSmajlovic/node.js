console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

var res = notes.addFunc()
console.log(res)

var result = notes.add(16, 98)
console.log(result)

/*var user = os.userInfo()

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
    if (err) {
        console.log('Unable to write the file')
    }
})*/
