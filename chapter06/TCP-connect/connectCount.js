var net = require('net');
var server = net.createServer(function(socket) {
    console.log('someone connects');
    server.maxConnections = 3;
    server.getConnections(function(err, count) {
        console.log('当前连接的客户端数量为：' + count);

    })
})
server.listen(3000, function() {
    console.log('3000端口被监听');
})