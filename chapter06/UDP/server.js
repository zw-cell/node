var dgram = require('dgram');
var str = '服务器说:我今天吃了大豆包';
var mess = new Buffer.from(str);
var socket = dgram.createSocket('udp4', function(msg, rinfo) {
    console.log(msg.toString());
    console.log(rinfo);
    socket.send(mess, 0, mess.length, rinfo.port, rinfo.address, function(err, bytes) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('发送了' + bytes + '比特的信息');
    })
});
socket.bind(8888, '127.0.0.1', function() {
    console.log('8888端口被监听');
})