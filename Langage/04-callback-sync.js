const firstNames = ['Jean', 'Eric', 'Romain'];

// Style de programmation (Paradigme)
// Impératif (boucle, if...)
for (let i = 0; i < firstNames.length; i++) {
  const firstName = firstNames[i];
  if (firstName.length === 4) {
    const firstNameUpper = firstName.toUpperCase();
    console.log(firstNameUpper);
  }
}

// Paradigme Fonctionnel (fonctions)
firstNames.filter((firstName) => firstName.length === 4)
          .map((firstName) => firstName.toUpperCase())
          .forEach((firstName) => console.log(firstName));



// pile d'appels
// ^
// |               up   up   log  log
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach
// +-----------------------------------> temps
//                           JEAN ERIC