//Ejercicio 5
let numbers = [1, 2, 3, 4, 5];
let nNumbers = 0;
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  nNumbers++;
  total = total + numbers[i];
}
let media = total / nNumbers;
console.log(media);

//Ejercicio 6

let pelis = [];
let text6 = document.querySelector(".js-text");
let button6 = document.querySelector(".js-button");
let answer;
function addThings(e) {
  e.preventDefault(); //prevenir que envíe formulario
  answer = text6.value;
  pelis.push(answer);
  for (let movie of pelis) {
    console.log(
      `¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`
    );
  }
}
button6.addEventListener("click", addThings);
