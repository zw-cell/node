var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    var params = url.parse(req.url, true).query;
    res.write("<form action=''>学号：<input type='text' name='id' value='" + params.id + "'> 姓名：<input type='text' name='name' value='" + params.name + "'> <input type='submit'></form><div>" + params.id + " " + params.name + "</div>");
    res.end();
}).listen(3000);
console.log('Sever running');