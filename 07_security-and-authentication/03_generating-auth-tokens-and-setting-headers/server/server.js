require('./config/config')

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')

let {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

let app = express()
const port = process.env.PORT

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
    let id = req.params.id

    if (!ObjectID.isValid(id)) res.status(404).send('ID not valid.')

    Todo.findByIdAndRemove(id).then((todo) => {

        todo ? res.status(200).send({todo}) : res.status(404).send()

    }).catch((err) => res.status(400).send())
})

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id
    let body = _.pick(req.body, ['text', 'completed'])

    if (!ObjectID.isValid(id)) res.status(404).send('ID not valid.')

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime()
    } else {
        body.completed = false
        body.completedAt = null
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send
        }

        res.send({todo})
    }).catch((e) => res.status(400).send())
})

app.post('/users', (req, res) => {
    let body = _.pick(req.body, ['email', 'password'])
    let user = new User(body)

    user.save().then(() => {
        return user.generateAuthToken()
    }).then((token) => {
        res.header('x-auth', token).send(user)
    }).catch((e) => res.status(400).send(e))
})

/*app.get('/users/me', (req, res) => {
    let token = req.header('x-auth')

    User.findbyToken(token)
})*/

app.listen(port, () => {
    console.log(`Started up at port ${port}`)
})

module.exports = {app}