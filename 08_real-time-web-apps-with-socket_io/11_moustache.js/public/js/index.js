let socket = io()

socket.on('connect', function () {
    console.log('Connected to the server')
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
    let formattedTime = moment(message.createdAt).format('h:mm a')
    let template = jQuery('#message-template').html()
    let html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formattedTime
    })

    jQuery('#messages').append(html)
})

socket.on('newLocationMessage', function (message) {
    let formattedTime = moment(message.createdAt).format('h:mm a')
    let template = jQuery('#location-message-template').html()
    let html = Mustache.render(template, {
        from: message.from,
        url: message.url,
        createdAt: formattedTime
    })

    jQuery('#messages').append(html)
})

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault()

    let messageTexbox = jQuery('[name=message]')

    socket.emit('createMessage', {
        from: 'User',
        text: messageTexbox.val()
    }, function () {
        messageTexbox.val('')
    })
})

let locationButton = jQuery('#send-location')
locationButton.on('click', function () {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser.')
    }

    locationButton.attr('disabled', 'disabled').text('Sending location...')

    navigator.geolocation.getCurrentPosition(function (position) {
        locationButton.removeAttr('disabled').text('Send location')
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }, function () {
        alert('Unable to fetch location.')
        locationButton.removeAttr('disabled').text('Send location')
    })
})