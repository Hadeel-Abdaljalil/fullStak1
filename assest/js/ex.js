
// sort three numbers in descending order
// 9 5 7 ==> 9 7 5

// var a =9;
// var b =5;
// var c =7;

// if(a>b && a>c){
//     window.console.log(a);
//     if(b>c){
//         window.console.log(b);
//         window.console.log(c);
//     }else{
//         window.console.log(c);
//         window.console.log(b);
//     }
// }
// else if(b>a && b>c){
//     window.console.log(b);
//     if(a>c){
//         window.console.log(a);
//         window.console.log(c);
//     }else{
//         window.console.log(c);
//         window.console.log(a);
//     }
// }
// else{
//     window.console.log(c);
//     if(a>b){
//         window.console.log(a);
//         window.console.log(b);
//     }else{
//         window.console.log(b);
//         window.console.log(a);
//     }
// }


// 125 ==> not palendromie 521 , 125
//121 ==> palendromie 121 , 121 

var test = window.prompt("enter a three digit number");

var num1 = test % 10; //3

var num2 =parseInt( test / 100); // 1.23 ==> 1



if(num1 == num2){
    window.console.log("palendromie");
}else{
    window.console.log("not palendromie");
}


