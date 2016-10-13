(function(){
    "use strict";

    // TODO: Create person object
    // var person = todo;
    var person = new Object();

    // TODO: Create firstName and lastName properties in your person object; assign your name to them
    person.firstName = "Jesse";
    person.lastName = "Davila";


    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties
    person.sayHello = function() {
        alert(person.firstName + " " +person.lastName + " says... hello.");
    }

    // Say hello from the person object.
    // person.sayHello();
    person.sayHello();


})();
