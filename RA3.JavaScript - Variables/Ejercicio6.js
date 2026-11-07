let num = 1234;
let big = 5678n;
let bigConvertit = Number(big);

let suma = num + bigConvertit;
let resta = num - bigConvertit;
let multiplicacion = num * bigConvertit;
let division = num / bigConvertit;

console.log("Suma (1 decimal):", suma.toFixed(1));
console.log("Resta (1 decimal):", resta.toFixed(1));
console.log("Multiplicación (1 decimal):", multiplicacion.toFixed(1));
console.log("División (1 decimal):", division.toFixed(1));