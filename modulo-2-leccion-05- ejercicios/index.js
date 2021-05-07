//Ejercicio1
let moreNames = document.querySelector(".js-content1");
function change() {
  let newPhrase = "Mi primer click, ¡ole yo y la mujer que me parió!";
  moreNames.innerText = newPhrase;
}
moreNames.addEventListener("click", change);

//Ejercicio2
let newButton = document.querySelector(".js-exercise2-button");
function enterName() {
  let newInput = document.getElementById("js-exercise2-input");
  console.log(`hola ${newInput.value}`);
}
newButton.addEventListener("click", enterName);

//Ejercicio3
let carajote = document.querySelector(".js-paragraph3");
let pAdded = false;
function newParagraph() {
  if (!pAdded) {
    let paragraph = document.createElement("p");
    paragraph.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
    carajote.insertAdjacentElement("beforeend", paragraph);
  }
  pAdded = true;
}
carajote.addEventListener("mouseover", newParagraph);

//Ejercicio4
//let exercis4 = document.querySelector(".js-exercise4");
//function changeColor() {
//if (window.innerHeight + window.scrollY >= 250) {
//exercise4.classList.add("orange");
//} else {
//exercise4.classList.add("black");
//}
//}
//exercis4.addEventListener("scroll", changeColor);

//Ejercicio5
let exercise5 = document.body;
function changeColor2(event) {
  if (event.key == "r") {
    exercise5.classList.add("orange");
  } else if (event.key == "m") {
    exercise5.classList.add("black");
  }
}
document.addEventListener("keydown", changeColor2);