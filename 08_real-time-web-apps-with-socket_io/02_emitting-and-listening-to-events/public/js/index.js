let socket = io()

socket.on('connect', function () {
    console.log('Connected to the server')

    socket.emit('createMessage', {
        from: 'test',
        text: 'Proba proba test test'
    })
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
    console.log('Got new message: ', message)
})