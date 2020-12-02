const request = require("request");
const qs = require("querystring");
var ip = '42.227.160.255';

function ip2geo(ip, callback) {
    var url = 'http://ip-api.com/json/' + ip + '?lang=zh-CN';
    request({
        url: url,
        json: true
    }, function(err, resp, body) {
        if (!err) {
            callback(body);
        }
    })
}

function geo2weather(lat, lon, callback) {
    var params = {
        lat: lat,
        lon: lon,
        APPID: '40c69a2db75089c5ddf65e9e6e292a7e'
    }
    var url = 'http://api.openweathermap.org/data/2.5/weather?' + qs.stringify(params);
    request({
        url: url,
        json: true
    }, function(err, res, body) {
        callback(err, body);
    });
}

function output(weather) {
    console.log('国家：' + weather.geo.country);
    console.log("城市：" + weather.geo.city);
    console.log("IP地址：" + weather.geo.query);
    console.log("天气：" + weather.weather[0].main);
}
ip2geo(ip, function(geo) {
    geo2weather(geo.lat, geo.lon, function(err, weather) {
        if (!err) {
            weather.geo = geo;
            output(weather)
        }
    })
})