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

