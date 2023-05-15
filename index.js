// include an object containing multiple objects
const p = require('./person');

// include an object from another module
console.log(p.person.name);
console.log(`My age is ${p.person.age}`);


// include a class from another module
const P = new p.Person('Dani', 21);
P.greeting()