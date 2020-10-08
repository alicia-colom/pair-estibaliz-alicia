"use strict";
// Ejericicio 1
// objeto : bloque de código dentro de una variable.
const adalaber1 = {
  // Propiedades> clave:valor,
  name: "Susana",
  age: 34,
  // objeto dentro de objeto


  activity: {
    // dentro de una función
    const job = "perdidista"
   if (job.length = 0) {
     return "estoy en paro";

    } else {
      return job
// literal: no tiene trabajo
    }
  },
};
let text = document.querySelector(".js-text");
text.innerHTML = `Mi nombre es ${adalaber1.name} , tengo ${adalaber1.age} años y ${adalaber1.activity.work} estoy ${adalaber1.activity.job}`;

// // parte 2
// const adalaber2 = {
//   surname: "Lovelace",
//   name: "Ada",
//   job: "programadora",
//   age: 102,
// };
// let text2 = document.querySelector(".js-text");
// text.innerHTML = `Mi nombre es ${adalaber2.name} ${adalaber2.surname}. Tengo ${adalaber2.age} años y curro como ${adalaber2.job}`;

// Ejercicio 2 - métodos
// const adalaber2 = {};
// adalaber2.surname = "Lovelace";
// adalaber2.name = "Ada";
// adalaber2.job = "programadora";
// adalaber2.age = 102;
// adalaber2.run = (phrase) => `estoy corriendo ${phrase}`;
// // método
// console.log(adalaber2.run("huyendo"));
