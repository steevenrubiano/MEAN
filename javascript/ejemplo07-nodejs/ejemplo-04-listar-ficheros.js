let fs = require("fs");
let path = require("path");
let directorio = process.argv[2];
let extension = process.argv[3];
//Funciones normales
fs.readdir(directorio, operarConResultados);
function operarConResultados(error, ficheros){
    if(error){
        console.error("Que habra pasado!", error);
    }
    else{
        console.log("**********Funciones normales**********");
        ficheros.forEach(operacionPorFichero);
    }
}
function operacionPorFichero(fichero){
    if(path.extname(fichero)==extension){
        console.log("Normal: " +fichero);
    }
}

//Lo mismo con funcion lambda
fs.readdir(directorio, (error, ficheros)=>{
    if(error){
        console.error("Que habra pasado!", error);
    }
    else{
        console.log("**********Funciones lambda**********")
        ficheros.forEach(
            (fichero)=>{
                if(path.extname(fichero)==extension){
                    console.log("Lambda: " +fichero);
                }
            });
    }
});
