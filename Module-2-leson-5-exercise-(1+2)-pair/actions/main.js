"use strict";
// EJERCICIO 1

// // elemento HTML
// const button = document.querySelector(".alert");

// // handler
// function changeText() {
//   const paragraph = document.querySelector(".text");
//   paragraph.innerHTML = "mi primer click. Ole yo y la madre que me parió";
// }
// // listerner
// button.addEventListener("click", changeText);

// EJERCICIO 2

const button = document.querySelector(".btn");
const nombre = document.querySelector(".name");

function inner() {
  console.log(`Hola + ${nombre.value}`);
}
button.addEventListener("click", inner);
