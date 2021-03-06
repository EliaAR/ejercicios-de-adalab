"use strict";

document
  .querySelector(".js-btn-post-new-user")
  .addEventListener("click", () => {
    const inputName = document.querySelector(".js-input-name");
    const inputEmail = document.querySelector(".js-input-email");
    const bodyParams = {
      userName: inputName.value,
      userEmail: inputEmail.value,
    };
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyParams),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-new-user-result", responseData);
      });
  });

document.querySelector(".js-btn-get-users").addEventListener("click", () => {
  const filterByName = document.querySelector(".js-inputFilter");
  const filterByMail = document.querySelector(".js-inputFilterMail");
  const bodyParamsGet = {
    filterByName: filterByName.value,
    filterByMail: filterByMail.value,
  };
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyParamsGet),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Server response:", responseData);
      printJson(".js-get-users-result", responseData);
    });
});

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
