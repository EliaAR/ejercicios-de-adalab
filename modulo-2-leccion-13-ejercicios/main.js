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

//Ejercicio 5
let pins = [2389, 2384, 2837, 5232, 8998];
let parNumbers = pins.filter((number) => number % 2 === 0);
console.log(parNumbers);

//Ejercicio 6
const usersTwo = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];
let password = usersTwo.filter((number) => {
  if (number.pin % 2 === 0) {
    return number.name;
  }
});
console.log(password);

//Ejercicio 7
let times = [56, 9, 45, 28, 35];
const result = times.reduce((acc, number) => acc + number) / times.length;
console.log(result);

//Ejercicio 8
let runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];
let winner = runners.reduce((acc, runner) => {
  if (acc.time > runner.time) {
    return runner;
  } else {
    return acc;
  }
}, runners[0]);
console.log(winner);
