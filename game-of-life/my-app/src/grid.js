function
    grid() {
    var gridOfDeadCells = []; newGeneration
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            gridOfDeadCells.push({
                'x': x,
                'y': y,
                status: "dead"
            })
        }
    }
    return gridOfDeadCells
}

function liveCells(board, aliveCells) {
    var aliveCells = [{ x: 2, y: 1, status: "alive" }, { x: 2, y: 2, status: "alive" }, { x: 2, y: 3, status: "alive" }]
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
            var neighbors = [{ 'x': x - 1, 'y': y }, { 'x': x - 1, "y": y + 1 }, { "x": x, "y": y + 1 }, { "x": x + 1, "y": y + 1 }, { "x": x + 1, "y": y }, { "x": x + 1, "y": y - 1 }, { "x": x, " y": y - 1 }, { "x": x - 1, "y": y - 1 }];
            var nearestNeighbor = { cell: board[i], AllNeighbors: neighbors };
            neighborsPerCell.push(nearestNeighbor);
            // console.log("ne2",neighborsPerCell[0])
        }

        return neighborsPerCell;
    }
}




function newGeneration(board) {
    var nextGeneration = [];
    for (var i = 0; i < board.length; i++) {
        var neighbourAliveCellsCount = getCellAliveNeighbourCount(board, board[i]);
        console.log("what is board1", board < 0)
        
        if (neighbourAliveCellsCount === 2 && board[i].cell.status === "alive" || neighbourAliveCellsCount === 3 && board[i].cell.status === "alive") {
            var newCell = { ...board[i] };
            newCell.status = "alive";
            nextGeneration.push(newCell);
        }
        else if (neighbourAliveCellsCount < 2 && board[i].cell.status === "alive") {
            var newCell = { ...board[i] };
            newCell.status === "dead"
            nextGeneration.push(newCell)

        }

        else if (neighbourAliveCellsCount > 3 && board[i].cell.status === "alive") {
            var newCell = { ...board[i] };
            newCell.status === "dead"
            nextGeneration.push(newCell)
        }
        else if (neighbourAliveCellsCount === 3 && board[i].cell.status === "dead") {
            var newCell = { ...board[i] };
            newCell.status = "alive";
            nextGeneration.push(newCell);
        }
    }
    //console.log("next", nextGeneration)
    return nextGeneration;
}
var grid = grid();
var makeAlive = liveCells(grid)
var getNeighbors = getCellAliveNeighbourCount(makeAlive);
var newGeneration = newGeneration(getNeighbors)



// function initialise() {
//     neighbors.filter(cell => cell.status === "alive")
// }



module.exports = {
    liveCells, getCellAliveNeighbourCount, newGeneration,
}