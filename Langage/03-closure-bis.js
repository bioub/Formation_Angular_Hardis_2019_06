function externe(msg) {
  function interne() {
    console.log(msg);
  }
  return interne;
}

const helloFct = externe('Hello');
helloFct();

// pile d'appels
// ^
// |
// |
// |externe - interne/helloFct
// +------------------> temps

// Dans 100ms : 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// Dans 100ms : 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 100);
}

// Dans 100ms : 0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
