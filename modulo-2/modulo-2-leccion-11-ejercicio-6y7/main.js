let inputText = document.querySelector(".js-inputText");
let paragraph = document.querySelector(".js-paragraph");
let inputTextTwo = document.querySelector(".js-inputTextTwo");
let paragraphTwo = document.querySelector(".js-paragraphTwo");
let objectName = { name: "", surname: "" };

function changeThings() {
  paragraph.innerText = inputText.value;
  objectName.name = inputText.value;
  localStorage.setItem("name", JSON.stringify(objectName));
}
inputText.addEventListener("keyup", changeThings);

function changeThingsTwo() {
  paragraphTwo.innerText = inputTextTwo.value;
  objectName.surname = inputTextTwo.value;
  localStorage.setItem("name", JSON.stringify(objectName));
}
inputTextTwo.addEventListener("keyup", changeThingsTwo);

if (localStorage.getItem("name")) {
  objectName = JSON.parse(localStorage.getItem("name"));
}

paragraph.innerText = objectName.name;
inputText.value = objectName.name;
paragraphTwo.innerText = objectName.surname;
inputTextTwo.value = objectName.surname;
