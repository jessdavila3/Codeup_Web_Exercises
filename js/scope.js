/**
 * Created by jessedavila on 10/11/16.
 */
(function () {
"use strict";

var myNameIs = 'Jesse'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.
function sayHello(name) {
    console.log(name + " says hello!");
}

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
sayHello(myNameIs);

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.
function isOdd(num) {
    var num = (num % 2) ? console.log(num + " is an odd number") : console.log(num + " is an even number");

}
// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
isOdd(random);

function add(a,b) {
    if ((typeof a || typeof b) != "number") {
        console.log("You should put a number if you're going to do math stuff");
    } else
        var result = a + b;
    return result;
}

function subtract(a, b) {
    if ((typeof a || typeof b) != "number") {
        console.log("You should put a number if you're going to do math stuff");
    } else
        var result = a - b;
    return result;
}

function multiply(a, b) {
    if ((typeof a || typeof b) != "num ber") {
        console.log("You should put a number if you're going to do math stuff");
    } else
        var result = a * b;
    return result;
}

function divide(a, b) {
    if ((typeof a || typeof b) != "number") {
        console.log("You should put a number if you're going to do math stuff");
    } else if (b == 0) {
        console.log("You can't divide by 0...");
    } else
        var result = a/b;
    return result;
}

function square(num) {
    if ((typeof a || typeof b) != "number") {
        console.log("You should put a number if you're going to do math stuff");
    } else
        var result = multiply(num, num);
    return result;
}

function sumOfSquares(a, b) {
    if ((typeof a || typeof b) != "number") {
        console.log("You should put a number if you're going to do math stuff");
    } else
        var result = add(square(a),square(b));
    return result;
}

console.log("sum of squares of 5 and 2 is... " + sumOfSquares(5,2));
console.log("5 squared is... " + square(5));

})();
