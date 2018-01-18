function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var Pi = 2 * Math.PI;
    var newArray = [];
    var a = 0;
    for (var i = 0; i < arr.length; i++) {
        a = earthRadius + arr[i].avgAlt;
        var cubed = Math.pow(a, 3) / GM;
        var squared = Math.sqrt(cubed);
        var finalAnswer = Math.round(Pi * squared);
        newArray.push([{ name: arr[i].name, orbitalPeriod: finalAnswer }]);
    }


    return newArray;
}

console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));
