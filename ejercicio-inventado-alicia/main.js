"use strict";

function plantillaAlumno(matematicas, literatura, fisica) {
	this.math = matematicas;
	this.lit = literatura;
	this.fis = fisica;
}

//primero de la ESO
const alumno1 = new plantillaAlumno(1, 2, 3);
const alumno2 = new plantillaAlumno(5, 6, 7);

//segundo de la ESO
const alumno3 = new plantillaAlumno(11, 12, 13);
const alumno4 = new plantillaAlumno(15, 16, 17);

const primEso = [alumno1, alumno2];
const segEso = [alumno3, alumno4];

////////////////

function notaMedia(curso, materia) {
	let sumNotas = 0;
	for (const alumno of curso) {
		sumNotas = sumNotas + alumno[materia];
	}
	return sumNotas / curso.length;
}

console.log(
	"Nota media de MATEMÁTICAS de 1º de ESO: " + notaMedia(primEso, "math")
);
console.log(
	"Nota media de LITERATURA de 1º de ESO: " + notaMedia(primEso, "lit")
);
console.log("Nota media de FÍSICA de 1º de ESO: " + notaMedia(primEso, "fis"));
console.log(
	"Nota media de MATEMÁTICAS de 2º de ESO: " + notaMedia(segEso, "math")
);
console.log(
	"Nota media de LITERATURA de 2º de ESO: " + notaMedia(segEso, "lit")
);
console.log("Nota media de FÍSICA de 2º de ESO: " + notaMedia(segEso, "fis"));
