//Ejercicio 1
let numbers = [1, 2, 3, 4, 5];
let nNumbers = 0;
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  nNumbers++;
  total = total + numbers[i];
}
let media = total / nNumbers;
console.log(media);
