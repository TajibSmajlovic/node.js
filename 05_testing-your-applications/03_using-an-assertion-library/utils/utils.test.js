const expect = require('expect')

const utils = require('./utils')

it('should add two numbers',  () => {
    var res = utils.add(33, 11)

    expect(res).toBe(44).toBeA('number')
});

it('should square a number', function () {
    var res = utils.square(5)

    expect(res).toBe(25).toBeA('number')
});

it('should verify first and last names are set', () => {
    var user = {location: 'Visoko', age:25}
    var res = utils.setName(user, 'Tajib Smajlovic')

    expect(res).toInclude({
        firstName: 'Tajib',
        lastName: 'Smajlovic'
    })
})

/*it('should expect some values', () => {
    // expect(12).toNotBe(12)

   /!* expect({name: 'Tajib'}).toEqual({name: 'Tajib'})
    expect({name: 'tajib'}).toNotEqual({name: 'Tajib'})*!/

   /!*expect([2,3,4]).toInclude(1)
    expect([2,3,4]).toExclude(1)*!/

    expect({
        name: 'Tajib',
        age: 23,
        location: 'Visoko'
    }).toInclude({
        age: 23
    })
});*/