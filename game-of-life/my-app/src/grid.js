var gridOfDeadCells = [];

function grid() {
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
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
var board = liveCells();
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

function getAliveNeighbors(x, y) {
    gridOfDeadCells.forEach(element => {
            var e = getAliveNeighbors(element)
            var deadCells = [];
            var aliveCells = [];
            e.list.forEach(cell => {
                var c = gridOfDeadCells.find(val =>
                    val.x === cell.x && val.y === cell.y);
                if (c !== undefined && c.status === "Alive") {
                    aliveCells.push(c);
                } else if (c !== undefined && c.status === "dead")
                    deadCells.push(c);
    
            })
            if (element.status === "alive" && aliveCells.leghth === 3) {
                element.status === "alive";
            } else if (element.status === "dead" && aliveCells.leghth === 3) {
                element.status === "alive";
            } else if (element.status === "alive" && aliveCells.leghth > 3) {
                element.status === "dead";
            } else if (element.status === "alive" && aliveCells.leghth < 2 || aliveCells.leghth > 3) {
                element.status === "dead";
            }
    
        })
        return gridOfDeadCells;
    
}





console.log("aliveneigbors",getAliveNeighbors())

module.exports = {
    liveCells, getNeighbors
}
