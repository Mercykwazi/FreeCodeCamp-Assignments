function
    grid() {
    var gridOfDeadCells = []; newGeneration
    for (var x = 0; x < 30; x++) {
        for (var y = 0; y < 30; y++) {
            gridOfDeadCells.push({
                'x': x,
                'y': y,
                status: "dead"
            })
        }
    }
    return gridOfDeadCells
}
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

function minMax(board) {
    var highestX = aliveCells.reduce((acc, val) => {
        var acc = acc;
        var val = val.x;
        return Math.max(acc, val);
    }, 0);
    console.log(highestX)

    var highestY = aliveCells.reduce((acc, val) => {
        var acc = acc;
        var val = val.y;
        return Math.max(acc, val);
    }, 0);

    var lowestX = aliveCells.reduce((acc, val) => {
        var acc = acc;
        var val = val.x;
        return Math.min(acc, val);
    }, 0);
    console.log(lowestX)

    var lowestY = aliveCells.reduce((acc, val) => {
        var acc = acc;
        var val = val.y;
        return Math.min(acc, val);
    }, );

    for (var i = lowestX - 1; i < highestX + 1; i++) {
        for (var j = lowestY - 1; j < highestY + 1; j++) {
            var newGeneration = getCellAliveNeighbourCount(i, j)
        }
    }
    console.log("new", newGeneration)
    return newGeneration

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
            var finder = board.find((c) => c.x === onlyAcess[0] && c.y === onlyAcess[1])
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
    return nextGeneration;
}
var grid = grid();
var makeAlive = liveCells(grid)
var newGenerations = newGeneration(makeAlive)
minMax(grid)

module.exports = {
    getCellAliveNeighbourCount, newGeneration,
}