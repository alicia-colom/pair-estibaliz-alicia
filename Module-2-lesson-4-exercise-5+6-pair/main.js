"use strict";

function getEl(a) {
  return document.querySelector(a);
}

getEl(".js-btn").innerHTML = "jijiji";

const par2El = getEl(".par2");
par2El.innerHTML = "eighgieghai";

//MISMA FUNCION PERO COMO FUNCION ARROW: 
/* const prueba = (a) => return document.querySelector(a); */


/*  const btnEl = getEl(".btn");

document.querySelector(".btn").innerHTML = "Hola";
    **
    getEl(".btn").innerHTML = "Hola";
 */