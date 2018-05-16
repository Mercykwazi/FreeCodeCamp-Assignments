
function grid() {
    var gridOfDeadCells = [];
    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
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
    for (var i = 0; i < board.length; i++) {
        for (var z = 0; z < aliveCells.length; z++) {
            if (aliveCells[z].x === board[i].x && aliveCells[z].y === board[i].y) {
                board[i] = aliveCells[z]
            }
        }
    }
    return board;
}
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


console.log(liveCells())
//console.log(grid())