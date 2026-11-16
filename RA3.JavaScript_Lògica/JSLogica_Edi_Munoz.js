console.log("\n Ejercicio 1\n");

let num = 5;
if (num % 3 === 0 && num % 7 === 0){
    console.log("El numero " + num + " es multiplo de 3 y de 7 ");
} else if (num % 3 === 0) {
    console.log("El numero " + num + " es multiplo de 3");
} else if (num % 7 === 0) {
    console.log("El numero " + num + " es multiplo de 7");
} else {
    console.log("El numero " + num + " no es multiplo de 3 ni de 7");
}


console.log("\n Ejercicio 2\n");

let num2 = 5;
let num3 = 40;

num2 >= 10 && num2 <= 50 ? console.log(num2 + "Esta en el rango de 10 a 50")
: console.log(num2 + " No esta en el rango de 10 a 50")

num3 >= 10 && num3 <= 50 ? console.log(num3 + " Esta en el rango de 10 a 50")
: console.log(num3 + " no esta en el rango de 10 a 50")


console.log("\n Ejercicio 3\n");

let nota = -5;

if (nota >= 0 && nota <= 4.99){
    console.log(nota + " Suspes ");
} else if (nota >= 5 && nota <= 5.99){
    console.log(nota + " Suficient");
} else if (nota >= 6 && nota <= 6.99){
    console.log(nota + " Be");
} else if (nota >= 7 && nota <= 8.99){
    console.log(nota + " Notable");
} else if (nota >= 9 && nota <= 10){
    console.log(nota + " Excel-lent")
} else {
    console.log("Nota no valida ");
}

console.log("\n Ejercicio 4\n");

let num4 = 70;

switch (true){
    case (num % 3 === 0 && num % 7 === 0):
        console.log("El numero " + num4 + " Es multiplo de 3 y de 7 ");
        break;
    case (num4 % 3 === 0):
        console.log("El numero " + num4 + " Es multiplo de 3");
        break;
    case (num4 % 7 === 0):
        console.log("El numero " + num4 + " Es multiplo de 7");
        break;
}