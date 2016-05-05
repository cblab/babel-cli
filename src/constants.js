const names = ['John', 'Doe'];
names.push('Smith'); // just the assignment is immutable
console.log(names);

// use var at the top level?
// never use var again?
// default to use let and change to const later?
//let months = ['January', 'February']; //quite improbable that these values will change in the future
const months = ['January', 'February'];