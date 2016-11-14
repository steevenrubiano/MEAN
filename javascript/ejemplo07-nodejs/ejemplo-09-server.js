var net = require('net');
var server = net.createServer(miSocket);
function miSocket(socket){
    socket.end("Hola caracola!!!\n");
}
server.listen(8888);
console.log("Servidor iniciado en el puerto 8888"); //Activar comando telnet si no lo tienes
//ejecutar comando en cmd --> telnet localhost 8888