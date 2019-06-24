function hello(name: string) {
  return `Hello my name is ${name.toUpperCase()}`;
}

const firstNames = ['Jean', 'Eric'];

firstNames.forEach((firstName) => {
  console.log(hello(firstName));
});

class Voiture {
  protected marque: string;

  constructor(marque) {
    this.marque = marque;
  }
  
  demarrer() {
    console.log(`Je démarre la ${this.marque}`);
  }
}