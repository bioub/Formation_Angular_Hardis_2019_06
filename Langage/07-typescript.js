"use strict";
function hello(name) {
    return `Hello my name is ${name.toUpperCase()}`;
}
const firstNames = ['Jean', 'Eric'];
firstNames.forEach((firstName) => {
    console.log(hello(firstName));
});
class Voiture {
    constructor(marque) {
        this.marque = marque;
    }
    demarrer() {
        console.log(`Je démarre la ${this.marque}`);
    }
}
