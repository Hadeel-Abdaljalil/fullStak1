//loop
//print from `1 to 10`
//don't repeat yourself DRY

// window.console.log("1");
// window.console.log("2");
// window.console.log("3");
// window.console.log("4");
// window.console.log("5");
// window.console.log("6");
// window.console.log("7");
// window.console.log("8");
// window.console.log("9");
// window.console.log("10");


// for (var i=1 ; i<=20 ; i++){
//  window.console.log(i);
// }



//print even numbers from 1 to 

// for (var i = 2; i <=10 ; i+=2){
//     window.console.log(i); // 2,4,6,8,10 , 5 time
// }

// for (var i =1 ; i <=10 ; i++){ // 1 to 10 , 10 times
//     if(i % 2 == 0){
//         window.console.log(i);
//     }
// }
//print odd numbers from 1 to 10
// for (var i =1 ; i <=10 ; i++){ // 1 to 10 , 10 times
//     if(i % 2 != 0){
//         window.console.log(i);
//     }
// }


for (var i = 1; i <=10 ; i+=2){
    window.console.log(i); // 1,3,5,7,9 , 5 time
    document.getElementById("demo").innerHTML += i + "<hr>";
}


//====================================================================================================//

var num = window.prompt("please enter a number to print its multiplication table");
num = Number(num);

var tableOutput = "";   
for (var i = 1; i <= 10; i++) {
    document.getElementById("num").innerHTML = tableOutput += num + " * " + i + " = " + (num * i) + "<br>";
}

