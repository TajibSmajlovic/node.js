console.log('Starting app.')

const fs = require('fs')
const os = require('os')

var user = os.userInfo()

fs.appendFile('greetings.txt', `Hello ${user.username}`, (err) => {
    if (err) {
        console.log('Unable to write the file')
    }
})

console.log('Starting app.')
fs.appendFileSync('greetings2.txt', `Hello ${user.username}`)
