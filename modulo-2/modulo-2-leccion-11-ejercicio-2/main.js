let divContainer = document.querySelector(".js-divContainer");
let inputText = document.querySelector(".js-inputText");
let button = document.querySelector(".js-button");
function result() {
  fetch(`https://swapi.dev/api/people/?search=${inputText.value}`)
    .then((response) => response.json())
    .then((data) => {
      let content = "";
      data.results.forEach(function (people) {
        content += `<li>Nombre: ${people.name} y género: ${people.gender}</i>`;
      });
      divContainer.innerHTML = `<ul> ${content}</ul>`;
    });
}
button.addEventListener("click", result);
