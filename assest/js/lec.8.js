//types of functions in JavaScript
// there are 4 types of functions in JavaScript
// 1. Function declarations
// 2. Functions as expressions
// 3. Arrow functions
// 4. Immediately Invoked Function Expression (IIFE)
// the differences between them are in the syntax and the way they are invoked
// Function declarations are hoisted, while function expressions and arrow functions are not
// IIFE are executed immediately after they are defined
// Function declarations are the most common way to define functions in JavaScript
// Functions as expressions are useful when you want to pass a function as an argument to another function
// Arrow functions are a more concise way to write functions and they do not have their own 'this' context
// IIFE are useful for creating a new scope and avoiding polluting the global namespace
// Examples of each type of function are provided below
// Function Declarations
//  يمكن استخدامها قبل تعريفها في الكود بسبب الـ hoisting.

// بينما Function Expressions و Arrow Functions لا يمكن استخدامها قبل تعريفها.

//Function declarations
function addTwoNumbers(num1, num2){
    return num1 + num2;
}
var resultAdd = addTwoNumbers(10, 15);
window.console.log("Addition Result = " + resultAdd);
var resultAdd2 = addTwoNumbers(25, 35);
window.console.log("Addition Result = " + resultAdd2);


//Functions as expressions
var divideNumbers = function(num1, num2){
    return num1 / num2;
}

var result5 = divideNumbers(20, 5);
window.console.log("Division Result = " + result5);
var result6 = divideNumbers(15, 3);
window.console.log("Division Result = " + result6);


//Arrow functions
var subtractNumbers = (num1, num2) => {
    return num1 - num2;
}
var result7 = subtractNumbers(10, 5);
window.console.log("Subtraction Result = " + result7);
var result8 = subtractNumbers(20, 8);
window.console.log("Subtraction Result = " + result8);

//Single line arrow function
var squareNumber = num => num * num;
var result9 = squareNumber(5);
window.console.log("Square Result = " + result9);
var result10 = squareNumber(10);
window.console.log("Square Result = " + result10);


//Immediately Invoked Function Expression (IIFE)
(function(){
    window.console.log("This is an IIFE");
})();

// IIFE with parameters
(function(name){
    window.console.log("Hello from IIFE, " + name);
})("Hadeel");

// IIFE with parameters and performing operations
(function(num1, num2){
    var sum = num1 + num2;
    window.console.log("Sum from IIFE = " + sum);
})(5, 10);

// IIFE that returns a value
(function(num1, num2){
    return num1 * num2;
})(4, 5);

// IIFE that returns a value and storing it in a variable
var result11 = (function(num1, num2){
    return num1 * num2;
})(4, 5);

window.console.log("Multiplication Result from IIFE = " + result11);
