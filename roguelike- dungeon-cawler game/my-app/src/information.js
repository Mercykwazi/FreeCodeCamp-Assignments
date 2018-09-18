var stage = require('./stages');
function grid() {
    var wholeGrid = [];
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            wholeGrid.push({
                'x': x,
                'y': y,
                pathWay: false,
                occupied: "none"
            })
        }
    }
    return wholeGrid;
}
function weapon() {
    var userFound = {};
    for (var i = 0; i < 1; i++) {
        var randomValues = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10), occupied: "weapon" }
        var findLocation = stage.stage1.find(element => element.x === randomValues.x && element.y === randomValues.y && element.occupied === "none");
        findLocation ? findLocation.occupied = "weapon" : weapon();
        userFound = findLocation;
    }
    return userFound
}

function movePlayer(oldUserLocation, userLocation, userLife, enemies, weapons) {
    var board = grid();
    var enemiesImpact = enemies;
    var newLife = userLife;
    var health = 30;
    var enemies = 25
    var currentWeapon = weapons
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
        if (findingNewUserLocation.occupied === "Health") {
            newLife = newLife + health
            board[board.indexOf(findingOldUserLocation)].occupied = "none";
            board[board.indexOf(findingOldUserLocation)].display = null;
            board[board.indexOf(findingNewUserLocation)].occupied = "player";
            theOldLocation = board[board.indexOf(findingOldUserLocation)];
            theNewLocation = board[board.indexOf(findingNewUserLocation)];
        } else if (findingNewUserLocation.occupied === "Enemies") {
            newLife = newLife - enemies;
            enemiesImpact.life = 40;
            if (enemiesImpact.life < userLife) {
                board[board.indexOf(findingOldUserLocation)].occupied = "none";
                board[board.indexOf(findingOldUserLocation)].display = null;
                board[board.indexOf(findingNewUserLocation)].occupied = "player";
                theOldLocation = board[board.indexOf(findingOldUserLocation)];
                theNewLocation = board[board.indexOf(findingOldUserLocation)];
                enemiesImpact.life = enemiesImpact.life - 20
            } else if (enemiesImpact.life > userLife) {
                newLife = userLife - 10;
                board[board.indexOf(findingOldUserLocation)].occupied = "player";
                board[board.indexOf(findingNewUserLocation)].occupied = "none";
                theOldLocation = board[board.indexOf(findingOldUserLocation)];
                theNewLocation = board[board.indexOf(findingOldUserLocation)];
            }

        }  else if (findingNewUserLocation.occupied === "weapon") {
            console.log("the weapon is found")
            console.log("the weapon is found",currentWeapon)
            
            currentWeapon.forEach(weapon => {
                var foundWeapon = board.find(item => {
                    console.log("board", foundWeapon)
                    return item.x === weapon && item.y === weapon.y
                })
            })
        }
        else {
            board[board.indexOf(findingOldUserLocation)].occupied = "none";
            board[board.indexOf(findingOldUserLocation)].display = null;
            board[board.indexOf(findingNewUserLocation)].occupied = "player";
            theOldLocation = board[board.indexOf(findingOldUserLocation)];
            theNewLocation = board[board.indexOf(findingNewUserLocation)];
        }
    }
    return { newBoard: board, oldLocation: theOldLocation, currentLocation: theNewLocation, playerLife: newLife, impactOfEnemies: enemiesImpact,impactOfWeapons:currentWeapon };

}

function enemiesAndHealth() {
    var grid = stage.stage1;
    var i = 0;
    var enemies = [];
    var health = [];
    var found = "Enemies";
    while (i < 8) {
        var randomValues = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) };
        var position = grid.find(element => element.x === randomValues.x && element.y === randomValues.y && element.occupied === "none");
        found = i <= 3 ? "Enemies" : "Health";


        if (position) {
            if (i <= 3) {
                position.occupied = found;
                enemies.push(position)
                found = undefined
                i++;
            } else {
                position.occupied = found;
                health.push(position)
                found = undefined
                i++;
            }
        }
    }

    return { healthSet: health, enemySet: enemies }
}


module.exports = {
    grid, movePlayer, enemiesAndHealth, weapon
}
