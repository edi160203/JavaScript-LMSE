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
