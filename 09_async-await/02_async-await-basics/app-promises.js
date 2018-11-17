const users = [{
    id: 1,
    name: 'Tajib',
    schooldID: 140302097
}, {
    id: 2,
    name: 'Hasan',
    schooldID: 15022002
}]

const grades = [{
    id: 1,
    schooldID: 140302097,
    grade: 84
}, {
    id: 2,
    schooldID: 15022002,
    grade: 99
}, {
    id: 3,
    schooldID: 140302097,
    grade: 89
}]

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id)

        if (user) {
            resolve(user)
        } else {
            reject(`Unable to find user with id of ${id}.`)
        }
    })
}

const getGrades = (schoolID) => {
    return new Promise((resolve, reject)=> {
        resolve(grades.filter((grade) => grade.schooldID === schoolID))
    })
}

const getStatus = (userID) => {
    let user

    return getUser(userID).then((tempUser) => {
        user = tempUser
        return getGrades(user.schooldID)
    }).then((grades) => {
        let average = 0

        if (grades.length > 0) {
            average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length
        }

        return `${user.name} has a ${average} in the class.`
    })
}

const getStatusAlt = async (userID) => {
    const user = await getUser(userID)
    const grades = await getGrades(user.schooldID)

    let average = 0

    if (grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length
    }

    return `${user.name} has a ${average} in the class.`
}

getStatusAlt(1).then((status) => {
    console.log(status)
}).catch((e) => {
    console.log(e)
})

/*getUser(1).then((user) => {
    console.log(user)
}).catch((e) => {
    console.log(e)
})

getGrades(15022002).then((grade) => {
    console.log(grade)
}).catch((e) => {
    console.log(e)
})

getStatus(1).then((status) => {
    console.log(status)
}).catch((e) => {
    console.log(e)
})*/
