var net = require('net');
var client = new net.Socket();
client.connect(3000, '127.0.0.1', function(socket) {
    client.write('客户端说：你今天吃饭了吗？');
});
client.on('data', function(data) {
    console.log(data.toString());
})