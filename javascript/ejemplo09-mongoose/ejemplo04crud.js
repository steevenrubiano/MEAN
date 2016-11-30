var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:20017/test");

var Libro = require("./ejemplo04model");

function getLibros(limit, skip){
    //return Libro.find(); //Paginad!
}
function getLibro(_id){
    Libro.findByID(_id, (error, libro)=>{
        //TODO:
    });
}
function saveLibro(libro){
    Libro.save((error)=>{
        //TODO:
    });
}
function updateLibro(libro){
    //TODO:
    getLibro(libro._id);
    libro.categoria = "terror";
    saveLibro(libro);
}
function deleteLibro(_id){
    Libro.findByIdAndRemove(_id, ()=>{
        
    });
}