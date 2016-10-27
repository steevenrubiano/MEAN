$(document).ready(initializeEvents);
function initializeEvents(){
   $("#boton1").click(guardarDato);
   //$("#boton2").click(modificarDato);
   //$("#boton3").click(borrarDato);
}

function guardarDato(){
    $.ajax({
        type:"GET", 
        dataType:"json",
        url:"peliculas.json"
    }).done(peticionCompletada).fail(peticionFallida);
}

function peticionCompletada(data){
    console.log(data.peliculas.length);
    $("tbody").html("<tr><td>"+data.peliculas[0].id+"</td><td>"+data.peliculas[0].titulo+
    "</td><td>"+data.peliculas[0].director+"</td><td>"+data.peliculas[0].sinopsis+
    "</td><td>"+data.peliculas[0].fecha+"</td></tr>");
}

function peticionFallida(jqXHR,status,error){
    alert("Error al procesar la peticion");
    console.log("Status: " +status);
    console.log("Error! "+error);
}