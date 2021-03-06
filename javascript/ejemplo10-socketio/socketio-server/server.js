var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var sockets = [];
//io.origins('*:*');
io.origins('http://localhost:4200');
//Por defecto tenemos ya namespace
//http://localhost:3000/chat/socket.io
var chat = io.of('/chat');
chat.on('connection', (socket)=>{
    console.log('Cliente conectado!!');
    sockets.push(socket);
    socket.on('mando-un-mensaje', (mensaje)=>{
        console.log('Mensaje recibido: ', mensaje);
        mensaje.user = socket.id;
        if(sockets.length > 3){
            sockets[3].emit('mando-un-mensaje', {user:"tu mismo", content:"Que pasa"});
        }
        socket.emit('mando-un-mensaje', mensaje); //YO!!
        //chat.emit('mando-un-mensaje', mensaje); //TODOS!!
        //socket.broadcast.emit('mando-un-mensaje', mensaje); //TODOS MENOS YO!!
    });
});
chat.on('disconnect', (socket)=>{
    console.log('Cliente desconectado!!');
});
http.listen(3000, ()=>{
    console.log('Iniciado en *: 3000')
});

/*io.on('connection', (socket)=>{
    console.log('Cliente conectado!!');
    sockets.push(socket);
    socket.on('mando-un-mensaje', (mensaje)=>{
        console.log('Mensaje recibido: ', mensaje);
        mensaje.user = socket.id;
        if(sockets.length > 3){
            sockets[3].emit('mando-un-mensaje', {user:"tu mismo", content:"Que pasa"});
        }
        socket.emit('mando-un-mensaje', mensaje); //YO!!
        //io.emit('mando-un-mensaje', mensaje); //TODOS!!
        //socket.broadcast.emit('mando-un-mensaje', mensaje); //TODOS MENOS YO!!
    });
});
io.on('disconnect', (socket)=>{
    console.log('Cliente desconectado!!');
});
http.listen(3000, ()=>{
    console.log('Iniciado en *: 3000')
});*/
