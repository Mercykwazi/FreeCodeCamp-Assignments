var gridOfDeadCells = [];
function grid() {
    for (var x = 0; x <= 4; x++) {
        for (var y = 0; y <= 4; y++) {
            gridOfDeadCells.push({
                x: x,
                y: y,
                status: "dead"
            })
        }

    }
    return gridOfDeadCells
}

var board = grid();

function liveCells() {
    var aliveCells = [{ x: 2, y: 1, status: "alive" }, { x: 2, y: 2, status: "alive" }, { x: 2, y: 3, status: "alive" }]
    //var foundAlive = board.find(x => x.x === aliveCells.x && x.y === aliveCells.y);

    for (var i = 0; i < board.length; i++) {
        for (var z = 0; z < aliveCells.length; z++) {
            if (aliveCells[z].x === board[i].x && aliveCells[z].y === board[i].y) {
                board[i] = aliveCells[z]

            }
        }

}

return board;

var board = liveCells();
//console.log("this is my board",board)
function getNeighbors() {
    var neighborsPerCell = [];
    for (var i = 0; i < board.length; i++) {
        var x = board[i].x;
        var y = board[i].y;
        var neighbors = [{ 'x': x - 1, 'y': y }, { 'x': x - 1, "y": y + 1 }, { "x": x, "y": y + 1 }, { "x": x + 1, "y": y + 1 }, { "x": x + 1, "y": y }, { "x": x + 1, "y": y - 1 }, { "x": x, " y": y - 1 }, { "x": x - 1, "y": y - 1 }];
        var nearestNeighbor = { cell: board[i], AllNeighbors: neighbors };
        neighborsPerCell.push(nearestNeighbor);
    }
    return neighborsPerCell;

}
function aliveNeighbors(x, y) {
    var neighbors = getNeighbors()
    var nextGeneration = [];
    var livingNeighbors = [];
    var actualCell = board.find(item => {
        return item.x === x && item.y === y;
    })
    var leftNeighbor = board.find(cell => {
        return cell.x === x - 1 && cell.y === y
    })
    var bottomLeftNeighbor = board.find(cell => {
        return cell.x === x - 1 && cell.y === y + 1
    })
    var downBottomNeighbor = board.find(cell => {
        return cell.x === x && cell.y === y + 1
    })
    var bottomRightNeighbor = board.find(cell => {
        return cell.x === x + 1 && cell.y === y + 1
    })
    var rightNeighbor = board.find(cell => {
        return cell.x === x + 1 && cell.y === y
    })
    var upRightNeighbor = board.find(cell => {
        return cell.x === x + 1 && cell.y === y - 1
    })
    var upNeighbor = board.find(cell => {
        return cell.x === x && cell.y === y - 1
    })
    var topLeftNeighbor = board.find(cell => {
        return cell.x === x - 1 && cell.y === y - 1
    })

    if (downBottomNeighbor !== undefined && downBottomNeighbor.status === "alive") {
        livingNeighbors.push(downBottomNeighbor)
    } if (leftNeighbor !== undefined && leftNeighbor.status === "alive") {
        livingNeighbors.push(leftNeighbor)
    } if (bottomLeftNeighbor !== undefined && bottomLeftNeighbor.status === "alive") {
        livingNeighbors.push(bottomLeftNeighbor)
    } if (bottomRightNeighbor !== undefined && bottomRightNeighbor.status === "alive") {
        livingNeighbors.push(bottomRightNeighbor)
    } if (rightNeighbor !== undefined && rightNeighbor.status === "alive") {
        livingNeighbors.push(rightNeighbor)
    } if (upRightNeighbor !== undefined && upRightNeighbor.status === "alive") {
        livingNeighbors.push(upRightNeighbor)
    } if (upNeighbor !== undefined && upNeighbor.status === "alive") {
        livingNeighbors.push(upNeighbor)
    } if (topLeftNeighbor !== undefined && topLeftNeighbor.status === "alive") {
        livingNeighbors.push(topLeftNeighbor)
    }
    if (livingNeighbors.length === 2 || livingNeighbors.length === 3 && actualCell.status === "alive") {
        actualCell.status = "alive"
        //console.log("act", actualCell.status)
        //console.log("1st", actualCell)
    } else if (livingNeighbors.length < 2 && actualCell.status === "alive") {
        actualCell.status = "dead";

        //console.log("2st", actualCell)
    } else if (livingNeighbors.length === 3 && actualCell.status === "dead") {
        //console.log("3st", actualCell)
        actualCell.status = "alive";
    } else if (livingNeighbors.length > 3 && actualCell.status === "alive") {
        // console.log("4st", actualCell)
        actualCell.status = "dead";

    }

    nextGeneration.push(actualCell)
    console.log(nextGeneration)
    return nextGeneration



}

board.forEach(cell => {
    aliveNeighbors(cell.x, cell.y);
})

//aliveNeighbors(2, 3);
module.exports = {
    liveCells, getNeighbors

}
