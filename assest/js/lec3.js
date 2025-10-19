// control statement : conditional statement , loops
// if condition
var userAge = window.prompt("please enter your age");
userAge = Number(userAge); // convert the string to number  
// or  userAge = parseInt(userAge); // convert the string to number
// or  userAge = +userAge; // convert the string to number

if (userAge >= 18) {
    window.console.log("you are eligible to vote");
    document.getElementById("vote").innerHTML = "you are eligible to vote";
}
else if (userAge <= 0) {
    window.console.log("invalid age");
    document.getElementById("vote").innerHTML = "invalid age";
}
else {
    window.console.log("you are not eligible to vote");
    document.getElementById("vote").innerHTML = "you are not eligible to vote";
}




// if the user have bank account 
var useraccount = true;


if (useraccount == true) { 
    window.console.log("you can withdraw money");
    document.getElementById("bank").innerHTML = "you can withdraw money";
}

//====================================================================================//

if (useraccount == false){
    window.console.log("you cannot withdraw money");
    document.getElementById("bank").innerHTML = "you cannot withdraw money";
}

// or

if (useraccount == true) {
    window.console.log("you can withdraw money");
    document.getElementById("bank").innerHTML = "you can withdraw money";
}
else if (useraccount == false) {
    window.console.log("you cannot withdraw money");
    document.getElementById("bank").innerHTML = "you cannot withdraw money";
}
else {
    window.console.log("you need to open bank account first");
    document.getElementById("bank").innerHTML = "you need to open bank account first";
}



//====================================================================================================//
// nested if condition
var userAge = window.prompt("please enter your age");
userAge = Number(userAge); // convert the string to number
var son = window.prompt("please enter number of sons");

if (userAge >= 18) {
    if (userAge >= 60) {
        if (son == 0) {
            window.console.log("you are eligible to vote and you are senior citizen and you have no son");
            document.getElementById("vote").innerHTML = "you are eligible to vote and you are senior citizen and you have no son";
            return;
        } else {
            window.console.log("you are eligible to vote and you are senior citizen and you have son");
            document.getElementById("vote").innerHTML = "you are eligible to vote and you are senior citizen and you have son";
        }
        window.console.log("you are eligible to vote and you are senior citizen");
        document.getElementById("vote").innerHTML = "you are eligible to vote and you are senior citizen";
    }
    else {
        window.console.log("you are eligible to vote");
        document.getElementById("vote").innerHTML = "you are eligible to vote";
    }
}
else {
    window.console.log("you are not eligible to vote");
    document.getElementById("vote").innerHTML = "you are not eligible to vote";
}

var age = 18;
var accountType;
var sons = 0;
var job;
if (age >= 18) {
    window.console.log("eligible to make bank account");
    if (accountType == "savings") {
        window.console.log("you are eligible to open savings account");
        if (sons == 0) {
            window.console.log("you have no son");
            return;
        }
        else if (sons > 0) {
            window.console.log("you have son");
        }
        else {
            window.console.log("invalid number of sons");
            return;
        }


        window.console.log("you are eligible to open savings account");
    }
    else if (accountType == "current") {
        window.console.log("you are eligible to open current account");
        if (job == "government") {
            window.console.log("you are government employee");
        }
        else if (job == "private") {
            window.console.log("you are private employee");
        }
        else if (job == "business") {
            window.console.log("you are business person");
        }
        else {
            window.console.log("invalid job type");
        }
    }
    else {
        window.console.log("invalid account type");
    }

}


else if (age <= 18) {
    window.console.log("not eligible to make bank account");
}



//====================================================================================================//
// if else if ladder
var userAge = window.prompt("please enter your age");
userAge = Number(userAge);
if (userAge < 0) {
    window.console.log("invalid age");
    document.getElementById("vote").innerHTML = "invalid age";
}
else if (userAge >= 18 && userAge < 60) {
    window.console.log("you are eligible to vote");
    document.getElementById("vote").innerHTML = "you are eligible to vote";
}
else if (userAge >= 60) {
    window.console.log("you are eligible to vote and you are senior citizen");
    document.getElementById("vote").innerHTML = "you are eligible to vote and you are senior citizen";
}
else {
    window.console.log("you are not eligible to vote");
    document.getElementById("vote").innerHTML = "you are not eligible to vote";
}
//====================================================================================================//
// switch case
var day = window.prompt("please enter day number");
day = Number(day);
var dayName;

switch (day) {
    case "0": 
        dayName = "sanday";
        break;
    case 2:
        dayName = "monday";
        break;
    case 3:
        dayName = "tuesday";
        break;
    case 4:
        dayName = "wednesday";
        break;
    case 5:
        dayName = "thursday";
        break;
    case 6:
        dayName = "friday";
        break;
    case 7:
        dayName = "saturday";
        break;
    default:
        dayName = "invalid day number";
}
window.console.log("day name is " + dayName);

if(day == 1){
    dayName = "sunday";
}
else if(day == 2){
    dayName = "monday";
}
else if(day == 3){
    dayName = "tuesday";
}   
else if(day == 4){
    dayName = "wednesday";
}
else if(day == 5){
    dayName = "thursday";
}
else if(day == 6){
    dayName = "friday";
}
else if(day == 7){
    dayName = "saturday";
}
else{
    dayName = "invalid day number";
}




switch (day) {
    case 1:
        dayName = "Saturday";
        break;
    case 2:
        dayName = "Sunday";
        break;
    case 3:
        dayName = "Monday";
        break;
    case 4:
        dayName = "Tuesday";
        break;
    case 5:
        dayName = "Wednesday";
        break;
    case 6:
        dayName = "Thursday";
        break;
    case 7:
        dayName = "Friday";
        break;
    default:
        dayName = "invalid day number";
        break;
}
window.console.log("day name is " + dayName);
document.getElementById("day").innerHTML = "day name is " + dayName;