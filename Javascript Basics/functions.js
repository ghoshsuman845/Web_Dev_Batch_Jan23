// Pure functions:
// 1. take some input and give same fixed output
// 2. they cause no side effects in outside world(outside the function scope)
function add(a, b) {
    console.log("add func", a + b);
}
// This add() function is a pure function. but why?
// 1. for same input 3,5 it always gives the same output
// 2. not causing any effects on the code outside the func
add(3, 5) // 8
add(3, 5) // 8

// Impure functions
let c = 10;
function sum(b) {
    console.log("sum func", c + b);
}
// sum() is an impure function. why?
// because for same input values it gives different output
sum(20) // 10 + 20 = 30
c = 15;
sum(20) // 15 + 20 = 35

let counter = 0;
function incrementCountByOne() {
    console.log("counter", ++counter);
}
// incrementCountByOne() is impure function. why?
// because it is changing the value of counter variable which is present out the function scope
incrementCountByOne()
incrementCountByOne()
incrementCountByOne()
incrementCountByOne()


// Function Declaration : creating a function

// function funct_name() {
    
// }
// funct_name() -> function envokation/ calling
printName()
function printName() {
    console.log("name: ", "Suman Ghosh");
}

// functions taking arguments
function printFullName(a, b) { // parameters
    return a + b;
}
let name = printFullName("aman", "sharma") // arguments
console.log(`The full name is: ${name}`);

// String Interpolation( joining multiple strings)
let x = "ram";
let y = "shyam";
console.log(x + " " + y);
console.log(` ${x} ${y}`);


// Function Expression
// Function Expression is created when the execution reaches it and is usable only from that moment
var func = function() { // anonymous functions; functions with no name
    console.log("func declaration");
}
console.log(func);
func()


// Arrow Functions

// function printName() {
//     console.log("name: ", "Suman Ghosh");
// }

let printNameArrowFunc = () => {
    console.log("name: ", "Suman Ghosh");
}
printNameArrowFunc()

// let sumTwoNums = (a, b) => {
//     return a + b;
// }
let sumTwoNums = (a, b) => a + b;

console.log(sumTwoNums(3, 6));













