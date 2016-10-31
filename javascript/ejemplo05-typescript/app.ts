var variable = 2016;
//variable = "texto"; 
var otraVariable:number = 7;
otraVariable = 14;
//otraVariable = "16";

//Tipos
interface Tiempo{
    dia :number;
    mes :number;
    anio :number;
}

var miCumple :Tiempo = {dia:22, mes:2, anio:1993};
console.log("El dia de mi cumple es: " +miCumple.dia);

console.log("Antes de cumplir años: " +miCumple.anio);
cumplirAnios(miCumple);
console.log("Despues de cumplir años: " +miCumple.anio);

function cumplirAnios(fechaDeCumple :Tiempo):void{
    fechaDeCumple.anio++;
}

//Definiciones de clases

class Persona{
    //Definicion de atributos
    nombre :string;
    apellido1 :string;
    apellido2 :string;
    //Metodo constructor
    constructor(nombre :string, apellido1 :string, apellido2 :string){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    stringify() :string{
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
}
//Sin metodo constructor
/*let jonathan = new Persona();
jonathan.nombre = "Jonathan";
jonathan.apellido1 = "Rubiano";
jonathan.apellido2 = "Marín";*/

//Con metodo constructor
let jonathan = new Persona("Jonathan", "Rubiano", "Marín");
let laura = new Persona("Laura", "Herrera", "Martinez");
console.log(jonathan.stringify());
console.log(laura.stringify());

//Herencia
class Ciudadano extends Persona{
    identidad :string;
    constructor(nombre: string, apellido1 :string, apellido2 :string, identidad :string){
        super(nombre, apellido1, apellido2);
        this.identidad = identidad;
    }  
    stringify() :string{
        return super.stringify() + " " + this.identidad;
    }
}
var ciudadanoKane = new Ciudadano("kane", null, null, "1");
console.log(ciudadanoKane.stringify());