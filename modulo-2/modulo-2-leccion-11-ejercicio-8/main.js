let divContainer = document.querySelector(".js-divContainer");
let inputText = document.querySelector(".js-inputText");
let button = document.querySelector(".js-button");
let arrayPeople = [];

if (localStorage.getItem("arrayPeople")) {
  arrayPeople = JSON.parse(localStorage.getItem("arrayPeople"));
}

function result() {
  fetch(`https://swapi.dev/api/people/?search=${inputText.value}`)
    .then((response) => response.json())
    .then((data) => {
      let content = "";
      data.results.forEach(function (people) {
        content += `<li>Nombre: ${people.name} y género: ${people.gender}</i>`;
      });
      divContainer.innerHTML = `<ul> ${content}</ul>`;
      arrayPeople.push({
        searchValue: inputText.value,
        results: data.results,
      });
      localStorage.setItem("arrayPeople", JSON.stringify(arrayPeople));
    });
}

function comprobation() {
  let cachedResult = arrayPeople.find(
    (item) => item.searchValue === inputText.value
  );
  if (!cachedResult) {
    result();
  } else {
    let content = "";
    cachedResult.results.forEach(function (people) {
      content += `<li>Nombre: ${people.name} y género: ${people.gender}</i>`;
    });
    divContainer.innerHTML = `<ul> ${content}</ul>`;
  }
}
button.addEventListener("click", comprobation);
