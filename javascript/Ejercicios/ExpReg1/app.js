var nif = "73139215B";
var nie = "X7820754H";
var cif = "A12345678";
var expReg_Nif_Nif_Cif = /(^[xyzXYZ]?[0-9]{4,8}[a-zA-Z]|^[abAB][0-9]{8})$/; //Antes del or nif y nie, despus cif.
//regexObj.exec(str)
//regexObj.test(str)
//str.match(regexp)
//str.search(regexp)
console.log(expReg_Nif_Nif_Cif.exec(nif));
console.log(expReg_Nif_Nif_Cif.test(nie));
console.log(cif.match(expReg_Nif_Nif_Cif));