"use strict";

//EJERCICIO 7

//Función constructora: la usamos para crear una plantilla para declarar objetos.
//Usamos el this para dar valor a una clave de objeto.
function plantillaAdalaber(nombre, edad, trabajo) {
	this.name = nombre;
	this.age = edad;
	this.job = trabajo;
}

//Creamos(declaramos) 3 adalabers.
//Las adalabers son constantes de tipo objeto.
//La primera constante la creamos como objeto, normalmente.
//Para crear la segunda y tercera constante usamos la funcion constructora que creamos arriba.
const adalaber1 = {
	name: "María",
	age: 29,
	job: "diseñadora",
};
const adalaber2 = new plantillaAdalaber("Lucía", 31, "ing. química");
const adalaber3 = new plantillaAdalaber("Susana", 34, "periodista");

//Creamos el array adalabers que contiene a las 3 constantes.
const adalabers = [adalaber1, adalaber2, adalaber3];
//Comprobamos en consola que el array está correctamente creado.
console.log(adalabers);

//Creamos una nueva adalaber y la añadimos al array
const adalaber4 = new plantillaAdalaber("Rocío", 25, "actriz");
adalabers[3] = adalaber4;
//Comprobamos en consola que el array está correcto.
console.log(adalabers);

//SIGUIENTE PUNTO DEL EJERCICIO 7:
//Primera estadistica : ¿cuántas son?
function countAdalabersFunc() {
	console.log(adalabers.length);
}

/* const countAdalabers */
