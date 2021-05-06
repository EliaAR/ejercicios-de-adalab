//Ejercicio1
let moreNames = document.querySelector(".js-content1");
function change() {
  let newPhrase = "Mi primer click, ¡ole yo y la mujer que me parió!";
  moreNames.innerText = newPhrase;
}
moreNames.addEventListener("click", change);

//Ejercicio3
let carajote = document.querySelector(".js-paragraph3");
//let content = "<p><p>";
function newParagraph() {
  let paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  carajote.insertAdjacentElement("beforeend", paragraph);
  //carajote = content.innterText;
}
carajote.addEventListener("mouseover", newParagraph);

//Ejercicio4
