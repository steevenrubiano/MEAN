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
        url:"https://jsonplaceholder.typicode.com/users"
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

function pruebasConGetyPost(){
    $.get("http://localhost:8080/ejemplo-17-fichero_alojado_en_servidor.txt",
    resultadoGet);
    $.post("http://localhost:8080/ejemplo-17-fichero_alojado_en_servidor.txt",
    resultadoPost);
}
function resultadoGet(data,status){
    alert("Resultado: " +data);
}

function resultadoPost(){
    alert("Post correcto!")
}