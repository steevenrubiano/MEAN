Array.prototype.contiene = function(objeto){
    for(let i=0; i<this.length; i++){
        let elementoActual = this[i];
        if(elementoActual == objeto){
            return true;
        }
    }
    return false;
}
let mi_array_de_prueba = [1,2,3,"casa",new Date()];
console.log(mi_array_de_prueba.contiene("casa"));
console.log(mi_array_de_prueba.contiene(9));