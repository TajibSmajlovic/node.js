let express = require('express')
let bodyParser = require('body-parser')

let {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

let app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})

app.listen(3000, () => {
    console.log('Started on port 3000')
})

module.exports = {app}