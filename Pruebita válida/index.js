let arrow = document.querySelector(".js-flechita");
//let elementArrow = window.getComputedStyle(arrow);
//let arrowCollapse = elementArrow.getPropertyValue("display");
let caja = document.querySelector(".js-collapse");
function collapse() {
  caja.classList.toggle("none");
  arrow.classList.toggle("down ");
}

//if (arrowCollapse === "block") {
// caja.classList.remove("block");
//  caja.classList.add("none");
// } else {
//  caja.classList.remove("none");
//  caja.classList.add("block");
// }
//}
arrow.addEventListener("click", collapse);
