console.log("\nEjercicio 1\n");

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


console.log("\nEjercicio 2\n");

let num2 = 5;
let num3 = 40;

num2 >= 10 && num2 <= 50 ? console.log(num2 + "Esta en el rango de 10 a 50")
: console.log(num2 + " No esta en el rango de 10 a 50")

num3 >= 10 && num3 <= 50 ? console.log(num3 + " Esta en el rango de 10 a 50")
: console.log(num3 + " no esta en el rango de 10 a 50")


console.log("\nEjercicio 3\n");

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

console.log("\nEjercicio 4\n");

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

console.log("\nEjercicio 5\n");

let num5 = 15;
let num6 = 0;
let suma = 0;

for (let i = 1; suma + i  <= num5; i++){
    suma += i;
    num6 = i;
}
console.log("El numero maximo es " + num6);

console.log("\nEjercicio 6\n");

let x = 's56t7p';
let suma1 = 0;

for (let i = 0; i < x.length; i++){
    if (!isNaN(x[i]) && x[i] !== ' ')
    suma1 += Number(x[i]);
}
console.log("La suma de numeros es " + suma1);


console.log("\nEjercicio 7\n");

let num7 = 15;
let num8 = 25;
let num9 = 18;

if (num7 >= num8 && num8 >= num9){
    console.log(num7 + ", " + num8 + ", " + num9);
}else if (num7 >= num9 && num9 >= num8){
    console.log(num7 + ", " + num9 + ", " + num8);
}else if (num8 >= num7 && num7 >= num9){
    console.log(num8 + ", " + num7 + ", " + num9);
}else if (num8 >= num9 && num9 >= num7){
    console.log(num8 + "," + num9 + ", " +num7);
}else if (num9 >= num8 && num8 >= num7){
    console.log(num9 + ", " + num8 + ", " + num7);
}else {
    console.log(num9 + ", " + num7 + ", " + num8);
}



