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
LibroSchema.statics.findBytitle = (title, cb)=>{
    console.log("Buscando por titulo: " + title)
    return Libro.find({titulo:new RegExp(title, "i")}, cb);//CUIDADO: esta linea deberia ser this en lugar de libro
};
var Libro = mongoose.model("Libro", LibroSchema);
Libro.findBytitle("lord", (error, data)=>{
    if(error){
        log.error("Error al ejecutar la busqueda");
    }
    else{
        console.log("Libros para la consulta find({titulo:/lord/+i})");
        data.forEach((libro)=>{
            console.log("Libro encontrado: " + libro.titulo);
        })
    }
});
/**
 * A nivel de intancia
 *  init
 *  validate
 *  save
 *  remove
 * 
 * A nivel de clase
 *  count
 *  find
 *  findOne
 *  findOneAndUpdate
 *  findOneAndDelete
 */
Libro.findById("583d683312cff011b445d65e", (error, libro)=>{
    if(error){
        console.error("Error!");
    }
    else{
        console.log("\nLibro con id: " + libro._id + "\n\t" + libro);
    }
});