var stage = require('./stages');
function grid() {
    var gridOfDeadCells = [];
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            gridOfDeadCells.push({
                'x': x,
                'y': y,
                pathWay: false,
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
        userFound = stage.stage1.find(element => element.x === randomValues.x && element.y === randomValues.y && element.occupied === "none");
        if (userFound) {
            userFound.occupied = item;
            allItem.push(userFound)
            i++;
            userFound = undefined
        }
    }
    console.log("user", allItem)
    return userFound
}
function userPoints() {

}

function gridToDisplay(oldUserLocation, userLocation, userLife, enemies, weapon, currentWeapon) {
    var health = 10
    var board = grid();
    var location;
    for (var i = 0; i < board.length; i++) {
        for (var z = 0; z < stage.stage1.length; z++) {
            if (stage.stage1[z].x === board[i].x && stage.stage1[z].y === board[i].y) {
                board[i] = stage.stage1[z]
            }
        }
    }
    var theOldLocation = {};
    var theNewLocation = {};
    var findingOldUserLocation = board.find(element => element.x === oldUserLocation.x && element.y === oldUserLocation.y);
    var findingNewUserLocation = board.find(element => element.x === userLocation.x && element.y === userLocation.y);
    var findingAllTheItemsThatAppearInStagesAndNewLocation = stage.stage1.find(element => element.x === findingNewUserLocation.x && element.y === findingNewUserLocation.y);

    if (findingAllTheItemsThatAppearInStagesAndNewLocation === undefined) {
        board[board.indexOf(findingOldUserLocation)].occupied = "player";
        board[board.indexOf(findingNewUserLocation)].occupied = "none";
        theOldLocation = board[board.indexOf(findingOldUserLocation)];
        theNewLocation = board[board.indexOf(findingOldUserLocation)];
    } else {
        if (findingNewUserLocation.occupied === "enemies" && userLife < enemies) {


        } else if (findingNewUserLocation.occupied === "health") {
            userLife = userLife + health
            console.log("userlife", userLife)

        } else if (findingNewUserLocation.occupied === "weapon")
            currentWeapon = currentWeapon + weapon

        board[board.indexOf(findingOldUserLocation)].occupied = "none";
        board[board.indexOf(findingOldUserLocation)].display = null;
        board[board.indexOf(findingNewUserLocation)].occupied = "player";
        theOldLocation = board[board.indexOf(findingOldUserLocation)];
        theNewLocation = board[board.indexOf(findingNewUserLocation)];


    }
    console.log("findingOldUserLocation", theOldLocation, "findingNewUserLocation", theNewLocation)
    return { newBoard: board, oldLocation: theOldLocation, currentLocation: theNewLocation, playerLife: userLife };
}




creatingEnemies(stage.stage1, "health")
creatingEnemies(stage.stage1, "enemies")
creatingEnemies(stage.stage1, "weapon")


module.exports = {
    grid, creatingEnemies, gridToDisplay
}
