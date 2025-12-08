// how to add tags dynamically using loops with js
var num = window.prompt("enter a number")

for(var i=1 ; i<=num ; i++){
    document.getElementById("list").innerHTML += "<li>" + i + "</li>";
}

for(var  i=1; i<= num  ; i++){
    document.getElementById("selectNumber").innerHTML += "<option>" + i + "</option>";
}

// while loop
var count = 90;
var whileOutput = "";


while (count <= 10){
    window.console.log("hello world " + count   );
    count++;
}
 
window.console.log("loop1 ended" + count);





// do while loop
count = 90;
do {
    window.console.log("hello world " + count   );
    count++;

} while (count <= 10);
window.console.log("loop2 ended" + count);


// break and continue
var breakOutput = "";
for (var i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }
    breakOutput = breakOutput + i + " ";
}   
document.getElementById("breakNumbers").innerHTML = breakOutput;


var continueOutput = "";
for (var i = 1; i <= 10; i++) {
    if (i == 6) {
        continue;
    }   
    continueOutput += i + " ";
}
document.getElementById("continueNumbers").innerHTML = continueOutput;



// hoisting
window.console.log("value of hoistedVar = " + hoistedVar); // undefined
var hoistedVar = 10;
window.console.log("value of hoistedVar after declaration = " + hoistedVar); // 10




// window.console.log("y = " +  y);


// for(var i=1; i<=5; i++){
//     window.console.log("Iteration number " + i);
//     var y = i * 2; //y= 2 , 4 , 6 , 8 , 10
// }



// window.console.log("Value of y after the loop is " + y); // y = 10


// window.console.log("x = " +  x);
