const net = require('net');
const server = net.createServer();
server.on('connection',function(socket){
    console.log('服务器成功连接');
    socket.write('server say:I eat big steamed bun stuffed with sweetened bean paste');
    socket.on('data',function(data){
        console.log(data.toString());
    })
});
server.listen(8000,'127.0.0.1');
server.on('listening',function(){
    console.log('8000端口被监听');
})