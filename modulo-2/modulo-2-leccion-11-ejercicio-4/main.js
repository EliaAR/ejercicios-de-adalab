let inputText = document.querySelector(".js-inputText");
let paragraph = document.querySelector(".js-paragraph");
function changeThings() {
  paragraph.innerText = inputText.value;
  localStorage.setItem("name", inputText.value);
}
inputText.addEventListener("keyup", changeThings);

let name = localStorage.getItem("name");
paragraph.innerText = name;
inputText.value = name;
