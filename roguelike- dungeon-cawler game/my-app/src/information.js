var stage = require('./stages');
function grid() {
    var wholeGrid = [];
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 15; y++) {
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
function weapon(stage) {
    for (var i = 0; i < 1; i++) {
        var randomValues = { x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15), occupied: "weapon" }
        var findLocation = stage.find(element => element.x === randomValues.x && element.y === randomValues.y && element.occupied === "none");
        while (!findLocation) {
            findLocation = weapon(stage);
        }
        findLocation.occupied = "weapon";
        return { ...findLocation }
    }
}

function door(stage) {
    for (var i = 0; i < 1; i++) {
        var randomValues = { x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15), occupied: "door" }
        var findLocation = stage.find(element => element.x === randomValues.x && element.y === randomValues.y && element.occupied === "none");
        while (!findLocation) {
            findLocation = door(stage);
        }
        findLocation.occupied = "door";
        return { ...findLocation }
    }
}

function boss(stage) {
    for (var i = 0; i < 1; i++) {
        var randomValues = { x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15), occupied: "boss" }
        var findLocation = stage.find(element => element.x === randomValues.x && element.y === randomValues.y && element.occupied === "none");
        while (!findLocation) {
            findLocation = boss(stage);
        }
        findLocation.occupied = "boss";

        var board = grid();
        var playerLocation = {};
        for (var i = 0; i < board.length; i++) {
            for (var z = 0; z < stage.length; z++) {
                if (stage[z].x === board[i].x && stage[z].y === board[i].y) {
                    board[i] = stage[z]
                }
            }
            if (board[i].x === 6 && board[i].y === 1) {
                board[i].occupied = 'player';
                playerLocation = board[i];
            }
        }

        return { findingLocation: findLocation, board: board, playerLoc: playerLocation }
    }
}

function stage1() {
    var doorCreated = door(stage.stage1)
    var weaponCreated = weapon(stage.stage1);
    var enemiesAndHealthCreated = enemiesAndHealth(stage.stage1);
    return { door: doorCreated, weapon: weaponCreated, enemiesAndHealth: enemiesAndHealthCreated, gridOfFirstStage: stage.stage1 };
}

function stage2() {
    var doorCreated = door(stage.stage2)
    var weaponCreated = weapon(stage.stage2);
    var enemiesAndHealthCreated = enemiesAndHealth(stage.stage2);
    return { door: doorCreated, weapon: weaponCreated, enemiesAndHealth: enemiesAndHealthCreated, grid: stage.stage2 };
}

function stage3() {
    var doorCreated = door(stage.stage3)
    var weaponCreated = weapon(stage.stage3);
    var enemiesAndHealthCreated = enemiesAndHealth(stage.stage3);
    return { door: doorCreated, weapon: weaponCreated, enemiesAndHealth: enemiesAndHealthCreated, grid: stage.stage3 };
}

