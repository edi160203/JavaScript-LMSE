let esCert = true;
let explicita1 = String(esCert);
let explicita2 = esCert.toString();
let implicita = esCert + "";

console.log("Explícita amb String():", explicita1, "| Tipus:", typeof explicita1);
console.log("Explícita amb .toString():", explicita2, "| Tipus:", typeof explicita2);
console.log("Implícita amb + '':", implicita, "| Tipus:", typeof implicita);
