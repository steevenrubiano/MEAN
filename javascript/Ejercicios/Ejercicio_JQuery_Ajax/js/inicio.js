$(document).ready(initializeEvents);
function initializeEvents(){
   $("#boton1").click(guardarDato);
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




/*function peticionCompletada(data,status,jqXHR){
    console.log(data.peliculas.length);
    $("tbody").html("<tr><td>"+data.peliculas[0].id+"</td><td>"+data.peliculas[0].titulo+
    "</td><td>"+data.peliculas[0].director+"</td><td>"+data.peliculas[0].sinopsis+
    "</td><td>"+data.peliculas[0].fecha+"</td></tr>");
}

function peticionFallida(jqXHR,status,error){
    alert("Error al procesar la peticion");
    console.log("Status: " +status);
    console.log("Error! "+error);
}*/