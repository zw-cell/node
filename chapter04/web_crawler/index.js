// index.js
const request = require('request');
const path = require('path');
const config = require('./config.js');
const analyze = require('./analyze.js');
const fs = require('fs');

function start() {
    request(config.url, function(err, res, body) {
        console.log('start');
        if (!err && res) {
            console.log('start');
            analyze.findImg(body, downLoad);
        }
    })
}

function downLoad(imgUrl, i) {
    let ext = imgUrl.split('.').pop();
    var url = imgUrl.slice(0, 4);
    if (ext == 'png' || ext == 'jpg' || ext == 'gif') {
        if (config.url.slice(0, 5) == 'https') {
            if (url !== 'http') {
                imgUrl = 'https:' + imgUrl;
            }
        } else {
            if (url !== 'http') {
                imgUrl = config.url + imgUrl;
            }
        }
        console.log(imgUrl);
        request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
            'encoding': 'utf8'
        }))
        console.log(i);
    }

}
start();