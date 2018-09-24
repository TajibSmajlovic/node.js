const request = require('request')

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/517cb35b84ac5a81ee9106743dbf9755/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else  {
            callback('Unable to fetch weather')
        }
    })
}

module.exports.getWeather = getWeather