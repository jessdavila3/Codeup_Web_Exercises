/**
 * Created by jessedavila on 10/17/16.
 */

var left = document.getElementById('leftNumberDisplay');
var operand = document.getElementById('operandDisplay');
var right = document.getElementById('rightNumberDisplay');
var operation = 0;
var refresh = false;

function operate() { //this determines how or when to calculate, or to clear
    if (operand.innerHTML == '+') {
        operation = 1;
    } else if (operand.innerHTML == '-') {
        operation = 2;
    } else if (operand.innerHTML == '*') {
        operation = 3;
    } else if (operand.innerHTML == '/') {
        operation = 4;
    } else if (operand.innerHTML == '=') {
        calculate(operation);
    } else if (operand.innerHTML == 'ac') {
        left.innerHTML = '';
        right.innerHTML = '';
        operand.innerHTML = '';
    } else {
        alert("uhhh, there might be some sort of error going on here...");
    }
}

function calculate(operation) { // finds operator number and performs operation on left and right variables.
    if (operation == 1) {
        right.innerHTML = parseInt(left.innerHTML) + parseInt(right.innerHTML);
        left.innerHTML = '';
    } else if (operation == 2) {
        right.innerHTML = parseInt(left.innerHTML) - parseInt(right.innerHTML);
        left.innerHTML = '';
    } else if (operation == 3) {
        right.innerHTML = parseInt(left.innerHTML) * parseInt(right.innerHTML);
        left.innerHTML = '';
    } else if (operation == 4) {
        right.innerHTML = parseInt(left.innerHTML) / parseInt(right.innerHTML);
        left.innerHTML = '';
    } else {
    alert('error');
    }
    refresh = true;

}

function populate() {
    var selected = this;
    if (refresh) { /*this is a on off switch that resets the display after pressing a new number once you've hit equals*/
        left.innerHTML = '';
        right.innerHTML = '';
        operand.innerHTML = '';
        refresh = false;
    }
    if (!isNaN(selected.innerHTML)) {
        if (operand.innerHTML == '') {
            left.innerHTML += selected.innerHTML;
        } else if (operand.innerHTML !== '') {
            right.innerHTML += selected.innerHTML;
        }
    } else if (isNaN(selected.innerHTML)) {
        operand.innerHTML = selected.innerHTML;
        operate(selected.innerHTML);
    }
}

document.getElementById('one').addEventListener('click', populate, false);
document.getElementById('two').addEventListener('click', populate);
document.getElementById('three').addEventListener('click', populate);
document.getElementById('four').addEventListener('click', populate);
document.getElementById('five').addEventListener('click', populate);
document.getElementById('six').addEventListener('click', populate, false);
document.getElementById('seven').addEventListener('click', populate, false);
document.getElementById('eight').addEventListener('click', populate, false);
document.getElementById('nine').addEventListener('click', populate, false);
document.getElementById('zero').addEventListener('click', populate, false);
document.getElementById('plus').addEventListener('click', populate, false);
document.getElementById('minus').addEventListener('click', populate, false);
document.getElementById('multiply').addEventListener('click', populate, false);
document.getElementById('divide').addEventListener('click', populate, false);
document.getElementById('equalTo').addEventListener('click', populate, false);
document.getElementById('clear').addEventListener('click', populate, false);
