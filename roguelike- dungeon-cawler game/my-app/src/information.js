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

function creatingEnemies(stage1) {
    for (var i = 0; i <= 4; i++) {
        var randomValues = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10), occupied: "enemies" }
        var userFoud = stage.stage1.find(element => element.x === randomValues.x && element.y === randomValues.y)
        if (userFoud) {
            userFoud.occupied = "enemies"
        }
        console.log("stage.stage1", userFoud)
    }

    return stage1
}

creatingEnemies(stage.stage1)

module.exports = {
    grid, creatingEnemies
}
