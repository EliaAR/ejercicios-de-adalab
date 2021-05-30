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

//Ejercicio 4a
function recuento() {
  let pUno = document.querySelector(".js-containerTasks");
  let countTareas = tasks.length;
  let completedTareas = 0;
  let todoTareas = 0;
  tasks.forEach(function (tarea) {
    if (tarea.completed === true) {
      completedTareas++;
    } else {
      todoTareas++;
    }
  });
  console.log(countTareas);
  let content = `<p>Hay ${countTareas} tareas. ${completedTareas} completadas y ${todoTareas} por realizar</>`;
  pUno.innerHTML = content;
}
recuento();

//Ejercicicio 4b
let divContainer = document.querySelector(".js-containerCheck");
let content4 = "";
tasks.forEach(function (tarea) {
  if (tarea.completed === true) {
    content4 += `<li class="js-liTarea">${tarea.name}<input type="checkbox" class="js-checkbox" checked/></li>`;
  } else {
    content4 += `<li>${tarea.name}<input type="checkbox" class="js-checkbox"/></li>`;
  }
});
divContainer.innerHTML = `<ul> ${content4}</ul>`;

// Ejercicio 4c (ya existen las etiquetas tras la linea 62)
let losCheckboxes = document.querySelectorAll(".js-checkbox");

losCheckboxes.forEach(function (elCheckbox, index) {
  elCheckbox.addEventListener("change", function inputChange(event) {
    let liElement = event.currentTarget.parentElement;
    liElement.classList.toggle("js-liTarea");
    tasks[index].completed = !tasks[index].completed;
    recuento();
  });
}); // Declarar función dentro para poder acceder a index del array de tareas que es el mismo que el tarea actual

// linea 77: remember! eventos son para elementos HTML, no para objetos ni arrays. Por eso hay que meterlo en un forEach para que itere; ya que querySelectorAll devuelve un array.
