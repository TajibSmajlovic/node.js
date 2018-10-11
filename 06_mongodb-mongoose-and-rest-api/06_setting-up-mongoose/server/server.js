let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp').then(() => {
    console.log('Server is up!')
}, (err) => {
    console.log('Unable to connect', err)
})

let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
})

/*let newTodo = new Todo({
    text: 'Cook dinner'
})

newTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (err) => {
    console.log('Unable to save todo', err)
})*/

let otherTodo = new Todo({
    text: 'Practice JavaScript',
    completed: false,
    completedAt: 123
})

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (err) => {
    console.log('Unable to save todo', err)
})