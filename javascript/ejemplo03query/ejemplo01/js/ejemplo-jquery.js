$(document).ready(inicializarEventosJQuery);

function pressButtonJQuery(e){
    let valor = e.target.value;
    alert("boton jquery pulsado: " + valor);
}

function inicializarEventosJQuery(){
    $("#botonjquery1").click(pressButtonJQuery);
    $("#botonjquery2").click(pressButtonJQuery);
}