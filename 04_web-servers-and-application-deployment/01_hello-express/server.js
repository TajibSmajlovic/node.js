const express = require('express')

var app = express()

app.get('/', (req, res) => {
    // res.send('<h1> Hello Express <h2>')
    res.send({
        name: 'Tajib',
        likes: [
            'Biking',
            'Cities'
        ]
    })
})

app.get('/about', (req, res) => {
    res.send('Hello Page')
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    })
})

app.listen(3000)