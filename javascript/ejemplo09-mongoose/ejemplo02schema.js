var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
//Definicion del esquema
var Schema = mongoose.Schema;
var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    sinopsis: String,
    fecha: Date,
    categoria: String,
    campos_biblioteca: {
        ejemplares: Number,
        reservas: Number,
        ultima_reserva: Date
    }
});
var Libro = mongoose.model("Libro", LibroSchema);
var lotr = new Libro({
    titulo:"Lord of the rings", 
    campos_biblioteca:{
        ultima_reserva: new Date()
    }
});
//Guardo
lotr.save((error)=>{
    if(error){
        console.error("Error al guardar ", error);
    }
    else{
        console.log("Salvado con id -> " + lotr._id);
    }
});
//Listo
Libro.find((error, data)=>{
    console.log(data);//Data es un array
});