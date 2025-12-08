//Functions without parameters and without return type

function greet(){
    window.console.log("Hello World");
}

 greet(); // function call


//Functions with parameters and without return type
function greetUser(name){
    window.console.log("Hello " + name);
}
greetUser("Hadeel");
greetUser("Ahmed");

//Functions with parameters and with return type
function addNumbers(num1, num2){
    var sum = num1 + num2;
    return sum;
}
var result = addNumbers(5, 10);
window.console.log("Sum = " + result);
var result2 = addNumbers(20, 30);
window.console.log("Sum = " + result2);

//Functions with default parameters
function multiplyNumbers(num1=1, num2=1){
    return num1 * num2;
}
var result3 = multiplyNumbers(5, 10);
window.console.log("Multiplication Result = " + result3);
var result4 = multiplyNumbers();
window.console.log("Multiplication Result = " + result4);

//---------------------------------------------------------------------------------------------------------------//


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
(function(name){
    window.console.log("Hello from IIFE, " + name);
})("Hadeel");
(function(num1, num2){
    var sum = num1 + num2;
    window.console.log("Sum from IIFE = " + sum);
})(5, 10);
(function(num1, num2){
    return num1 * num2;
})(4, 5);
var result11 = (function(num1, num2){
    return num1 * num2;
})(4, 5);
window.console.log("Multiplication Result from IIFE = " + result11);
