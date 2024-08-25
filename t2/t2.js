'use strict';

// i.

const numbers = [];

// ii.

const num1 = prompt('Anna eka numero:');
console.log(`Anna eka numero: ${num1}`);
numbers.push(num1);
const num2 = prompt('Anna toka numero:');
console.log(`Anna toka numero: ${num2}`);
numbers.push(num2);
const num3 = prompt('Anna kolmas numero:');
console.log(`Anna kolmas numero: ${num3}`);
numbers.push(num3);
const num4 = prompt('Anna neljäs numero:');
console.log(`Anna neljäs numero: ${num4}`);
numbers.push(num4);
const num5 = prompt('Anna viides numero:');
console.log(`Anna viides numero: ${num5}`);
numbers.push(num5);

// iii.
console.log('Numerot:', numbers);

// iv & v.
const find = prompt('Anna numero, jonka haluat etsiä:');
if (numbers.includes(find)) {
  console.log(`Numero ${find} löytyi`);
} else {
  console.log('Numeroa ei löytynyt.');
}

// vi.
numbers.pop();

// vii.
console.log('Numbers after popping:', numbers);

// viii.
console.log(
  'Numerot järkässä:',
  numbers.sort((a, b) => a - b)
);
