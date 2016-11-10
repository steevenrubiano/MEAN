let fs = require('fs');
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);
let numFilas = contenido.toString().split("\n").length;
console.log("Fichero: " + fichero + "\nLineas: " + numFilas);