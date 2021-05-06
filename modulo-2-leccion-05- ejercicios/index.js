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
