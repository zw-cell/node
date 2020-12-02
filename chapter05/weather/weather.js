const fs = require('fs');
const request = require('request');
const qs = require('querystring');

function readIP(path, callback) {
    fs.readFile(path, function(err, data) {
        if (err) {
            callback(err);
        } else {
            try {
                data = JSON.parse(data);
                callback(null, data);
            } catch {
                callback(error);
            }
        }
    })
}

function ip2geo(ip, callback) {
    var geos = [];
    var flag = ip.length;
    for (var i = 0; i < ip.length; i++) {
        var url = 'http://ip-api.com/json/' + ip[i] + '?lang=zh-CN';
        request({
            url: url,
            json: true
        }, function(err, res, body) {
            geos.push(body);
            flag--;
            if (flag == 0) {
                callback(geos);
            }
        });
    }


}

function geo2weather(lat, lon, callback) {
    var params = {
        lat: lat,
        lon: lon,
        APPID: 'b9819019459d206dc1374ad3733527b0'
    }
    var url = 'http://api.openweathermap.org/data/2.5/weather?' + qs.stringify(params);
    request({
        url: url,
        json: true
    }, function(err, res, body) {
        callback(err, body);
    });
}

function geos2weathers(geos, callback) {
    var weathers = [];
    var geo;
    var num = geos.length;
    for (var i = 0; i < geos.length; i++) {
        geo = geos[i];
        (function(geo) {
            geo2weather(geo.lat, geo.lon, function(err, weather) {
                if (err) {
                    callback(err);
                } else {
                    weather.geo = geo;
                    weathers.push(weather);
                    num--;
                }
                if (num == 0) {
                    callback(null, weathers);
                }
            })
        })(geo)
    }
}

function writeWeather(weathers, callback) {
    var output = [];
    var weather;
    for (var i = 0; i < weathers.length; i++) {
        weather = weathers[i];
        output.push({
            ip: weather.geo.query,
            weather: weather.weather[0].main,
            country: weather.geo.country,
            region: weather.geo.city
        })
    }
    fs.writeFile('./weather.json', JSON.stringify(output, null, ''), callback);
}
readIP('IP.json', function(err, data) {
    if (!err) {
        ip2geo(data, function(geos) {
            geos2weathers(geos, function(err, weathers) {
                writeWeather(weathers, function(err) {
                    if (!err) {
                        console.log('写入文件成功');
                    }
                });
            })
        })
    }
})