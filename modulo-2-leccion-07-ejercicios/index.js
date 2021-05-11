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

//Ejercicio 7a
let countAdalabers = 0;
stadistic.forEach(function () {
  countAdalabers++;
});
console.log(countAdalabers);

//Ejercicio 7b
let adalabersQuantumB = 0;
let ageQuantum = 0;
stadistic.forEach(function (item) {
  adalabersQuantumB++;
  ageQuantum += item.age;
});
let averaeAge = ageQuantum / adalabersQuantumB;
console.log(averaeAge);

//Ejerciccio 7c
let theYoungest = stadistic[0];
stadistic.forEach(function (item) {
  if (theYoungest > item.age) {
    theYoungest = item;
  }
});
console.log(theYoungest.name);

//Ejercicio 7d
let countDesigners = 0;
stadistic.forEach(function (item) {
  let valoractual2 = item.profesion;
  if (valoractual2 === "diseñadora") {
    countDesigners++;
  }
});
console.log(countDesigners);

//Ejercicio 8
let classes = document.querySelectorAll(".js-name8");
const corp = document.querySelector(".js-container");
function handlerButton() {
  corp.classList.toggle("js-background");
}
for (let i = 0; i < classes.length; i++) {
  classes[i].addEventListener("click", handlerButton);
}

//Ejercicio 10
