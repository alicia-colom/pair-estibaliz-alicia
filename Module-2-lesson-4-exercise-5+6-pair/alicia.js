"use strict";

// ENUNCIADO DEL EJERCICIO: nos pide sustituir document.querySelector por getEl (básicamente, para tener que escribir menos). Por ejemplo aquí:
// document.querySelector(".js-btn").innerHTML = "el texto que queremos sustituir";


// FUNCIÓN:
function getEl(a) {
  return document.querySelector(a);
}

// USAMOS LA FUNCIÓN: 
getEl(".div1").innerHTML = "jijiji";

// Usamos de nuevo la función, usando otro selector/parametro:
const par1El = getEl(".par1");
par1El.innerHTML = "eighgieghai";




// FUNCIÓN ARROW (realiza la misma acción que la función de arriba, pero está simplificada):
const div2 = (a) => return document.querySelector(a);

  // USAMOS LA FUNCIÓN ARROW invocando a la variable: 
  div2 = (".div2")
  div2.innerHTML = "eighgieghai";



// const btnEl = getEl(".btn");
// document.querySelector(".btn").innerHTML = "Hola";
// **
// getEl(".btn").innerHTML = "Hola";
