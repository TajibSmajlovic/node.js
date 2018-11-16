const expect = require('expect')

const {Users} = require('./users')

describe('Users', () => {
    let users

    beforeEach(() => {
        users = new Users()
        users.users = [{
            id: '1',
            name: 'Tajib',
            room: 'Room 1'
        }, {
            id: '2',
            name: 'Hasan',
            room: 'Room 2'
        }, {
            id: '3',
            name: 'Hamza',
            room: 'Room 1'
        }]
    })

    it('should add new user', () => {
        let users = new Users()
        let user = {
            id: '1563165',
            name: 'Tajib',
            room: 'Lamperija'
        }
        let resUser = users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([user])
    });

    it('should remove a user', () => {
        let userID = '1'
        let user = users.removeUser(userID)

        expect(user.id).toBe(userID)
        expect(users.users.length).toBe(2)
    });
    it('should not remove a user', () => {
        let userID = '57'
        let user = users.removeUser(userID)

        expect(user).toNotExist()
        expect(users.users.length).toBe(3)
    });

    it('should find a user', () => {
        let userID = '1'
        let user = users.getUser(userID)

        expect(user.id).toBe(userID)
    });
    it('should not find a user', () => {
        let userID = '38'
        let user = users.getUser(userID)

        expect(user).toNotExist()
    });

    it('should return names for Room 1', () => {
        let userList = users.getUserList('Room 1')

        expect(userList).toEqual(['Tajib', 'Hamza'])
    });
    it('should return names for Room 2', () => {
        let userList = users.getUserList('Room 2')

        expect(userList).toEqual(['Hasan'])
    });
})