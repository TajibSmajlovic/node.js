const expect = require('expect')

const utils = require('./utils')

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers',  () => {
            var res = utils.add(33, 11)

            expect(res).toBe(44).toBeA('number')
        });
    })

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number')
            done()
        })
    });

    it('should square a number', function () {
        var res = utils.square(5)

        expect(res).toBe(25).toBeA('number')
    });

    it('should async square a number', (done) =>  {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number')
            done()
        })
    });
})

it('should verify first and last names are set', () => {
    var user = {location: 'Visoko', age:25}
    var res = utils.setName(user, 'Tajib Smajlovic')

    expect(res).toInclude({
        firstName: 'Tajib',
        lastName: 'Smajlovic'
    })
})