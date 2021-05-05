//Ejercicico 2
function media(a, b, c, d) {
  return (a + b + c) / d;
}
const kakota = media(10, 14, 34, 3);
console.log(kakota);

//Ejercicio 3
function math_fuera(a) {
  const no_IVA = a;
  const IVA = a * 0.21;
  const total = no_IVA + IVA;
  return `Precio sin IVA: ${no_IVA}, IVA: ${IVA} y Total: ${total}.`;
}
const result3 = math_fuera(10);
console.log(result3);

//Ejercicio 4
function comprobation(a) {
  if (a % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
const result4 = comprobation(15);
const pintar4 = document.querySelector(".js-exercise4");
pintar4.innerHTML = result4;

//Ejercicio5
function getEl(selector) {
  return document.querySelector(selector);
}
const result5 = getEl(".js-exercise5");
console.log(result5);
