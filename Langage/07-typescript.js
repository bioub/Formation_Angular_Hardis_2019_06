"use strict";
function hello(name) {
    return "Hello my name is " + name.toUpperCase();
}
var firstNames = ['Jean', 'Eric'];
firstNames.forEach(function (firstName) {
    console.log(hello(firstName));
});
var Voiture = /** @class */ (function () {
    function Voiture(marque) {
        this.marque = marque;
    }
    Voiture.prototype.demarrer = function () {
        console.log("Je d\u00E9marre la " + this.marque);
    };
    return Voiture;
}());
