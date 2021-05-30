//Ejercicio 5
let character = "▲";
function tree1(heightTree) {
  for (let i = 0; i < heightTree; i++) {
    let lineTree = "";
    let parameterNumber = i + 1;
    for (let j = 0; j < parameterNumber; j++) {
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

//Separación
console.log("");
console.log("");

//Ejercicio 7
let empty = " ";
function tree2(heightTree) {
  let lineStart = "";
  let LineStartWidth = heightTree - 1;
  for (let z = 0; z < LineStartWidth; z++) {
    lineStart += empty;
  }
  console.log(`${lineStart}${start}`);
  for (let i = 0; i < heightTree; i++) {
    let lineTree = "";
    let lineCharacterWidth = i * 2 + 1;
    let LineEmptyWidth = heightTree - 1 - i;
    for (let j = 0; j < LineEmptyWidth; j++) {
      lineTree = lineTree + empty;
    }
    for (let k = 0; k < lineCharacterWidth; k++) {
      lineTree = lineTree + character;
    }
    console.log(lineTree);
  }
  console.log(`${lineStart}${verticalLine}`);
}
tree2(5);
