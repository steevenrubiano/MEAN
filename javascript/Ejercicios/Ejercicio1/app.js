/*
Funcion sumar
    No puede aceptar menos de dos parametros
    Si recibe dos o mas devulve la suma de todos

Si no es numerico no cuenta

Se mostrara en el log los no numericos
*/
sumarParametros(1);
sumarParametros(1,2);
sumarParametros(1,2,3,4);
sumarParametros("hola", "adios");
sumarParametros("hola", "adios", "perro", "gato");
function sumarParametros(a,b){
    if(!isNaN(arguments)){
        console.log(arguments);
    }
    else{
        if (arguments.length == 1){
            console.log("Tienes que pasar dos parametros o mas");
        }
        if(arguments.length == 2){
            console.log("Suma de dos parametros: " + (a+b));
        }
        if(arguments.length > 2){
            var sumTotal = 0;
            for (var i=0; i<arguments.length; i++){
                sumTotal = sumTotal + arguments[i]; 
            }
            console.log("Suma todos los parametros: " + sumTotal);
        }
    }
    
}