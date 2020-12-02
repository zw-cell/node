var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    response.end('Hello World 20184103234 郑旺\n');
}).listen(8888);
console.log('Server running');