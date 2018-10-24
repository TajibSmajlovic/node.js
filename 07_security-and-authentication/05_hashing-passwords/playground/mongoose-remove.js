const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')


/*Todo.remove({}).then((res) => {
    console.log(res)
})*/

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

/*Todo.findOneAndRemove({text: 'Find one and remove'}).then((todo) => {
    console.log(todo)
})*/

/*Todo.findByIdAndRemove('5bc58f826b13b27a9137f727').then((todo) => {
    console.log(todo)
})*/
