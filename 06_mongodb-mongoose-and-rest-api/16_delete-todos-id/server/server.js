let express = require('express')
let bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')

let {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

let app = express()
const port = process.env.PORT || 3000

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e)
    })
})

// GET /todos/12345
app.get('/todos/:id', (req, res) => {
    let id = req.params.id

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('ID not valid.')
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send('ID not found')
        }

        res.send({todo})
    }).catch((err) => res.status(400).send())
})

app.delete('/todos/:id', (req, res) => {
    // get the id
    let id = req.params.id

    // validate the id -> not valid? return 404
    if (!ObjectID.isValid(id)) res.status(404).send('ID not valid.')

    // remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {

        todo ? res.status(200).send(todo) : res.status(404).send()

    }).catch((err) => res.status(400).send())
})

app.listen(port, () => {
    console.log(`Started up at port ${port}`)
})

module.exports = {app}