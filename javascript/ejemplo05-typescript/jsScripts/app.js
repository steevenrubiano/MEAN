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
    Ciudadano.prototype.stringify = function () {
        return _super.prototype.stringify.call(this) + " " + this.identidad;
    };
    return Ciudadano;
}(Persona));
var ciudadanoKane = new Ciudadano("kane", null, null, "1");
console.log(ciudadanoKane.stringify());
//# sourceMappingURL=app.js.map