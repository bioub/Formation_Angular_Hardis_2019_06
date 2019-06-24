function hello(name) {
  return `Hello my name is ${name}`;
}

const firstNames = ['Jean', 'Eric'];

firstNames.forEach((firstName) => {
  console.log(hello(firstName));
});

