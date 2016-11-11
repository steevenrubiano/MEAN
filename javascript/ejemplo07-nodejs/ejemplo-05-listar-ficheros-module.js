let fs = require("fs");
let path = require("path");

module.export = function (directorio, extension, callback){
    fs.readdir(directorio, (error, ficheros)=>{
        if(error){
            //console.error("Que habra pasado!", error);
            callback(error);
        }
        else{
            //Filtro el contenido de ficheros
            ficheros = ficheros.filter(
                (fichero)=>{
                    return path.extname(fichero)==="." + extension;
                });
                callback(null, ficheros);
        }
    });
}