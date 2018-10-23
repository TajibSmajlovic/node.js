let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true }).then(() => {
    console.log('Server is up!')
}, (err) => {
    console.log('Unable to connect', err)
})

module.exports = { mongoose }