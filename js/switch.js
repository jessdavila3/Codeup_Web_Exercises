/**
 * Created by jessedavila on 10/6/16.
 */
"use strict";

var luckyNumber = Math.floor(Math.random()* 6)

var discount1 = .1;
var discount2 = .25;
var discount3 = .3;
var discount4 = .5;
var discount5 = 1;

var receiptTotal = 60;
var total = 60;

switch (luckyNumber) {
    case 1:
        total -= (receiptTotal * discount1);
        break;
    case 2:
        total -= (receiptTotal * discount2);
        break;
    case 3:
        total -= (receiptTotal * discount3);
        break;
    case 4:
        total -= (receiptTotal * discount4);
        break;
    case 5:
        total -= (receiptTotal * discount5);
        break;
    default:
        total;
}

console.log("Total: " + total);

