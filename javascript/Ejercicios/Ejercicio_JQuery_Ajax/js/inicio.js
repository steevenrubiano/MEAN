$(document).ready(initializeEvents);
function initializeEvents(){
   $("#boton1").click(guardarDato);
   $("#boton2").click(modificarDato);
   $("#boton3").click(borrarDato);
}

function guardarDato(){
    $("tbody").html("<tr><td></td><td></td><td></td><td></td><td></td></tr>")
}
function modificarDato(){
    console.log("Modifico");
}
function borrarDato(){
    $("tr").remove();
}