var x;
var y;
var z;
//Hoisting
var user_name=window.prompt("enter your name!");
document.getElementById("name").innerText = user_name;

//----------------------------//
var x=3; // variable decleration and initialization
var y; // variable decleration
y=5; // variable initialization
window.console.log("z = " + z);//undefined

//decleration of different types of variables
var x; // global variable
var y={}; // object variable
var z=[]; // array variable

x = 10; // number value
y = {name: "Hadeel", age: 25}; // object value
z = ["red", "black", "green"]; // array value 


// to declere an array without values
var b=[]; // empty array

// to declere an array with values
var a = ["red", "blue", "black", "green", "brown"]; // array with values

// modify values
a[0]="green";

// add at the end
a.push("yellow"); 

//remove last element
a.pop(); 
var z =3;

//add at the beginning
a.unshift("purple"); 

//remove first element
a.shift(); 

window.console.log(a);

//sorting an array
var numbers=[5,2,8,1,4];
window.console.log("before sorting: " + numbers);

//sort an array
numbers.sort();

//reverse an array
numbers.reverse();
window.console.log("after sorting: " + numbers);

//splice method
window.console.log(a);
a.splice(1, 3, "pink", "orange",); // add elements at index 1 and remove 3 elements
window.console.log(a);
