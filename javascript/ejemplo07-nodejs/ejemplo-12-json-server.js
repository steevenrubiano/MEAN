var http = require('http');
var url = ('url');
var server = http.createServer((request, response)=>{
    var miUrl = url.parse(request.url, true);
    console.log('URL: ', miUrl);
    if("clientes" == miUrl){
        response.writeHead(200, "application/json");
        response.end(JSON.stringify({"nombre":"Jonathan"}));
    }
    else{
        response.writeHead(501);
        response.end();
    }
});
server.listen(8080);
console.log("Servidor iniciado");