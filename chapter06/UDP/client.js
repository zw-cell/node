var dgram = require('dgram');
var str = '客户端说:你今天吃了什么？';
var mess = new Buffer.from(str);
var socket = dgram.createSocket('udp4');
socket.send(mess, 0, mess.length, 8888, '127.0.0.1', function(err, bytes) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('发送了' + bytes + '比特的信息');
})
socket.on('message', function(msg, rinfo) {
    console.log(msg.toString());
    console.log(rinfo);
})