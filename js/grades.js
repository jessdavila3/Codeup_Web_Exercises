/**
 * Created by jessedavila on 10/11/16.
 */
"use strict";

function average3Grads() {
    var totalGrade = 0;
    for (var i = 0; i < 3; i++) {
        var gradePrompt = prompt("What was your score on test #" + (i+1) + "?");
        if (isNaN(gradePrompt)) {
            gradePrompt = prompt("That's not a number.\nWhat was your score on test #" + (i+1) + "?");
        } else
        var grade = parseInt(gradePrompt);
        totalGrade += grade;
    }
    var average = totalGrade/3;
    if (average > 80) {
        alert("You're awesome!\nYou're average is " + average.toFixed(2) + ".");
    } else {
        alert("You need to practice more.\nYou're average is " + average.toFixed(2) + ".");
    }
}

function genericGradesAverage() {
    var i = 0;
    var totalGrade = 0;
    do {
        var gradePrompt = prompt("What was your score on test #" + (i+1) + "?");
        if (isNaN(gradePrompt)) {
            gradePrompt = prompt("That's not a number.\nWhat was your score on test #" + (i+1) + "?");
        } else
        var grade = parseInt(gradePrompt);
        totalGrade += grade;
        var proceed = confirm("Continue entering grades? ");
        i++;
    } while (proceed);
    var average = totalGrade/i;
    if (average > 80) {
        alert("You're awesome!\nYou're average is " + average.toFixed(2) + ".");
    } else {
        alert("You need to practice more.\nYou're average is " + average.toFixed(2) + ".");
    }

}

// call functions at the end.
//average3Grads();
genericGradesAverage();