'use strict';

// haetaan html
const kohde = document.querySelector('#target');

// alustetaan taulukko
const tortut = [];

// kysytään käyttäjältä tietoja
const lkm = prompt('Syötä torttujen lukumäärä:');

for (let i = 0; i < lkm; i++) {
  const title = prompt('Syötä Runebergintortun merkki:');
  const rating = prompt('Syötä tortun arvio (1-5):');
  const torttu = {
    title,
    rating,
  };

  tortut.push(torttu); // lisää taulukkoon
}

tortut.sort((a, b) => b.rating - a.rating); // b - a = highest to lowest

// tulostaminen taulukkoon

for (const torttu of tortut) {
  const html = `<tr>
                  <td>${torttu.title}</td>
                  <td>${torttu.rating}</td>
                </tr>`;

  kohde.insertAdjacentHTML('beforeend', html); // --> insertAdjacentHTML
}

console.log(tortut);
