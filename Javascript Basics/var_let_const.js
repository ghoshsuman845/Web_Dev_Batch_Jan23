// Hoisting: it moves the function, variable and class value to the
// top of their scope. 

// Hoisting in JS is behavior in which a variable and a function can be used even before declaration.


// undefined: value is declared but not initialized
// not defined: variable declaration is absent or variable is not present


// var keyword: can redeclare and reinitialize a variable
// var is present in global memory space
console.log(a);
var a = 10;
console.log(a);
var a = 20;
console.log(a);



// let: can reinitialize a variable but not redeclare
// let is present in another memory space rather than global
// in script memory space you cannot access a variable until it's initialized a value
// Temporal Dead Zone(TDZ): is the period of time during which let
// and const declarations cannot be accessed.
// console.log(b);
let b;
console.log(b);
b = 20;
console.log(b);
b = 30;
console.log(b + a);


// var b = 40;
// console.log(b);



// const: you cannot reinitialize and redeclare a variable
// const is present in another memory space rather than global
console.log(c);
const c = 10;
console.log(c);