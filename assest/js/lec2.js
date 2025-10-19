
// undefined vs null

var a;
var b = null;

window.console.log("a equal " + a + "   data type of a  " + typeof (a));
window.console.log("b equal " + b + "   data type of b  " + typeof (b));

//===================================================================================================//
// Math operations

var num1 = 10;
var num2 = 3;

var sum = num1 + num2;

window.console.log("sum = " + sum);

window.console.log(num1 + num2);

num1 = num1 + 2;
num1 += 2; // compound assignment operator
num1 -= 2;
num1 *= 2;
num1 /= 2;
num1 %= 2; // modulus operator - remainder of division


//====================================================================================================//
// Increment and Decrement operators

var num3 = 5;
// ++num3; pre increment
// num3 = num3 + 1;
window.console.log("num3 = " + num3++); // post increment
window.console.log("num3 = " + num3);

num3--; // num3 = num3 - 1;
window.console.log("num3 = " + num3);

//====================================================================================================//
// Concatination

var a = "hello";
var b = 4;
var c = 5;
var x = true;

window.console.log(b + c + a + b + c + x);
// 9hello45true
window.console.log(a + b + c);
// hello45
window.console.log(b + c + a);
// 9hello
window.console.log("h" + b + c);
// h45
window.console.log("h" + (b + c));
// h9
window.console.log(b + c + "h");
// 9h
window.console.log(b + c + "h" + b);
// 9h4
window.console.log("h" + (b + c) + b);
// h94

//====================================================================================================//
// Comparison operators     

var num4 = 10;
var num5 = 5;
var num6 = "10";

window.console.log(num4 == num5); // false
window.console.log(num4 == num6); // true  - only value is compared
window.console.log(num4 === num6); // false - value and data type are compared
window.console.log(num4 != num5); // true
window.console.log(num4 !== num6); // true
window.console.log(num4 > num5); // true
window.console.log(num4 < num5); // false
window.console.log(num4 >= num6); // true
window.console.log(num4 <= num6); // true
//====================================================================================================//
// implicit

var x = "5";
var y = 5;
window.console.log(x + y);  //55

var x = Number("5"); // explicit conversion
var y = 5;
window.console.log(x + y);  //10

window.console.log(2 + "6"); // 26
window.console.log(2 + Number("6")); // 8
window.console.log(2 * "6"); // 12
window.console.log(2 * Number("6")); // 12
window.console.log(2 * "hello"); // NaN - not a number
window.console.log(2 * Number("hello")); // NaN - not a number

//====================================================================================================//
// prompt

// window.alert("welcome to our website");

//  window.prompt("please enter your name");

var userName = window.prompt("please enter your name");
window.console.log("user name is " + userName);
window.console.log("data type of user name is " + typeof (userName));
// the data type of the value entered by user is always string

// how to print welcome to our website + user name in the page

document.getElementById("welcome").innerHTML = " Welcome to our website " + userName;

