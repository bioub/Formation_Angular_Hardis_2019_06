setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 1000);
setTimeout(() => console.log('C'), 0);
setTimeout(() => console.log('D'), 500);
console.log('E');

// pile d'appels
// ^
// |
// |
// |st - st - st - st - log ... cbC ... cbA - cbD
// +----------0ms---------------4ms-----501ms-502ms---> temps
//                      E       C       A     D 

// File d'attente 0ms: cbC
// File d'attente 4ms: 
// File d'attente 500ms : cbA - cbD 
// File d'attente 501ms : cbD 
// File d'attente 502ms : 
