$(document).ready(initializeEvents);
function initializeEvents(){
   $("#boton1").click(guardarDato);
   $("#boton2").click(modificarDato);
   $("#boton3").click(borrarDato);
}

function guardarDato(){
    
}
function modificarDato(){
    
}
function borrarDato(){
    
}


$(document).ready(initializeEvents);
function initializeEvents(){
    $("#peticion_ajax").click(peticionAjaxGenerica);
}
function peticionAjaxGenerica(){
    $.ajax({
        //Puede ser una cadena, un array o un object de Js
        //?nombre=Jonathan&nivel_de_cafe=bajo
        data: {
            nombre:"Jonathan", 
            nivel_de_cafe:"bajo"
        },
        //Tipo de peticion http
        type:"GET",
        //Tipo de dato esperado 
        dataType:"json",
        //URL de comunicacion con el servicio
        url:"peliculas.json"
    }).done(peticionCompletada).fail(peticionFallida);
}
function peticionCompletada(data, status,jqXHR){
    alert("Peticion completada con status " +status+" : "+data);
    $("#contenido_de_ajax").html(data[7].username);
}
function peticionFallida(jqXHR,status,error){
    alert("Error al procesar la peticion");
    console.log("Status: " +status);
    console.log("Error! "+error);
}