function stage4() {
    var weaponCreated = weapon(stage.stage4);
    var enemiesAndHealthCreated = enemiesAndHealth(stage.stage4);
    var bossCreated = boss(stage.stage4);
    return { weapon: weaponCreated, enemiesAndHealth: enemiesAndHealthCreated, theBoss: bossCreated, grid: stage.stage4 };
}
function changeStages(stageNum) {
    var results = {};
    switch (stageNum) {
        case 1:
            results = stage1();
            break;
        case 2:
            results = stage2();
            break;
        case 3:
            results = stage3();
            break;
        case 4:
            results = stage4();
            break;
    }
    return results;
}
function createGrid(pathWays) {
    var board = grid();
    var playerLocation = {};
    for (var i = 0; i < board.length; i++) {
        for (var z = 0; z < pathWays.length; z++) {
            if (pathWays[z].x === board[i].x && pathWays[z].y === board[i].y) {
                board[i] = pathWays[z]
            }
        }
        if (board[i].x === 6 && board[i].y === 1) {
            board[i].occupied = 'player';
            playerLocation = board[i];
        }
    }
    return { board: board, playerLoc: playerLocation };
}
function movePlayer(oldUserLocation, userLocation, userLife, enemies, weapons, door, stage, stageNum, xp) {
    var board = grid();
    var enemiesImpact = enemies;
    var newLife = userLife;
    var health = 30;
    var enemies = 25
    var bossLife = 200;
    var currentWeapon = weapons
    var location;
    var newXp = xp;
    for (var i = 0; i < board.length; i++) {
        for (var z = 0; z < stage.length; z++) {
            if (stage[z].x === board[i].x && stage[z].y === board[i].y) {
                board[i] = stage[z]
            }
        }
    }
    var theOldLocation = {};
    var theNewLocation = {};
    var findingOldUserLocation = board.find(element => element.x === oldUserLocation.x && element.y === oldUserLocation.y);
    var findingNewUserLocation = board.find(element => element.x === userLocation.x && element.y === userLocation.y);
    var findingAllTheItemsThatAppearInStagesAndNewLocation = stage.find(element => element.x === findingNewUserLocation.x && element.y === findingNewUserLocation.y);

    if (findingAllTheItemsThatAppearInStagesAndNewLocation === undefined) {
        board[board.indexOf(findingOldUserLocation)].occupied = "player";
        board[board.indexOf(findingNewUserLocation)].occupied = "none";
        theOldLocation = board[board.indexOf(findingOldUserLocation)];
        theNewLocation = board[board.indexOf(findingOldUserLocation)];

    } else {
        if (findingNewUserLocation.occupied === "Health") {
            newLife = newLife + health
            newXp = newXp + 2

            board[board.indexOf(findingOldUserLocation)].occupied = "none";
            board[board.indexOf(findingOldUserLocation)].display = null;
            board[board.indexOf(findingNewUserLocation)].occupied = "player";
            theOldLocation = board[board.indexOf(findingOldUserLocation)];
            theNewLocation = board[board.indexOf(findingNewUserLocation)];
        } else if (findingNewUserLocation.occupied === "Enemies") {
            if (enemies < userLife) {
                newLife = newLife - 10
                board[board.indexOf(findingOldUserLocation)].occupied = "none";
                board[board.indexOf(findingOldUserLocation)].display = null;
                board[board.indexOf(findingNewUserLocation)].occupied = "player";
                theOldLocation = board[board.indexOf(findingOldUserLocation)];
                theNewLocation = board[board.indexOf(findingOldUserLocation)];
            } else if (enemies > userLife) {
                board[board.indexOf(findingOldUserLocation)].occupied = "player";
                board[board.indexOf(findingNewUserLocation)].occupied = "none";
                theOldLocation = board[board.indexOf(findingOldUserLocation)];
                theNewLocation = board[board.indexOf(findingOldUserLocation)];
                newLife = newLife - 10;
                enemies=enemies-20;
                console.log('what',newLife,userLife);
                
                if (newLife < 0) {
                    alert('sorry you have lost')
                    window.location.reload()
                }
            }

        } else if (findingNewUserLocation.occupied === "weapon") {
            newLife = weapons[stageNum - 1].damage + newLife;
            board[board.indexOf(findingOldUserLocation)].occupied = "none";
            board[board.indexOf(findingOldUserLocation)].display = null;
            board[board.indexOf(findingNewUserLocation)].occupied = "player";
            theOldLocation = board[board.indexOf(findingOldUserLocation)];
            theNewLocation = board[board.indexOf(findingNewUserLocation)];
        } else if (findingNewUserLocation.occupied === "door") {
            board[board.indexOf(findingOldUserLocation)].occupied = "player";
            board[board.indexOf(findingNewUserLocation)].occupied = "none";
            theOldLocation = board[board.indexOf(findingOldUserLocation)];
            theNewLocation = board[board.indexOf(findingOldUserLocation)];
            board = "new board"
        } else if (findingNewUserLocation.occupied === "boss") {
            if (userLife < bossLife) {
                alert("sorry you have lost")
                window.location.reload()
            } else {
                board[board.indexOf(findingOldUserLocation)].occupied = "player";
                board[board.indexOf(findingNewUserLocation)].occupied = "none";
                theOldLocation = board[board.indexOf(findingOldUserLocation)];
                theNewLocation = board[board.indexOf(findingOldUserLocation)];
                alert("Congratulations you have won!")
                window.location.reload()
            }
        }
        else {
            board[board.indexOf(findingOldUserLocation)].occupied = "none";
            board[board.indexOf(findingOldUserLocation)].display = null;
            board[board.indexOf(findingNewUserLocation)].occupied = "player";
            theOldLocation = board[board.indexOf(findingOldUserLocation)];
            theNewLocation = board[board.indexOf(findingNewUserLocation)];
        }
    }
    return { newBoard: board, newStageNum: stageNum, oldLocation: theOldLocation, currentLocation: theNewLocation, playerLife: newLife, impactOfEnemies: enemiesImpact, impactOfWeapons: currentWeapon, bossRecord: bossLife, currentXp: newXp };

}

function enemiesAndHealth(stage) {
    var grid = stage
    var i = 0;
    var enemies = [];
    var health = [];
    var found = "Enemies";
    while (i < 12) {
        var randomValues = { x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15) };
        var position = grid.find(element => element.x === randomValues.x && element.y === randomValues.y && element.occupied === "none" && randomValues.x != 6 && randomValues.y != 1);
        found = i <= 5 ? "Enemies" : "Health";
        if (position) {
            if (i <= 5) {
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
function createSmallGrid(player, board) {
    var validSmallGrid = []
    var x = player.x;
    var y = player.y;
    var smallGrid = [player, { x: x - 1, y: y }, { x: x - 1, y: y + 1 }, { x: x, y: y + 1 }, { x: x + 1, y: y + 1 }, { x: x + 1, y: y }, { x: x + 1, y: y - 1 }, { x: x, y: y - 1 }, { x: x - 1, y: y - 1 }];
    smallGrid.map(e => {
        e = board.find(element => {
            return element.x === e.x && element.y === e.y
        })
        validSmallGrid.push(e);
    })
    var sorted = validSmallGrid.sort(function (a, b) {
        if (a.x == b.x) return a.y - b.y;
        return a.x - b.x;
    })
    return sorted;
}
module.exports = {
    grid, movePlayer, weapon, stage1, stage2, stage3, stage4, changeStages, createGrid, createSmallGrid
}