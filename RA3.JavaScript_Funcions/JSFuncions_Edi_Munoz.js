console.log("Ejercicio 1")
function mostrarNomComplet(nom, cognoms) {
    console.log(nom + " " + cognoms);
}

mostrarNomComplet("Edi", "Muñoz");


console.log("Ejercicio 2")
function mostrarTipus(valor) {
    console.log(typeof valor);
}

mostrarTipus("Edi");
mostrarTipus(25);
mostrarTipus(true);

console.log("Ejercicio 3")
function mostrarDataActual() {
    let data = new Date();
    console.log(data);
}

mostrarDataActual();

console.log("Ejercicio 5")
function comptarVocals(text) {
    let comptador = 0;
    let vocals = "aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚ";

    for (let i = 0; i < text.length; i++) {
        if (vocals.includes(text[i])) {
            comptador++;
        }
    }

    return comptador;
}

console.log(comptarVocals("Hola Mon"));
console.log(comptarVocals("JavaScript"));

console.log("Ejercicio 6")
function sumarTres(a, b, c = 10) {
    return a + b + c;
}

console.log(sumarTres(2, 3));
console.log(sumarTres(2, 3, 5));


console.log("Ejercicio 7")
function cridarExercicis() {
    mostrarDataActual();
    return sumarTres(2, 3);
}

console.log(cridarExercicis());


console.log("Ejercicio 8")
function comprovarTrenta(a, b) {
    if (a === 30 || b === 30 || (a + b) === 30) {
        return true;
    } else {
        return false;
    }
}

console.log(comprovarTrenta(30, 5));
console.log(comprovarTrenta(10, 20));
console.log(comprovarTrenta(10, 5));

console.log("Ejercicio 9")
let comprovarTrentaAnonima = function(a, b) {
    if (a === 30 || b === 30 || (a + b) === 30) {
        return true;
    } else {
        return false;
    }
};

console.log(comprovarTrentaAnonima(30, 5));
console.log(comprovarTrentaAnonima(10, 20));
console.log(comprovarTrentaAnonima(10, 5));