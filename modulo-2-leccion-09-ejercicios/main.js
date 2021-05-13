// Ejercicio 1
function get100Numbers() {
  let array1 = [];
  let number = 0;
  for (let i = 0; i <= 99; i++) {
    number++;
    array1.push(number);
  }
  return array1;
}
console.log(get100Numbers());

//Ejercicio 2
function getReversed100Numbers() {
  let array2 = get100Numbers();
  array2.reverse();
  return array2;
}
console.log(getReversed100Numbers());

//Ejercicio 3
let lostNumbers = [4, 8, 15, 16, 23, 42];
let arrayPares = [];
let arrayPrimos = [];

lostNumbers.forEach(function (lostNumbers) {
  if (lostNumbers % 2 === 0) {
    arrayPares.push(lostNumbers);
  }
});
console.log(arrayPares);

lostNumbers.forEach(function (a) {
  if (a % 3 === 0) {
    arrayPrimos.push(a);
  }
});
console.log(arrayPrimos);
let concatNumbers = arrayPares.concat(arrayPrimos);
console.log(concatNumbers);

//Ejercicio 4
