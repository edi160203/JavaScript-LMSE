//1.- Crea un array amb 5 números de manera aleatòria. Utilitza les funcions necessàries per, en aquest ordre, ordenar de menor a major i obtenir el primer i últim valor.

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



//2.- Utilitza l’operador de propagació per crear un altre array usant els valors de l’exercici anterior

console.log("\nEjercicio 2\n");

let numerosCopia = [...numeros];
console.log("Nuevo array ", numerosCopia);



//3.- Fusiona dos arrays i esborren els valors duplicats (no utilitzis el Set).


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


//4.- Modifica l’exercici anterior per utilitzar una estructura que no permeti duplicats.

console.log("\nEjercicio 4\n");

let array3 = [5, 6, 7, 8];
let array4 = [7, 8, 9, 10];

let noDuplicados = new Set([...array3, ...array4]);


console.log(noDuplicados);


//5.- Codifica la funció map d’una Array perquè en creï una nova amb el valor cúbic de cada número.  Exemple: [1, 3, 6] => [1, 27, 216]

console.log("\nEjercicio 5\n");

let array5 = [1, 2, 3];
let resultado = array5.map(x => x * x * x);
console.log("El cubo de los numeros [" + array5 + "] es [" + resultado +"]");


//6.- A partir d’una array de strings, es creï una nova amb aquelles que tinguin més d’una lletra ‘a’

console.log("\nEjercicio 6\n");

let arrayString = ["comparacion", "hola", "prueba"];
let acomulativa = [];

for (let i = 0; i < arrayString.length; i++){
    let contador = 0;
    for (let j = 0; j < arrayString[i].length; j++){
          if ( arrayString[i][j] === "a"){
              contador++;
          }
       }
    if (contador > 1){
        acomulativa.push(arrayString[i]);
    }
}
console.log("La palabra que contiene mas letra a es "  + acomulativa);







