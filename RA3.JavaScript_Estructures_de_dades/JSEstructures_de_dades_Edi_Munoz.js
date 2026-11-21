console.log("\nEjercicio 1\n");

let numeros = [];

for (let i = 0; i < 5; i++){

    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(numeroAleatorio);
}
console.log("Array original:", numeros);
numeros.sort((a, b) => a - b);
console.log("Array ordenado:", numeros);
console.log("Primer valor " + numeros [0]);
console.log("Ultimo valor " + numeros [numeros.length - 1]);


console.log("\nEjercicio 2\n");

let numerosCopia = [...numeros];
console.log("Nuevo array ", numerosCopia);

console.log("\nEjercicio 3\n");

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let fusionArrays = [...array1, ...array2];

let sinDuplicados = [];

for (let i = 0; i < fusionArrays.length; i++){
    if (!sinDuplicados.includes(fusionArrays[i])){
        sinDuplicados.push(fusionArrays[i]);
    }
}
console.log("Sin duplicados:", sinDuplicados);


console.log("\nEjercicio 4\n");

let array3 = [5, 6, 7, 8];
let array4 = [7, 8, 9, 10];

let noDuplicados = new Set([...array3, ...array4]);


console.log(noDuplicados);








