let textAmbContingut = "Hola";
let textBuit = "";

let explicitaTrue = Boolean(textAmbContingut);
let explicitaFalse = Boolean(textBuit);

let implicitaTrue = !!textAmbContingut;
let implicitaFalse = !!textBuit;

console.log("Explícita ('Hola'):", explicitaTrue, "| Tipus:", typeof explicitaTrue);
console.log("Explícita (''):", explicitaFalse, "| Tipus:", typeof explicitaFalse);
console.log("Implícita (!!'Hola'):", implicitaTrue, "| Tipus:", typeof implicitaTrue);
console.log("Implícita (!!''):", implicitaFalse, "| Tipus:", typeof implicitaFalse);