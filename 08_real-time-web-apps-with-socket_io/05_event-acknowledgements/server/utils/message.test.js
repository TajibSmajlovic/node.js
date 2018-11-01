let expect = require('expect')

let {generateMessage} = require('./message')

describe('generateMessage', () => {
    it('should ', () => {
        let from = 'Tajib'
        let text = 'Proba proba'
        let message = generateMessage(from, text)

        expect(message.createdAt).toBeA('number')
        expect(message).toInclude({from, text,})
    });
})