let divContainer = document.querySelector(".js-container");
let inputText = document.querySelector(".js-inputText");
let button = document.querySelector(".js-button");
function result() {
  fetch(`https://api.github.com/orgs/${inputText.value}`)
    .then((response) => response.json())
    .then((data) => {
      return fetch(data.repos_url)
        .then((response) => response.json())
        .then((dataRepos) => {
          let content = "";
          dataRepos.forEach(function (repo) {
            content += `<li>${repo.name}</li>`;
          });
          divContainer.innerHTML = `<ul> ${content}</ul>`;
        });
    });
}
button.addEventListener("click", result);
