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
const adalaber5 = new plantillaAdalaber("Inmaculada", 21, "diseñadora");
adalabers[3] = adalaber4;
adalabers[4] = adalaber5;
//Comprobamos en consola que el array está correcto.
console.log(adalabers);

//SIGUIENTE PUNTO DEL EJERCICIO 7:
//Primera estadistica : ¿cuántas son?
function countAdalabersFunc() {
	console.log(adalabers.length);
}
countAdalabersFunc();
/* const countAdalabers */

// Segunda estadística :

/* let agesAdalabers = 0;  
// No podemos definir la variable agesAdalabers fuera de la función, pq el valor con el que entraría en la función sería el valor con el que salió del for (por ej. la 1º vez es 140, Y entraríamos la 2º vez en la función con la agesAdalabers=140 en lugar de 0)  */

function averageAge() {
	let agesAdalabers = 0;
	for (let position = 0; position < adalabers.length; position++) {
		agesAdalabers = agesAdalabers + adalabers[position].age;
		console.log(agesAdalabers); // imprime las 5 edades
	}
	console.log("Suma de todas las edades usando for clásico: " + agesAdalabers);
	return agesAdalabers / adalabers.length;
}

console.log("Media de todas las edades usando for clásico: " + averageAge());

/*for of para recorrer los valores de los objetos del array, y podemos usarlo para sumar los valores*/

function averageAgeForOf() {
	let agesAdalabers = 0;
	for (const oneAdalaber of adalabers) {
		//	for (const oneAdalaber = adalabers[position] of adalabers) {
		agesAdalabers = agesAdalabers + oneAdalaber.age;
		console.log(agesAdalabers);
	}
	console.log("Suma de todas las edades usando for of: " + agesAdalabers);
	return agesAdalabers / adalabers.length;
}

console.log("Media de todas las edades usando for of: " + averageAgeForOf());

//Pruebo a añadir un nuevo objeto a nuestro array, para comprobar que vuelve a hacer el cálculo de la media de edades incluyendo este nuevo valor.
const adalaber6 = new plantillaAdalaber("Rita", 100, "flamenca");
adalabers[5] = adalaber6;
console.log(averageAge());
//FUNCIONA!!!

// console.log (`${averageAge()} `);
//  adalaber1.age
// console.log ((adalaber1.age + adalaber2.age + adalaber3.age + adalaber4.age + adalaber5.age) / adalabers.length);
