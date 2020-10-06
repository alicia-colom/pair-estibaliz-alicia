"use strict";

const dogAge = 10;

const yearOne = 15;
const yearTwo = 9;
const yearRest = 5;

if (dogAge === 1) {
	console.log(
		`Si eres un perro y tienes ${dogAge} año, tendrías ${yearOne} años en humano.`
	);
} else if (dogAge === 2) {
	console.log(
		`Si eres un perro y tienes ${dogAge} años, tendrías ${
			yearOne + yearTwo
		} años en humano.`
	);
} else {
	console.log(
		`Si eres un perro y tienes ${dogAge} años, tendrías ${
			yearOne + yearTwo + yearRest * (dogAge - 2)
		} años en humano.`
	);
}
