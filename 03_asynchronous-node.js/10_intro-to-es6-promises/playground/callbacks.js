var getUser = (id, callback) => {
    var user = {
        id,
        name: 'Tajib'
    }

    setTimeout(() => {
        callback(user)
    }, 3000)
}

getUser(31295, (userObject) => {
    console.log(userObject)
})