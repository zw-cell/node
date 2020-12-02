var net = require('net');
var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        console.log(data.toString());
    })
})
server.on('connection', function(socket) {
    var address = socket.address();
    console.log('地址：' + address.address + '端口：' + address.port + 'IPv4/IPv6：' + address.family);
})
server.listen(3000, function() {
    console.log('3000端口被监听');

})