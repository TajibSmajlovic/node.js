let expect = require('expect')

let {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should ', () => {
        let from = 'Admin'
        let text = 'Proba proba'
        let message = generateMessage(from, text)

        expect(message.createdAt).toBeA('number')
        expect(message).toInclude({from, text,})
    });
})

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'Admin';
        let lat = 1
        let lon = 1
        let url = `https://www.google.com/maps?q=${lat},${lon}`
        let message = generateLocationMessage(from, lat, lon)

        expect(message.createdAt).toBeA('number')
        expect(message).toInclude({from, url})
    });
})