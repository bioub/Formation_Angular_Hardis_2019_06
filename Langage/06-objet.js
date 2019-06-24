// En JS de nombreux objets sont déjà instanciés

// Au niveau du langage
console.log(typeof Math); // object -> Math.random();
console.log(typeof JSON); // object -> JSON.stringify({a: 'b'});

// Au niveau de Node.js
console.log(typeof process); // object -> process.stdin

// Au niveau du navigateur
console.log(typeof document); // object -> document.getElementById()

// Au niveau de Node.js et du navigateur
console.log(typeof console); // object -> console.log

// L'objet en JS aurait pu s'appeler dictionary
// un objet JS est un système clé/valeur extensible

console.log(typeof Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(typeof Math.sum); // function
console.log(Math.sum(1, 2)); // 3

// Le modèle de JavaScript est dynamique
// vs Java qui est statique
// (garantie que des propriétés et des méthodes existent)

delete Math.sum;
console.log(typeof Math.sum); // undefined

// En TypeScript modèle hybride


// Comment créer des objets
// Syntaxe litéral pour créer un objet directement
const coords = {
  x: 10,
  y: 20,
};

coords.z = 30;

// Construire un objet avec une fonction (les classes n'existant pas)
// fonction constructeur
function Contact(firstName) {
  // pseudo-variable (créée automatiquement au moment de l'appel)
  if (firstName.length > 3) {
    this.firstName = firstName;
  }
}

Contact.prototype.hello = function() {
  console.log(`Hello my name is ${this.firstName}`);
};

const romain = new Contact('Romain');
console.log(romain.firstName);
romain.hello();
console.log(romain.hasOwnProperty('firstName')); // true
console.log(romain.hasOwnProperty('hello')); // false
console.log(romain.toto); // undefined

const eric = new Contact('Eric');
console.log(eric.firstName);
eric.hello();

/*
function Voiture(marque) {
  this.marque = marque;
}

Voiture.prototype.demarrer() {
  console.log(`Je démarre la ${this.marque}`);
}
*/

class Voiture {
  constructor(marque) {
    this.marque = marque;
  }
  demarrer() {
    console.log(`Je démarre la ${this.marque}`);
  }
}
// juste une syntaxe (derrière il y a une fonction constructeur)
console.log(typeof Voiture); // function
console.log(typeof Voiture.prototype.demarrer); // function