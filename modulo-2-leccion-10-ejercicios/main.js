let button = document.querySelector(".js-button");
let div = document.querySelector(".js-div");
let inputText = document.querySelector(".js-inputText");

function result() {
  fetch(`https://api.github.com/users/${inputText.value}`)
    .then((response) => response.json())
    .then((data) => {
      let content = `<p>Nombre: ${data.login}</p><p>Número de repositorios: ${data.public_repos}<img src="${data.avatar_url}"></img>`;
      div.innerHTML = content;
    });
}
button.addEventListener("click", result);
