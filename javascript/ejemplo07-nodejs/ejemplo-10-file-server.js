var http = require('http');
var fs = require('fs');
var server = http.createServer(enviarImagen);
function enviarImagen(request, response){
    response.writeHead(200, {'content-type':'image/jpg'});
    fs.createReadStream("imagen.jpg").pipe(response);
}
server.listen(8888);