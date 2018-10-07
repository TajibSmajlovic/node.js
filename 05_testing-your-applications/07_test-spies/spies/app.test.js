const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db)

    it('should call the spy corectly', () => {
        var spy = expect.createSpy()
        spy('Tajib', 23)
        expect(spy).toHaveBeenCalledWith('Tajib', 23)
    });

    it('should call saveUser with user object', () => {
        var email = 'tajib@smajlovic.com'
        var password = '123abc'

        app.handleSignup(email, password)
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    });
})