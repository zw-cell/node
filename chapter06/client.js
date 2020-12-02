const net = require('net');
const client = net.createConnection({
    port:8000
});
client.on('connect',function(){
    console.log('客户端连接成功');
    client.write('client say: what do you eat?');
})
client.on('data',function(data){
    console.log(data.toString());
})