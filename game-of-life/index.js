
function grid() {
    var gridOfDeadCells = [];
    for (var x = 0; x <= 10; x++) {
        for (var y = 0; y <= 10; y++) {
            gridOfDeadCells.push({
                x: x,
                y: y,
                status: "dead"
            })
        }

    }
    return gridOfDeadCells
}


function liveCells() {
    var bord = grid()
    var aliveCells = [{ x: 2, y: 1, status: "alive" }, { x: 2, y: 2, status: "alive" }, { x: 2, y: 3, status: "alive" }]
    for (var i = 0; i < bord.length; i++) {
        for (var z = 0; z < aliveCells.length; z++) {
            if (aliveCells[z].x === bord[i].x && aliveCells[z].y === bord[i].y) {
                bord[i] = aliveCells[z]

            }
        }
    }
    // console.log("aliveCells", aliveCells)
    return bord;
}
console.log(liveCells())


