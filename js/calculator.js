/**
 * Created by jessedavila on 10/17/16.
 */

var left = document.getElementById('leftNumberDisplay');
var operand = document.getElementById('operandDisplay');
var right = document.getElementById('rightNumberDisplay');
var operation = 0;
var refresh = false;

function clearDisplay(operation) {
    if (operation) {
        left.innerHTML = '';
    } else {
        left.innerHTML = '';
        right.innerHTML = '';
        operand.innerHTML = '';
    }
}

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
        clearDisplay();
    } else {
        alert("uhhh, there might be some sort of error going on here...");
    }
}

function calculate(operation) { // finds operator number and performs operation on left and right variables.
    if (operation == 1) {
        right.innerHTML = parseFloat(left.innerHTML) + parseFloat(right.innerHTML);
        clearDisplay(operation);
    } else if (operation == 2) {
        right.innerHTML = parseFloat(left.innerHTML) - parseFloat(right.innerHTML);
        clearDisplay(operation);
    } else if (operation == 3) {
        right.innerHTML = parseFloat(left.innerHTML) * parseFloat(right.innerHTML);
        clearDisplay(operation);
    } else if (operation == 4) {
        right.innerHTML = parseFloat(left.innerHTML) / parseFloat(right.innerHTML);
        clearDisplay(operation);
    } else {
    alert('error');
    }
    refresh = true;

}

function populate() {
    var selected = this;
    if (refresh && isNaN(selected.innerHTML)) { /*this is a on off switch that resets the display after pressing a new number once you've hit equals*/
        left.innerHTML = right.innerHTML;
        right.innerHTML = '';
        refresh = false;
    } else if (refresh) {
        left.innerHTML = '';
        right.innerHTML = '';
        operand.innerHTML = '';
        refresh = false;
    }
    if (!isNaN(selected.innerHTML)) { /*if it's a number, place it appropriately*/
        if (operand.innerHTML == '') {
            left.innerHTML += selected.innerHTML;
        } else if (operand.innerHTML !== '') {
            right.innerHTML += selected.innerHTML;
        }
    } else if (isNaN(selected.innerHTML)) { /*if it's not a number, add it to the operand section and perform the operate function*/
        if (left.innerHTML !== '') {
            operand.innerHTML = selected.innerHTML;
            operate(selected.innerHTML);
        } else if (left.innerHTML == '') {
            alert('please select a number to perform an action on first')
        }

    }
}

var buttons = document.getElementsByClassName('btn');
for (var i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener('click', populate, false);
}
