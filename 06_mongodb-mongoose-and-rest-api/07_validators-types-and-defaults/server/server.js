let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp').then(() => {
    console.log('Server is up!')
}, (err) => {
    console.log('Unable to connect', err)
})

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

/*let otherTodo = new Todo({
    text: '   Learn something new   '
})

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (err) => {
    console.log('Unable to save todo', err)
})*/

let User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        type: String,
        minlength: 1
    }
})

let newUser = new User({
    email: 'abc@123.com'
})

newUser.save().then((doc) =>{
    console.log('User saved', doc)
}, (err) => {
    console.log('Unable to save user', err)
})