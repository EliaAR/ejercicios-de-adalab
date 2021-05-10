//Ejercicio 4
let title = document.querySelector("h1");
let option = document.querySelector(".b");
title.innerHTML = title.innerHTML + " " + option.innerText;

//Ejercicio 6
let empty = document.querySelector(".lorem");
let content =
  '<h1>Lorem ipsum</h1><img src="http://via.placeholder.com/350x150" alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';
empty.innerHTML = content;

//Ejercicio 8
let hidden = document.querySelector(".two");
hidden.classList.add("disable");
