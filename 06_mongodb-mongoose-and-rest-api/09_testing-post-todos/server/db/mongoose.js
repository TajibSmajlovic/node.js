let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp').then(() => {
    console.log('Server is up!')
}, (err) => {
    console.log('Unable to connect', err)
})

module.exports = { mongoose}