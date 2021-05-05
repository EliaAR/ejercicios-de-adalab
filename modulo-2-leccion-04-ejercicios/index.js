//Ejercicico 2
function media(a, b, c, d) {
  return (a + b + c) / d;
}
let kakota = media(10, 14, 34, 3);
console.log(kakota);

//Ejercicio 3
function math_fuera(a) {
  let no_IVA = a;
  let IVA = a * 0.21;
  let total = no_IVA + IVA;
  return `Precio sin IVA: ${no_IVA}, IVA: ${IVA} y Total: ${total}.`;
}
let result3 = math_fuera(10);
console.log(result3);

//Ejercicio 4
function comprobation(a) {
  if (a % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
let result4 = comprobation(15);
let pintar4 = document.querySelector(".js-exercise4");
pintar4.innerHTML = result4;

//Ejercicio5
function getEl(selector) {
  return document.querySelector(selector);
}
let result5 = getEl(".js-exercise5");
console.log(result5);

//Ejercicio7a
let pintar7 = getEl(".js-exercise7");
pintar7.innerHTML = pintar7.innerText;
console.log(pintar7.innerHTML);

//Ejercicio7b
let pintar7b = parseInt(pintar7.innerHTML);
console.log(typeof pintar7b);

//Ejercicio7c
result4 = comprobation(pintar7b.innerText);
console.log(result4);

//ejercicio7d
console.log(`Este número es IMPAR: ${pintar7b}`);

//Ejercicio10
let element = document.querySelector(".exercise10Container");
let elementStyle = window.getComputedStyle(element);
let elementDimension = elementStyle.getPropertyValue("box-sizing");
let elementWidth = elementStyle.getPropertyValue("width");
let elementWidthParse = parseInt(elementWidth);
let elementPadding = elementStyle.getPropertyValue("padding");
let elementPaddingParse = parseInt(elementPadding);
let elementBorderWidth = elementStyle.getPropertyValue("border-width");
let elementBorderWidthParse = parseInt(elementWidth);
let see = (a, b, c, d) => {
  if (a === "border-box") {
    return `${b + c + d}`;
  } else {
    return `${b}`;
  }
};
let calculation = see(
  elementDimension,
  elementWidthParse,
  elementPaddingParse,
  elementBorderWidthParse
);
console.log(calculation);
