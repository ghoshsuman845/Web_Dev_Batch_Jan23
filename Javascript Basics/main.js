// declaration: allocation memory/space to a variable
// initialization: assigning value to a variable

// Interactions in JS: alert, prompt, confirm
alert("Something went wrong");

// prompt(text, [default]): helps to get user input
// cancel => null
// typeof : tells you the datatype of variable
// parseInt : converts string to number
var value = parseInt(prompt("What's the age?"))
console.log(value);
console.log("data type: ", typeof value)
 
if (value >= 18) {
    console.log("eligible to vote")
} else {
    console.log("not eligible")
}

// OK => true
// cancel => false
var result = confirm("Is user adult?")
console.log(result);