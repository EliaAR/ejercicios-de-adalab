//Ejercicio3
let carajote = document.querySelector(".js-paragraph");
function newParagraph() {
  let paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  carajote.insertAdjacentElement("beforeend", paragraph);
}
carajote.addEventListener("mouseover", newParagraph);

//Ejercicio4
