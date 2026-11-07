let cert = true;
let fals = false;

let explicitaTrue = Number(cert);
let explicitaFalse = Number(fals);

let implicitaTrue = +cert;
let implicitaFalse = +fals;

console.log("Explícita Number(true):", explicitaTrue, "| Tipus:", typeof explicitaTrue);
console.log("Explícita Number(false):", explicitaFalse, "| Tipus:", typeof explicitaFalse);
console.log("Implícita +true:", implicitaTrue, "| Tipus:", typeof implicitaTrue);
console.log("Implícita +false:", implicitaFalse, "| Tipus:", typeof implicitaFalse);