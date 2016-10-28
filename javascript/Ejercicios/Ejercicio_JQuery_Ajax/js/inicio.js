$(document).ready(initializeEvents);
function initializeEvents(){
   $("#boton1").click(guardarDato);
   $("#boton3").click(borrarDato);
}
//POST
function guardarDato(){
    $.ajax({
        type:"POST",
        data:{
            "id":$("#id").val(),
            "titulo":$("#titulo").val(),
            "director":$("#director").val(),
            "sinopsis":$("#sinopsis").val(),
            "fecha":$("#fecha").val()
        },
        dataType:"json",
        url:"http://localhost:3000/peliculas"
    }).done(peticionCompletadaGuardado);
}
function peticionCompletadaGuardado(data){
    mostrarDato();
}

//GET
function mostrarDato(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:3000/peliculas"
    }).done(peticionCompletadaMostrado);
}
function peticionCompletadaMostrado(data){
    $("tbody").empty();
    for(var i=0; i<data.length; i++){
        $("tbody").append("<tr><td>"+data[i].id+"</td><td>"+data[i].titulo+"</td><td>"+data[i].director+"</td><td>"+data[i].sinopsis+"</td><td>"+data[i].fecha+"</td></tr>");
    }
}

function borrarDato(){
    $.ajax({
        type:"DELETE",
        data:{
            "id":$("#id").val(),
            "titulo":$("#titulo").val(),
            "director":$("#director").val(),
            "sinopsis":$("#sinopsis").val(),
            "fecha":$("#fecha").val()
        },
        dataType:"json",
        url:"http://localhost:3000/peliculas"
    }).done(peticionCompletadaBorrado);
}
function peticionCompletadaBorrado(data){
    console.log(data);
}