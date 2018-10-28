// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // findOneAndUpdate
   /* db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bbe3ea57f657db3674fcf9b')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })*/

   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5bbc9b764dc0440844b49765')
   }, {
       $set: {
           name: 'Tajib'
       },
       $inc: {
           age: 1
       }
   }, {
       returnOriginal: false
   }).then((result) => {
       console.log(result)
   })

    // db.close()
})