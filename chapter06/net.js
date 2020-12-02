const net = require('net')
const server = net.createServer();
server.on('connection',function(){
    console.log('服务器已连接');
})
server.listen(3000,'10.112.7.221');
server.on('listening',function(){
    console.log('端口被监听');
})