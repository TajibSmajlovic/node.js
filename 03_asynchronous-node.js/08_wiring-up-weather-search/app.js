/*const yargs = require('yargs')

const geocode = require('./geocode/geocode.js')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(results, undefined, 2))
    }
})*/

//  517cb35b84ac5a81ee9106743dbf9755

const request = require('request')

request({
    url: `https://api.darksky.net/forecast/517cb35b84ac5a81ee9106743dbf9755/39.9396284,-75.18663959999999`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature)
    } else  {
        console.log('Unable to fetch weather')
    }
})