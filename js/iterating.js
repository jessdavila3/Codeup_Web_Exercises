(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Jesse', 'Jen', 'Ian', 'Sam'];

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    //exercise 2

    var grades = [100,80,90,80,50];
    function average(grades) {
        var total = 0;
        for (var i = 0; i<grades.length; i++) {
            total += grades[i];
        }
        total /= grades.length;
        return total;
    }
    var grade = average(grades);
    console.log("You made a grade of " + grade);

    var moreNames = ['Jenny', 'Justin', 'Max', 'Arthur', 'Jeryn', 'Donald', 'Jose', 'Sam'];

    //exercise 3
    //getJNames filters out and displays only names that start with a J.
    function getJNames(names) {
        for (var i = 0; i < names.length; i++) {
            if (names[i].indexOf("J") !== -1) { //if indexOf doesn't find a J, it will return a -1
                console.log(names[i]);
            } else {
                continue;
            }
        }
    }
    function getNames(names) {
        for (var i = 0; i < names.length; i++) {
            console.log(names[i]);
        }
    }

    console.log("this is a filterd list of just names with a J\nThere are " + moreNames.length + " names in total in the list.");
    getJNames(moreNames);
    console.log("here is the full list...");
    getNames(moreNames); asdflkj
    moreNames.forEach(function (element, index, array) {

        // element is the shape name
        // index is the iterator
        // array is the shapes array itself

        console.log('The name at index ' + index + ' is: ' + element);
    });


})();
