//Carga del modulo
var mongoose = require("mongoose");
//Conectar a la BBDD
mongoose.connect("mongodb://localhost/test");
//Genero el modelo
var Libro = mongoose.model("Libro",{
    titulo: String,
    autor: String,
    paginas: Number
});
var esdla = new Libro({
    titulo:"El señor de los anillos", 
    autor:"JJ", 
    paginas:3500
});
esdla.save((error)=>{
    if(error){
        console.error("Error al guardar ", error);
    }
    else{
        console.log("Libro guardado -> " + esdla._id);
    }
});