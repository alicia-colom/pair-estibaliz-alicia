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

// Segunda estadística : y así podemos listar:
	for (let position = 0; position < adalabers.length ;position++){
		const agesAdalabers = adalabers[position].age;
		console.log (agesAdalabers);
		// const result = agesAdalabers / adalabers.length;
		// console.log(result);
	}

	/*for of para recorrer los valores de los objetos del array, y podemos usarlo para sumar los valores*/

// let prueba = 0;
// for (const listAdalabers of adalabers) {
// 	prueba = prueba + listAdalabers;
// 	console.log (prueba);
// }


// averageAge ();
// console.log (`${averageAge()} `);
//  adalaber1.age 
// console.log ((adalaber1.age + adalaber2.age + adalaber3.age + adalaber4.age + adalaber5.age) / adalabers.length);