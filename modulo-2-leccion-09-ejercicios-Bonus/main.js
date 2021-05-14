//Ejercicio 5
let character = "▲";
function tree1(heightTree) {
  for (i = 0; i < heightTree; i++) {
    let lineTree = "";
    let parameterNumber = i + 1;
    for (j = 0; j < parameterNumber; j++) {
      lineTree = lineTree + character;
    }
    console.log(lineTree);
  }
}
tree1(5);

//Separación
console.log("");
console.log("");

//Ejercicio 6
let start = "★";
let verticalLine = "|";
console.log(start);
tree1(5);
console.log(verticalLine);
