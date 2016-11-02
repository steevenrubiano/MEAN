var variable = 2016;
//variable = "texto"; 
var otraVariable: number = 7;
otraVariable = 14;
//otraVariable = "16";

//Tipos
interface Tiempo{
    dia: number;
    mes: number;
    anio: number;
}

var miCumple :Tiempo = {dia:22, mes:2, anio:1993};
console.log("El dia de mi cumple es: " +miCumple.dia);

console.log("Antes de cumplir años: " +miCumple.anio);
cumplirAnios(miCumple);
console.log("Despues de cumplir años: " +miCumple.anio);

function cumplirAnios(fechaDeCumple: Tiempo): void{
    fechaDeCumple.anio++;
}

//Definiciones de clases

class Persona{
    //Definicion de atributos
    nombre: string;
    apellido1: string;
    apellido2: string;
    //Metodo constructor
    constructor(nombre: string, apellido1: string, apellido2: string){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    stringify(): string{
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
    identidad: string;
    constructor(nombre: string, apellido1: string, apellido2: string, identidad: string){
        super(nombre, apellido1, apellido2);
        this.identidad = identidad;
    }
    /*constructor(identidad: string){
        super(null,null,null);
        this.identidad = identidad;
    } */
    stringify(): string{
        return super.stringify() + " " + this.identidad;
    }
}
var ciudadanoKane = new Ciudadano("kane", null, null, "1");
//var ciudadanoKane = new Ciudadano("1");
console.log(ciudadanoKane.stringify());
var otraPersona: Persona = ciudadanoKane;
console.log(otraPersona.stringify());

class SerVivo {
    static totalDeSeresVivos: number = 0;
    clasificacion: string;
    constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos +=1;
    }
    stringify(): string{
        return "Clasificacion: " +this.clasificacion;
    }
}

let pez: SerVivo = new SerVivo("Marino");
let pez2: SerVivo = new SerVivo("Marino");
let pez3: SerVivo = new SerVivo("Marino");
let tigre: SerVivo = new SerVivo("Terrestre");
let leon: SerVivo = new SerVivo("Terrestre");
let pantera: SerVivo = new SerVivo("Terrestre");

console.log("Total de seres vivos: " +SerVivo.totalDeSeresVivos);

class Padre{
    public almacenPublico: number;
    protected almacenProtegido: number;
    private almacenPrivado: number;
}
let padre = new Padre();
padre.almacenPublico = 77;

class HijoDePadre extends Padre{
    constructor(){
        super();
        this.almacenPublico = 33;
        this.almacenProtegido = 25;
    }
}

abstract class Ser {
    static totalDeSeresVivos: number = 0;
    protected clasificacion: string;
    constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        Ser.totalDeSeres +=1;
    }
    stringify(): string{
        return "Clasificacion: " +this.clasificacion;
    }
    abstract desplazamiento(): string;
    abstract alimentarse(): string;
}
class Politico extends Ser{
    constructor(){
        super("cucaracha");
    }
    desplazamiento(): string{
        return "En coche oficial";
    }
    alimentarse(): string{
        return "Dame dinero en sobres!";
    }
}
//Esto no se puede
//let ser1: Ser = new Ser();

let politico: Politico = new Politico();

let funcionLambda = (uno: number, dos: number)=>{
 return uno + dos;
}
console.log("Resultado de sumar 1 y 3: " +funcionLambda(1,3));