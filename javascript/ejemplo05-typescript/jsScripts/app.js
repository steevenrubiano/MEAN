var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var variable = 2016;
//variable = "texto"; 
var otraVariable = 7;
otraVariable = 14;
var miCumple = { dia: 22, mes: 2, anio: 1993 };
console.log("El dia de mi cumple es: " + miCumple.dia);
console.log("Antes de cumplir años: " + miCumple.anio);
cumplirAnios(miCumple);
console.log("Despues de cumplir años: " + miCumple.anio);
function cumplirAnios(fechaDeCumple) {
    fechaDeCumple.anio++;
}
//Definiciones de clases
var Persona = (function () {
    //Metodo constructor
    function Persona(nombre, apellido1, apellido2) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    Persona.prototype.stringify = function () {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    };
    return Persona;
}());
//Sin metodo constructor
/*let jonathan = new Persona();
jonathan.nombre = "Jonathan";
jonathan.apellido1 = "Rubiano";
jonathan.apellido2 = "Marín";*/
//Con metodo constructor
var jonathan = new Persona("Jonathan", "Rubiano", "Marín");
var laura = new Persona("Laura", "Herrera", "Martinez");
console.log(jonathan.stringify());
console.log(laura.stringify());
//Herencia
var Ciudadano = (function (_super) {
    __extends(Ciudadano, _super);
    function Ciudadano(nombre, apellido1, apellido2, identidad) {
        _super.call(this, nombre, apellido1, apellido2);
        this.identidad = identidad;
    }
    /*constructor(identidad: string){
        super(null,null,null);
        this.identidad = identidad;
    } */
    Ciudadano.prototype.stringify = function () {
        return _super.prototype.stringify.call(this) + " " + this.identidad;
    };
    return Ciudadano;
}(Persona));
var ciudadanoKane = new Ciudadano("kane", null, null, "1");
//var ciudadanoKane = new Ciudadano("1");
console.log(ciudadanoKane.stringify());
var otraPersona = ciudadanoKane;
console.log(otraPersona.stringify());
var SerVivo = (function () {
    function SerVivo(clasificacion) {
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    SerVivo.prototype.stringify = function () {
        return "Clasificacion: " + this.clasificacion;
    };
    SerVivo.totalDeSeresVivos = 0;
    return SerVivo;
}());
var pez = new SerVivo("Marino");
var pez2 = new SerVivo("Marino");
var pez3 = new SerVivo("Marino");
var tigre = new SerVivo("Terrestre");
var leon = new SerVivo("Terrestre");
var pantera = new SerVivo("Terrestre");
console.log("Total de seres vivos: " + SerVivo.totalDeSeresVivos);
var Padre = (function () {
    function Padre() {
    }
    return Padre;
}());
var padre = new Padre();
padre.almacenPublico = 77;
var HijoDePadre = (function (_super) {
    __extends(HijoDePadre, _super);
    function HijoDePadre() {
        _super.call(this);
        this.almacenPublico = 33;
        this.almacenProtegido = 25;
    }
    return HijoDePadre;
}(Padre));
var Ser = (function () {
    function Ser(clasificacion) {
        this.clasificacion = clasificacion;
        Ser.totalDeSeres += 1;
    }
    Ser.prototype.stringify = function () {
        return "Clasificacion: " + this.clasificacion;
    };
    Ser.totalDeSeresVivos = 0;
    return Ser;
}());
var Politico = (function (_super) {
    __extends(Politico, _super);
    function Politico() {
        _super.call(this, "cucaracha");
    }
    Politico.prototype.desplazamiento = function () {
        return "En coche oficial";
    };
    Politico.prototype.alimentarse = function () {
        return "Dame dinero en sobres!";
    };
    return Politico;
}(Ser));
//Esto no se puede
//let ser1: Ser = new Ser();
var politico = new Politico();
var funcionLambda = function (uno, dos) {
    return uno + dos;
};
console.log("Resultado de sumar 1 y 3: " + funcionLambda(1, 3));
//# sourceMappingURL=app.js.map