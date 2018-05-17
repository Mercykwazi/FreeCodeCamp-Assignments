

function liveCells(board,aliveCells) {
    for (var i = 0; i < board.length; i++) {
        for (var z = 0; z < aliveCells.length; z++) {
            if (aliveCells[z].x === board[i].x && aliveCells[z].y === board[i].y) {
                board[i] = aliveCells[z]
            }
        }
    }
    return board;
}
function getCellAndAliveNeighbors(board) {
    var results = [];
    for (var i = 0; i < board.length; i++) {
        var x = board[i].x;
        var y = board[i].y;
        var neighbors = [
            board.find((cell) => cell.x === x - 1 && cell.y === y),
            board.find((cell) => cell.x === x - 1 && cell.y === y + 1),
            board.find((cell) => cell.x === x && cell.y === y + 1),
            board.find((cell) => cell.x === x + 1 && cell.y === y + 1),
            board.find((cell) => cell.x === x + 1 && cell.y === y),
            board.find((cell) => cell.x === x + 1 && cell.y === y - 1),
            board.find((cell) => cell.x === x && cell.y === y - 1),
            board.find((cell) => cell.x === x - 1 && cell.y === y - 1)].filter(cell => cell !== undefined)

        results.push({ cell: board[i], AllNeighbors: neighbors.filter(cell => cell.status === "alive") });

    }
    return results;
}



// var grid = grid();
// var makeAlive = liveCells(grid)
// var getNeighbors = getCellAndAliveNeighbors(makeAlive);
// console.log('getNeighbors', getNeighbors)
// console.log('grid',grid)

module.exports = {
    liveCells, getCellAndAliveNeighbors
}
