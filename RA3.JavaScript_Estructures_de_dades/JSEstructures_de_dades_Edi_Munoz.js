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


//*//*7.- Crea una estructura Map i insereix 3 claus – valor. Les 3 claus han de ser de tipus de dades diferents. Et deixa?

console.log("\nEjercicio 7\n");

let mapa = new Map();
mapa.set("nombre", "Edi");
mapa.set(1, "Uno");
mapa.set(true, "Activo");

console.log(mapa);
console.log("Si que deja insertar claves de distintos tipos en un Map:", mapa.get("nombre"), mapa.get(1), mapa.get(true));


//*//*8.- Donada una paraula, insereix cada caràcter dins d’una cua. Extreu ara de la cua els caràcters un a un per poder decidir si és un palíndrom o no.

console.log("\nEjercicio 8\n");

let paraula = "reconocer";
let cua = [];

for (let i = 0; i < paraula.length; i++) {
    cua.push(paraula[i]);
}

let invertida = "";

while (cua.length > 0) {
    let caracter = cua.shift();
    invertida = caracter + invertida;
}

if (paraula === invertida) {
    console.log("La palabra " + paraula + " es un palindromo");
} else {
    console.log("La palabra " + paraula + " no es un palindromo");
}


//*//*9.- Crea un objecte Pel·lícula que contingui informació del títol, descripció i any d’estrena. Fes-ne dos exemples: un amb class + new i l’altre amb declaració literal (JSON). Mostra les dades dels dos objectes.

console.log("\nEjercicio 9\n");

class Pelicula {
    constructor(titol, descripcio, anyEstrena, actors) {
        this.titol = titol;
        this.descripcio = descripcio;
        this.anyEstrena = anyEstrena;
        this.actors = actors;
    }
}

let peliculaClasse = new Pelicula("Inception", "Un ladron que roba secretos mediante los suenos", 2010, ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]);

let peliculaLiteral = {
    titol: "Interstellar",
    descripcio: "Un grupo de exploradores viaja a traves de un agujero de gusano en el espacio",
    anyEstrena: 2014,
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
};

console.log("Pelicula con class + new:", peliculaClasse.titol, "-", peliculaClasse.descripcio, "-", peliculaClasse.anyEstrena, "-", peliculaClasse.actors);
console.log("Pelicula literal:", peliculaLiteral.titol, "-", peliculaLiteral.descripcio, "-", peliculaLiteral.anyEstrena, "-", peliculaLiteral.actors);

//*//*10.- Crea una Cua d’Objectes amb dades de les 2 pel·lícules. Itera la cua per mostrar per pantalla la pel·lícula més antiga.

console.log("\nEjercicio 10\n");

let cuaPelicules = [];
cuaPelicules.push(peliculaClasse);
cuaPelicules.push(peliculaLiteral);

let mesAntiga = null;

while (cuaPelicules.length > 0) {
    let actual = cuaPelicules.shift();
    if (mesAntiga === null || actual.anyEstrena < mesAntiga.anyEstrena) {
        mesAntiga = actual;
    }
}

console.log("La pelicula mas antigua es: " + mesAntiga.titol + " (" + mesAntiga.anyEstrena + ")");


//*//*11.- Modifica l’exercici anterior per afegir un array d’actors a cada pel·lícula i que es mostrin tots els actors de totes les pel·lícules.

console.log("\nEjercicio 11\n");

let pelicules = [peliculaClasse, peliculaLiteral];

for (let i = 0; i < pelicules.length; i++) {
    console.log("Actors de " + pelicules[i].titol + ":");
    for (let j = 0; j < pelicules[i].actors.length; j++) {
        console.log("- " + pelicules[i].actors[j]);
    }
}