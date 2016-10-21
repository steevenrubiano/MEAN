addEvent(window, 'load', inicializarEventos, false);
//addEvent(document, 'DOMContentLoaded', inicializarEventos, false);

function addEvent(elemento, nomevento, funcion, captura){
    if(elemento.attachEvent){
        elemento.attachEvent('on'+ nomevento, funcion);
        return true;
    }
    else{
        if(elemento.addEventListener){
            elemento.addEventListener(nomevento, funcion, captura);
            return true;
        }
        return false;
    }
}

function pressButtonJs(e){
    let valor = e.target.value;
    alert("boton js pulsado: " + valor);
}

function inicializarEventos(){
    let btnjs1 = document.getElementById("botonjs1");
    addEvent(btnjs1, 'click', pressButtonJs, false);

    let btnjs2 = document.getElementById("botonjs2");
    addEvent(btnjs2, 'click', pressButtonJs, false);
}