// print using alert in window
// window.alert("hello world");

//print in console, used by developers
window.console.log("hello world from console");

// how to reach html element using id
document.getElementById("demo")

// print the element in console
window.console.log(document.getElementById("demo"));

// print the inner html of the element
window.console.log(document.getElementById("demo").innerHTML);

// change the inner html of the element
document.getElementById("demo").innerHTML = " changing the text using javaScript";


window.console.log(document.getElementById("demo").innerHTML);


//===================================================================================================//

var x = 5;
var name = "Hadeel";
var isActive = true;
var y = 10.5;
var char = 'A';

window.console.log("x equal " + x + "   data type of x  " + typeof (x));
// js is a loosely typed language - we don't need to specify the data type of the variable
// you can change the data type of the variable
// java , c# - strongly typed language - you need to specify the data type of the variable
// int x = 5;


x = "hello";

window.console.log("x equal " + y + "   data type of y  " + typeof (y));

