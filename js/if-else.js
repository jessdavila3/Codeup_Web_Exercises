/**
 * Created by jessedavila on 10/6/16.
 */
var grade1 = 70;
var grade2 = 80;
var grade3 = 95;

if ((grade1+grade2+grade3)/3 >= 80) {
    console.log("You're awesome")
} else {
    console.log("You need to practice more")
}

var Cameron = 180;
var Ryan = 250;
var George = 320;
var discount = .2;
var elligibleAmount = 200;

if (Cameron > elligibleAmount) {
    Cameron -= Cameron * discount;
}

if (Ryan > elligibleAmount) {
    Ryan -= Ryan * discount;
}

if (George > elligibleAmount) {
    George -= George * discount;
}

console.log("Cameron will pay $" + Cameron);
console.log("Ryan will pay $" + Ryan);
console.log("George will pay $" + George);

var flipACoin = Math.floor(Math.random()*2)

if (flipACoin == 0) {
    console.log("Buy a car");
} else if (flipACoin == 1) {
    console.log("Buy a house")
}


var message = (flipACoin == 0) ? "Buy a car" : "Buy a house";
console.log(message);