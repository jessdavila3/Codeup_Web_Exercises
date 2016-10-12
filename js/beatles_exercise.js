/**
 * Created by jessedavila on 10/12/16.
 */
"use strict";

var names = ['john', 'paul', 'ringo', 'george', 'yoko'];
var upperNames = [];

// mapping I guess
function toUpperCase(names) {
    names.forEach(function(element, index, array) {
        upperNames.push(element.charAt(0).toUpperCase() + element.slice(1));
    });
    return upperNames;
}

console.log(toUpperCase(names));



var numbers = [1,2,3,4,5,6,7,8,9,10];

function sumOfNumbers(numbers) {
    var sum = 1;
    numbers.forEach(function (element, array) {
        sum *= element;
        });
    return sum;
}

console.log("Sum of numbers is: " + sumOfNumbers(numbers));

var tableSum = "";
tableSum += "<ul>";
function toTable(names) {
    names.forEach(function (element, array) {
        tableSum += "<li>" + element + "</li>"
    });
    tableSum += "</ul>";
    return tableSum;
}

console.log(toTable(names));