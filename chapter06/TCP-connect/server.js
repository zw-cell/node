var net = require('net');
var server = net.createServer(function(socket) {
    var mess = socket.address();
    console.log(server.address());
    console.log(mess);
    socket.write('服务端说：我吃了大豆包');
    socket.on('data', function(data) {
        console.log(data.toString());
    })
});
server.listen(3000, function() {
    console.log('3000端口被监听');
});