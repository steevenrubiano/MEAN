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
        Ser.totalDeSeresVivos += 1;
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
var PI = 3.141592654;
//PI = 23; ESTO ESTA MAL
//const otra; MAL HAY QUE DEFINIRLE UN VALOR, NO PUEDE SER UNDEFINED
var _a = { variable1: "valorN1", variable2: "valorN2" }, variable1 = _a.variable1, variable2 = _a.variable2;
console.log(variable1);
console.log(variable2);
function dameLosCamposPorConsola(campo1, campo2) {
    var elRestoDeCampos = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        elRestoDeCampos[_i - 2] = arguments[_i];
    }
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDeCampos);
    //FOR IN
    console.log("-----------FOR IN-----------");
    for (var posicion in elRestoDeCampos) {
        console.log("La posicion " + posicion + " es " + elRestoDeCampos[posicion]);
    }
    //FOR OF
    console.log("-----------FOR OF-----------");
    for (var _a = 0, elRestoDeCampos_1 = elRestoDeCampos; _a < elRestoDeCampos_1.length; _a++) {
        var campo = elRestoDeCampos_1[_a];
        console.log("El campo es " + campo);
    }
}
dameLosCamposPorConsola("uno", 2, "tres", "cuatro", 5, "seis");
var TipoDeVia;
(function (TipoDeVia) {
    TipoDeVia[TipoDeVia["Calle"] = 0] = "Calle";
    TipoDeVia[TipoDeVia["Rua"] = 1] = "Rua";
    TipoDeVia[TipoDeVia["Plaza"] = 2] = "Plaza";
    TipoDeVia[TipoDeVia["Camino"] = 3] = "Camino";
    TipoDeVia[TipoDeVia["Avenida"] = 4] = "Avenida";
    TipoDeVia[TipoDeVia["Carretera"] = 5] = "Carretera";
})(TipoDeVia || (TipoDeVia = {}));
;
var miTipoDeVia = TipoDeVia.Calle;
console.log("Tipo de via: " + miTipoDeVia);
var TipoDeVia;
(function (TipoDeVia) {
    function esAvenida(texto) {
        if (texto == "Avda") {
            return TipoDeVia.Avenida;
        }
    }
    TipoDeVia.esAvenida = esAvenida;
})(TipoDeVia || (TipoDeVia = {}));
var avenida = TipoDeVia.esAvenida("Avda");
console.log(avenida);
function invertir(elementos) {
    var invertido = [];
    for (var posicion = 0, posicionInvertido = elementos.length - 1; posicion < elementos.length; posicion++, posicionInvertido--) {
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}
//# sourceMappingURL=app.js.map