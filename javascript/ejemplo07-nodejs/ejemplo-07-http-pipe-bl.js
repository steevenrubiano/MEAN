var http = require('http');
var bl = require('bl');
http.get("http://www.google.es", (response)=>{
    response.pipe(
        bl((error, data)=>{
            if(error){
                return console.error("Error al procesar la peticion ", error);
            }
            else{
                data = data.toString();
                console.log("Numero de caracteres: " + data.length);
                console.log("data:\n " + data);
            }
        })
    )
})