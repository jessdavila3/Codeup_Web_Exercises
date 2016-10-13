(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    console.log(planetsArray.join("<br>"));
    //       Why might this be useful?

    // Bonus: Create a second string that would display your planets in an unordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    function ArrayToList(planets) {
        var planetsList = "<ul><li>";
        planetsList += planets.join("</li><li>");
        planetsList += "</li></ul>";
        return planetsList;
    }

    console.log(ArrayToList(planetsArray));


})();
