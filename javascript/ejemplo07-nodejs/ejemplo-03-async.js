let fs = require('fs')
let fichero = process.argv[2];
fs.readFile(fichero, miFuncionAsincrona);
function miFuncionAsincrona(error, contenido){
    if(error){
        console.error("Error al ejecuta la funcion asincrona ", error);
    }
    if(!error){
        let numeroDeFilas = contenido.toString().split('\n').length;
        console.log("Fichero: " + fichero +"\nLineas " + numeroDeFilas);
    }    
}
