var stage = require('./stages');
function grid() {
    var gridOfDeadCells = [];
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            gridOfDeadCells.push({
                'x': x,
                'y': y,
                pathWay: "false",
                occupied: "none"
            })
        }
    }
    return gridOfDeadCells
}

function creatingEnemies(stage1, item) {
    var i = 0;
    var allItem = [];
    var userFound;
    while (i < 4 && !userFound) {
        var randomValues = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) };
        userFound = stage.stage1.find(element => element.x === randomValues.x && element.y === randomValues.y);
        if (userFound) {
            userFound.occupied = item;
            allItem.push(userFound)
            i++;
            userFound = undefined
        }
    }
    console.log("userFound", allItem)
    return userFound
}

creatingEnemies(stage.stage1, "health")
creatingEnemies(stage.stage1, "enemies")


module.exports = {
    grid, creatingEnemies
}
