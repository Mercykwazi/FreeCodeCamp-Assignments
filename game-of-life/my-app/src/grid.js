
var aliveCells = [
    { x: 2, y: 1, status: "alive" }, { x: 2, y: 2, status: "alive" }, { x: 2, y: 3, status: "alive" }
]

function liveCells(board) {
    for (var i = 0; i < board.length; i++) {
        for (var z = 0; z < aliveCells.length; z++) {
            if (aliveCells[z].x === board[i].x && aliveCells[z].y === board[i].y) {
                board[i] = aliveCells[z]
            }
        }
    }
    return board;
}

function makeGrid(aliveCells) {
    var displayGrid = [];
    for (let index = 0; index < 20; index++) {
        for (let secondIndex = 0; secondIndex < 20; secondIndex++) {
            var cellFound = aliveCells.find(element => {
                return element.x === index && element.y === secondIndex
            })
            cellFound = cellFound ? { ...cellFound, status: "alive" } : { x: index, y: secondIndex, status: "dead" };
            displayGrid.push(cellFound);
        }
    }
    return displayGrid
}
function getCellAliveNeighbourCount(board) {
    var neighborsPerCell = [];
    for (var i = 0; i < board.length; i++) {
        for (var i = 0; i < board.length; i++) {
            var x = board[i].x;
            var y = board[i].y;
            var neighbors = [{ x: x - 1, y: y }, { x: x - 1, y: y + 1 }, { x: x, y: y + 1 }, { x: x + 1, y: y + 1 }, { x: x + 1, y: y }, { x: x + 1, y: y - 1 }, { x: x, y: y - 1 }, { x: x - 1, y: y - 1 }];
            var nearestNeighbor = { cell: board[i], AllNeighbors: neighbors };
            neighborsPerCell.push(nearestNeighbor);
        }
        return neighborsPerCell;
    }
}


function minMax(arrayObj) {
    // console.log("first recieved", arrayObj)
    var xCoordinates = [];
    var yCoordinates = [];
    arrayObj.forEach(element => {
        xCoordinates.push(element.x);
        yCoordinates.push(element.y);
    });
    var lowestX = xCoordinates.sort((a, b) => a - b)[0];
    var highestX = xCoordinates.sort((a, b) => a - b)[xCoordinates.length - 1];
    var lowestY = yCoordinates.sort((a, b) => a - b)[0];
    var highestY = yCoordinates.sort((a, b) => a - b)[yCoordinates.length - 1];
    var toBeCheckedGrid = [];
    for (var i = lowestX - 2; i < highestX + 2; i++) {
        for (var j = lowestY - 2; j < highestY + 2; j++) {
            var cellIsAlive = arrayObj.find(element => element.x === i && element.y === j);
            cellIsAlive = cellIsAlive ? { ...cellIsAlive, status: "alive" } : cellIsAlive = { x: i, y: j, status: "dead" };
            toBeCheckedGrid.push(cellIsAlive)
        }
    }
    // console.log("testing", toBeCheckedGrid)
    return toBeCheckedGrid
}


function newGeneration(board) {
    var nextGeneration = [];
    for (var i = 0; i < board.length; i++) {
        var onlyAlive = [];
        var neighbourAliveCellsCount = getCellAliveNeighbourCount(board, board[i]);
        var aliveNeigbours = neighbourAliveCellsCount[i].AllNeighbors;
        var newCell = { ...neighbourAliveCellsCount[i].cell }
        for (var j = 0; j < aliveNeigbours.length; j++) {
            var onlyAcess = [aliveNeigbours[j].x, aliveNeigbours[j].y]
            var finder = board.find((c) => c.x === onlyAcess[0] && c.y === onlyAcess[1]);
            if (finder !== undefined && finder.status === "alive") {
                if (onlyAlive.indexOf(finder) === -1) {
                    onlyAlive.push(finder)
                }
            }
        }
        if (neighbourAliveCellsCount[i].cell.status === "alive" && onlyAlive.length === 3) {
            nextGeneration.push(newCell)
        } else if (neighbourAliveCellsCount[i].cell.status === "alive" && onlyAlive.length === 2) {
            nextGeneration.push(newCell)
        } else if (neighbourAliveCellsCount[i].cell.status === "alive" && onlyAlive.length > 3) {
            newCell.status = "dead"
            nextGeneration.push(newCell)
        } else if (neighbourAliveCellsCount[i].cell.status === "alive" && onlyAlive.length < 2) {
            newCell.status = "dead"
            nextGeneration.push(newCell)
        } else if (neighbourAliveCellsCount[i].cell.status === "dead" && onlyAlive.length === 3) {
            newCell.status = "alive"
            nextGeneration.push(newCell)
        } else {
            nextGeneration.push(newCell)
        }
    }
    var onlyLiving = nextGeneration.filter(word => word.status === "alive")
    return onlyLiving;
}
// var grid = grid();
// var makeAlive = liveCells(grid)

// newGeneration(minMax(aliveCells))
// makeGrid(aliveCells)


module.exports = {
    getCellAliveNeighbourCount, newGeneration, minMax, makeGrid
}