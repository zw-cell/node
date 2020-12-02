const http = require('http');
const server = http.createServer(function(req, res) {
    let data = '';
    req.on('data', function(chunk) {
        data += chunk;
    });
    req.on('end', function() {
        let method = req.method;
        let url = req.url;
        let headers = JSON.stringify(req.headers);
        let httpVersion = req.httpVersion;
        let methodHtml = '<p>method:' + method + '</p>';
        let urlHtml = '<p>url:' + url + '</p>';
        let headersHtml = '<p>headers:' + headers + '</p>';
        let httpVersionHtml = '<p>httpVersion:' + httpVersion + '</p>';
        let resData = methodHtml + urlHtml + headersHtml + httpVersionHtml;
        res.end(resData);
    })
});
server.listen(3000, function() {
    console.log('Listening port 3000');
});