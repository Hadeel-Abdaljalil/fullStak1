//====================================================================================================//
// functions
function greetUser() {
    window.console.log("hello user, welcome to our website");
}   
greetUser(); // function call

function greetUserWithName(name) {
    window.console.log("hello " + name + ", welcome to our website");
}
greetUserWithName("Hadeel");
greetUserWithName("Ahmed");
greetUserWithName("Sara");
function addNumbers(num1, num2) {
    var sum = num1 + num2;
    window.console.log("sum = " + sum);
}
addNumbers(5, 10);
addNumbers(20, 30);
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
var result = multiplyNumbers(5, 10);
window.console.log("multiplication result = " + result);
var result2 = multiplyNumbers(20, 30);
window.console.log("multiplication result = " + result2);
//====================================================================================================//
// arrays
var fruits = ["apple", "banana", "orange", "mango"];
window.console.log("first fruit = " + fruits[0]);
window.console.log("second fruit = " + fruits[1]);
window.console.log("all fruits = " + fruits);
// loop through the array
var fruitsOutput = "";
for (var i = 0; i < fruits.length; i++) {
    fruitsOutput += fruits[i] + " ";
}
document.getElementById("fruits").innerHTML = fruitsOutput;
// add a new fruit to the array
fruits.push("grape");
window.console.log("all fruits after adding grape = " + fruits);
// remove the last fruit from the array
fruits.pop();
window.console.log("all fruits after removing last fruit = " + fruits);
//====================================================================================================//
// objects
var person = {
    name: "Hadeel",
    age: 25,
    isStudent: false,
    greet: function() {
        window.console.log("hello, my name is " + this.name);
    }
};
window.console.log("person name = " + person.name);
window.console.log("person age = " + person.age);
window.console.log("is person student? = " + person.isStudent);
person.greet();
// change person age
person.age = 26;
window.console.log("person age after birthday = " + person.age);
// add a new property to the object
person.city = "Cairo";
window.console.log("person city = " + person.city);
//====================================================================================================//
// date and time
var currentDate = new Date();
window.console.log("current date and time = " + currentDate);
var currentYear = currentDate.getFullYear();
window.console.log("current year = " + currentYear);
var currentMonth = currentDate.getMonth() + 1; // months are zero-based
window.console.log("current month = " + currentMonth);
var currentDay = currentDate.getDate();
window.console.log("current day = " + currentDay);
var currentHour = currentDate.getHours();
window.console.log("current hour = " + currentHour);
var currentMinute = currentDate.getMinutes();
window.console.log("current minute = " + currentMinute);
var currentSecond = currentDate.getSeconds();
window.console.log("current second = " + currentSecond);
//====================================================================================================//
// strict mode
"use strict";
var strictVar = 20;
window.console.log("value of strictVar = " + strictVar);
// trying to use an undeclared variable will cause an error in strict mode
// undeclaredVar = 30; // uncommenting this line will cause an error



//====================================================================================================//
