const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

/*let id = '5bc1d0b62c0fbae401e491f911'

if (!ObjectID.isValid(id)) {
    console.log('ID not valid')
}*/

/*Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos)
})

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
})*/

/*Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('ID not found')
    }
    console.log('Todo by Id', todo)
}).catch((err) => console.log(err))*/

let userID = '5bbf4a831d59e1881fb9b25d'

User.findById(userID).then((user) => {
    if (!user) {
        return console.log('User not found.')
    }

    console.log(JSON.stringify(user, undefined, 2))
}, (err) => console.log(err))