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
let exercise4 = document.querySelector(".js-exercise4");
function changeColor() {
  if (window.scrollY >= 250) {
    if (exercise4.classList.contains("black")) {
      exercise4.classList.remove("black");
    }
    if (!exercise4.classList.contains("orange")) {
      exercise4.classList.add("orange");
    }
  } else {
    if (exercise4.classList.contains("orange")) {
      exercise4.classList.remove("orange");
    }
    if (!exercise4.classList.contains("black")) {
      exercise4.classList.add("black");
    }
  }
}
window.addEventListener("scroll", changeColor);

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
