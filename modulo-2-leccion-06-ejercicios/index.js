//Ejercicio 1
let place1 = document.querySelector(".js-paragraph");
let phrase1 = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.profesion}`;
place1.innerHTML = phrase1;
let place2 = document.querySelector(".js-paragraph2");
let phrase2 = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.profesion}`;
place2.innerHTML = phrase2;

//Ejercicio 2
adalaber1.run = () => console.log("Estoy corriendo");
adalaber1.run();
adalaber1.runAMarathon = (distance) =>
  console.log(`Estoy corriendo un maratón de ${distance} kilometro`);
adalaber1.runAMarathon(50);
