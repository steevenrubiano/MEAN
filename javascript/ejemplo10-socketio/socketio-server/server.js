var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//io.origins('*:*');
io.origins('http://localhost:4200');
//Por defecto tenemos ya namespace
//http://localhost:3000/socket.io
io.on('connection', (socket)=>{
    console.log('Cliente conectado!!');
    io.on('mando-un-mensaje', (mensaje)=>{
        console.log('Mensaje recibido: ' + mensaje);
        socket.emit('mando-un-mensaje', mensaje); //YO!!
        io.emit('mando-un-mensaje', mensaje); //TODOS!!
        socket.broadcast.emit('mando-un-mensaje', mensaje); //TODOS MENOS YO!!
    });
});
io.on('disconnect', (socket)=>{
    console.log('Cliente desconectado!!');
});