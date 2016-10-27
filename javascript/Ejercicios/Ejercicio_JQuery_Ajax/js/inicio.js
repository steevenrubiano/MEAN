$(document).ready(initializeEvents);
function initializeEvents(){
   $("#boton1").click(guardarDato);
}


function guardarDato(){
    $.ajax({
        type:"POST", 
        dataType:"json",
        url:"http://localhost:3000/peliculas"
    }).done(peticionCompletada)/*.fail(peticionFallida)*/;
}

function peticionCompletada(data){
    console.log(data);
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