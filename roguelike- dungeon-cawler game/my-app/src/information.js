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

function enemiesAndHealth(stage1, item) {
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
    return userFound
}



const objectTypes = { ENEMY: "enemies", WEAPON: "weapon", HEALTH: "health" }

function creatingWeapon() {

    for (var i = 0; i < 2; i++) {
        var randomValues = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10), occupied: objectTypes.WEAPON }
        var userFoud = stage.stage1.find(element => element.x === randomValues.x && element.y === randomValues.y)
        if (userFoud) {

            userFoud.occupied = objectTypes.WEAPON;
           
        }
        // console.log("The weapon is at", userFoud)
    }

    return stage.stage1
}


function gridToDisplay(oldUserLocation, userLocation, enemies, userLife, weapons) {
    var health = 30;
    var enemiesImpact = enemies;
    var currentWeapon = weapons;
    var newLife = userLife;
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
        if (findingNewUserLocation.occupied === objectTypes.HEALTH) {
            newLife = userLife + health

        } else if (findingNewUserLocation.occupied === objectTypes.WEAPON) {
    console.log("weapons", currentWeapon[2])
            
            // console.log("what", currentWeapon)
        //     if (currentWeapon[0].name === 'knive') {
        //         currentWeapon.damage += 15;
        //         //  console.log("is this found",currentWeapon.damage)


        //     } else if (currentWeapon[1].name === 'spear')
        //         currentWeapon.damage += 19;
        // } else if (currentWeapon[2].name === 'pistol') {
        //     currentWeapon.damage += 26

        //     console.log("type of weapon is ", objectTypes.WEAPON)
        }

        if (findingNewUserLocation.occupied === objectTypes.ENEMY) {
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
            }
        } else {
            board[board.indexOf(findingOldUserLocation)].occupied = "none";
            board[board.indexOf(findingOldUserLocation)].display = null;
            board[board.indexOf(findingNewUserLocation)].occupied = "player";
            theOldLocation = board[board.indexOf(findingOldUserLocation)];
            theNewLocation = board[board.indexOf(findingNewUserLocation)];
        }
    }
    return { newBoard: board, oldLocation: theOldLocation, currentLocation: theNewLocation, playerLife: newLife, weaponOnHand: currentWeapon, impactOfEnemies: enemiesImpact };
}




enemiesAndHealth(stage.stage1, objectTypes.HEALTH)
enemiesAndHealth(stage.stage1, objectTypes.ENEMY)
creatingWeapon(stage.stage1, objectTypes.WEAPON)


module.exports = {
    grid, enemiesAndHealth, gridToDisplay
}
