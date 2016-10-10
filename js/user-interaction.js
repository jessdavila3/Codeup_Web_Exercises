"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var name = prompt('Hey! What\'s you\'re name?');
// TODO: Show an alert message that welcomes the user based on their input.
alert("Well it's good to have you here, " + name + ".");
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var confirmed = confirm("Do you like pizza?");
if (confirmed) {
    alert("Perfect, it'll be here in about 5 minutes.");
} else {
    alert("You must not have understood me...");
}