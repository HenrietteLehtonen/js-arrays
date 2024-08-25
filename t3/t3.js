'use strict';

// i.

const taulukko = [];

// ii.

let numero;

while (numero !== 'stop') {
  numero = prompt('Kirjoita numero tai stop');
  taulukko.push(numero);
  console.log(`Entered number: ${numero}`);
}

// iii & iv.

const kohde = document.querySelector('#target');
kohde.innerHTML = 'Parilliset numerot: ';
let parilliset = false;

for (const num of taulukko) {
  if (num % 2 === 0) {
    // kohde.innerHTML += num "";
    kohde.innerHTML += `${num}, `;
    parilliset = true;
  }
}
if (!parilliset) {
  kohde.innerHTML = 'None.';
}
