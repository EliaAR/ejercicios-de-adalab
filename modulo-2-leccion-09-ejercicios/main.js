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
