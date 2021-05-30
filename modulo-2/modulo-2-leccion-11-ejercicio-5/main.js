let body = document.querySelector(".body");
let radios = document.querySelectorAll('input[name="color"]');
function changeColor(evt) {
  if (evt.target.value === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
    localStorage.setItem("color", evt.target.value);
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    localStorage.setItem("color", evt.target.value);
  }
}
radios.forEach(function (elemento) {
  elemento.addEventListener("change", changeColor);
});
let color = localStorage.getItem("color");
body.classList.add(color);
