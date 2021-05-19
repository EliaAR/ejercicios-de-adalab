//Ejercicio 1
let marks = [5, 4, 6, 7, 9];
let inflatedMarks = marks.map((mark) => mark + 1);

console.log(inflatedMarks);

//Ejercicio 2
let names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
let hello = names.map((name) => `Bienvenida ${name}`);
console.log(hello);

//Ejercicio 3
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];
let hi = users.map((user) => {
  if (user.isPremium) {
    return `Bienvenida ${user.name}.Gracias por confiar en nosotras`;
  } else {
    return `Bienvenida ${user.name} ¿Aún no eres Premium?`;
  }
});
console.log(hi);

//Ejercicio 4
let premium = users.filter((name) => name.isPremium);
console.log(premium);
