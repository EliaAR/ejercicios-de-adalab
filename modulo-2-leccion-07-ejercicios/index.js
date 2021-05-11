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
let adalabersQuantum = 0;
let countAdalabers = stadistic.forEach(function () {
  adalabersQuantum++;
});
console.log(adalabersQuantum);

//Ejercicio 7b
let adalabersQuantumB = 0;
let ageQuantum = 0;
let averaeAge = stadistic.forEach(function (item) {
  adalabersQuantumB++;
  ageQuantum += item.age;
});
let media7b = ageQuantum / adalabersQuantumB;
console.log(media7b);

//Ejerciccio 7c
let youngerQuantum = stadistic[0].age;
let nameQuantum = stadistic[0].name;
let theYoungest = stadistic.forEach(function (item) {
  let valoractual = item.age;
  if (youngerQuantum > valoractual) {
    youngerQuantum = valoractual;
  }
});
console.log(youngerQuantum);

//Ejercicio 7d
let diseñadorasQuantum = 0;
let countDesigners = stadistic.forEach(function (item) {
  let valoractual2 = item.profesion;
  if (valoractual2 === "diseñadora") {
    diseñadorasQuantum++;
  }
});
console.log(diseñadorasQuantum);
