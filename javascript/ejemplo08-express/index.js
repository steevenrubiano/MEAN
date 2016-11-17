var express = require("express");
var app = express();
function evaluaElVerboHttp(request,response){
    response.send("Ruta: " + request.originalUrl + 
    " Verbo :" + request.method)
}
app.get("/", (request,response)=>{
    console.log("Acceso a la peticion ",request);
    response.send("Respuesta recibida!");
});
app.post("/",evaluaElVerboHttp);
app.put("/",evaluaElVerboHttp);
app.delete("/",evaluaElVerboHttp);
app.all("/paratodos",evaluaElVerboHttp);
app.all("/iniciofin",evaluaElVerboHttp);
app.get("/clientes/:idCliente?*/facturas/:idFactura", (request,response)=>{
    response.send("Resultados : \n\tCliente: " + 
    request.params.idCliente + " \n\tFactura: " + 
    request.params.idFactura + "\n" +
    JSON.stringify(request.params));
});
app.get("/save/:fichero.:extension",(request,response)=>{
    response.send("Ahora genero un fichero de tipo : " + 
    request.params.extension);
});
function funcionIntermedia(request,response,next){
    console.log("Ejecutado a las: "  + new Date());
    next();
}
function funcionIntermediaFin(request,response,next){
    console.log("Ejecutado a las: "  + new Date());
        response.send("fin");
}
app.get("/concatenado",
    funcionIntermedia,
    funcionIntermediaFin,
    funcionIntermedia,
    (request,response)=>{
        response.send("Enviado");
    });
app.route('/rutaconjunta')
    .get(evaluaElVerboHttp)
    .post(evaluaElVerboHttp)
    .put(evaluaElVerboHttp)
    .delete(evaluaElVerboHttp);
var router = express.Router();
router.use(funcionIntermedia);
router.get('/conrouter', evaluaElVerboHttp);
router.post('/conrouterpost', evaluaElVerboHttp);
app.use('/cosacuca', router);
app.listen(8080);
console.log("Servidor iniciado");