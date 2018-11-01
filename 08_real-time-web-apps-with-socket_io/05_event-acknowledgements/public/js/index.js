let socket = io()

socket.on('connect', function () {
    console.log('Connected to the server')
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
    console.log('Got new message: ', message)
})

socket.emit('createMessage', {
    from: 'Tajib',
    text: 'Ćao'
}, function (data) {
    console.log('It is OK. ', data)
})