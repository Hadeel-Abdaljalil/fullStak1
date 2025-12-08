var x= "Hadeel";
var age =23;

window.console.log("My name is " + x  + age + " years old.");

window.console.log(`My name is ${x} and I am learning JavaScript`);
window.console.log(`My name is ${x} and I am ${age} years old.`);



//object without values
var person2 = {};



//object with values
var person1 = {
    name:"Mona",
    age:20,
    city:"Amman",
    major:"CS",
};

//addding new attributes to the object
person2.name ="Hadeel";

//update object property or attribute
person1.name ="Sara";

person1 ={age:25, city:"Irbid"};

//accessing object property or attribute
window.console.log("person1 name is " + person1.name);

var car = {
    brand:"Toyota",
    model:"Corolla",
    year:2020,
    color:"Red",
    engine: {
        type:"V6",
        horsepower:300,
        age: 5,
    },
    
};



























//========================================================================================//
//objects

//how to define an object

var car ={};
var cat ={
    name: "Luna",
    age: 3,
    color: "black",
}
window.console.log("cat name is " + cat.name);
window.console.log("cat age is " + cat.age);
window.console.log("cat color is " + cat.color);

// how to change object properties
cat.age = 4;
window.console.log("cat age after birthday is " + cat.age);
//how to remove properties
delete car.color;
// how to add new property to the object
cat.breed = "Siamese";
window.console.log("cat breed is " + cat.breed);
// how to define a method for the object
cat.meow = function(){
    window.console.log("Meow! Meow!");
}
cat.meow();

// how to define another object
var student ={
    name: "Ahmed",
    age: 20,
    major: "Computer Science",
    greet: function(){
        window.console.log("Hello, my name is " + this.name + " and I am studying " + this.major);
    }
}
student.greet();

// how to change student major  
student.major = "Information Technology";
student.greet();    
// how to add new property to student object
student.university = "ABC University";
window.console.log("student university is " + student.university);

//how to add object inside another object
var employee ={
    name: "Sara",
    age: 28,
    position: "Software Engineer",
    address: {  
        street: "123 Main St",
        city: "Amman",
        country: "Jordan"
    },
    introduce: function(){
        window.console.log("Hello, my name is " + this.name + " and I work as a " + this.position); 
    }
}
employee.introduce();
window.console.log("employee city is " + employee.address.city);


//========================================================================================//
// arrays
var colors = ["red", "green", "blue"];
window.console.log("first color is " + colors[0]);
window.console.log("second color is " + colors[1]);
window.console.log("third color is " + colors[2]);

// how to change array element
colors[1] = "yellow";
window.console.log("second color after change is " + colors[1]);
// how to add new element to the array
colors.push("purple");
window.console.log("all colors after adding purple: " + colors);
// how to remove last element from the array
colors.pop();
window.console.log("all colors after removing last color: " + colors);
// how to loop through the array
var colorsOutput = "";
for(var i=0; i<colors.length; i++){
    colorsOutput += colors[i] + " ";
}
document.getElementById("colors").innerHTML = colorsOutput;

//how to find array length
window.console.log("number of colors in the array: " + colors.length);

//========================================================================================//
// Array of objects
var books = [
    {
        title: "The Great Gatsby",
    },
    {
        title: "To Kill a Mockingbird",
    },
    {
        title: "1984",
    }
];
window.console.log("first book title is " + books[0].title);
window.console.log("second book title is " + books[1].title);
window.console.log("third book title is " + books[2].title);
// loop through the array of objects
var booksOutput = "";
for(var i=0; i<books.length; i++){
    booksOutput += books[i].title + " ";
}
document.getElementById("books").innerHTML = booksOutput;

// how to add new object to the array
books.push({title: "Moby "});
window.console.log("all book titles after adding Moby : ");
for(var i=0; i<books.length; i++){
    window.console.log(books[i].title);
}(5, 10);
var result11 = (function(num1, num2){
    return num1 * num2;
})(4, 5);
window.console.log("Multiplication Result from IIFE = " + result11);
// how to remove object from the array
books.pop();



