var alive = [
    { x: 2, y: 1, status: "alive" },
    { x: 3, y: 1, status: "alive" },
    { x: 4, y: 1, status: "alive" }
]

function getLiveNeighbors(x, y) {
    var counter = 0;
    var nextGeneration = [];
    var actualCell = alive.find(item => {
        return item.x === x && item.y === y;
    })

    var leftNeighbor = alive.find(cell => {
        return cell.x === x - 1 && cell.y === y
    })
    var bottomLeftNeighbor = alive.find(cell => {
        return cell.x === x - 1 && cell.y === y + 1
    })
    var downBottomNeighbor = alive.find(cell => {
        return cell.x === x && cell.y === y + 1
    })
    var bottomRightNeighbor = alive.find(cell => {
        return cell.x === x + 1 && cell.y === y + 1
    })
    var rightNeighbor = alive.find(cell => {
        return cell.x === x + 1 && cell.y === y
    })
    var upRightNeighbor = alive.find(cell => {
        return cell.x === x + 1 && cell.y === y - 1
    })
    var upNeighbor = alive.find(cell => {
        return cell.x === x && cell.y === y - 1
    })
    var topLeftNeighbor = alive.find(cell => {
        return cell.x === x - 1 && cell.y === y - 1
    })

    if (bottomLeftNeighbor !== undefined) {
        counter += 1;
    }

    if (downBottomNeighbor !== undefined) {
        counter += 1;
    }
    if (bottomRightNeighbor !== undefined) {
        counter += 1;
    }
    if (upRightNeighbor !== undefined) {
        counter += 1;
    }
    if (upNeighbor !== undefined) {
        counter += 1;
    }
    if (topLeftNeighbor !== undefined) {
        counter += 1;
    }
    if (leftNeighbor !== undefined) {
        counter += 1;
    }
    if (rightNeighbor !== undefined) {
        counter += 1;
    }
    if (actualCell !== undefined && (counter === 2 || counter === 3)) {
        nextGeneration.push(actualCell);
        console.log("actual",actualCell)
    } else if (actualCell === undefined && counter === 3) {
        nextGeneration.push({ x: x, y: y, status: "alive" });
        console.log("actual",nextGeneration)
    }
    return nextGeneration;

}

function checkNeighbors() {
    var maxX = alive.reduce((acc, val) => {
        var acc = acc;
        var val = val.x;
        return Math.max(acc, val);
    }, 0);

    var maxY = alive.reduce((acc, val) => {
        var acc = acc;
        var val = val.y;
        return Math.max(acc, val);
    }, 0);

    var minX = alive.reduce((acc, val) => {
        var acc = acc;
        var val = val.x;
        return Math.min(acc, val);
    }, 2000000000000);

    var minY = alive.reduce((acc, val) => {
        var acc = acc;
        var val = val.y;
        return Math.min(acc, val);
    }, 2000000000000);

    for (var i = minX - 1; i < maxX + 1; i++) {
        for (var j = minY - 1; j < maxY + 1; j++) {
            console.log(i, j)
            getLiveNeighbors(i, j)
        }
    }
}
checkNeighbors()