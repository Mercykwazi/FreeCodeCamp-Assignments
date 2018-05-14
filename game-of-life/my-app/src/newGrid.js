var alive = [
    { x: 2, y: 1, status: "alive" },
    { x: 3, y: 1, status: "alive" },
    { x: 4, y: 1, status: "alive" }
]

function getLiveNeighbors(x, y) {
    var counter = 0;
    
    var rightNeighbor = alive.find(c => {
        return c.x === x && c.y === y + 1;
    });
    var leftNeighbor = alive.find(c => {
        return c.x === x && c.y === y - 1;
    });
    var topRight = alive.find(c => {
        return c.x === x - 1 && c.y === y + 1;
    });
    var topLeft = alive.find(c => {
        return c.x === x - 1 && c.y === y - 1;
    });
    var bottomLeft = alive.find(c => {
        return c.x === x + 1 && c.y === y - 1;
    });
    var bottomRight = alive.find(c => {
        return c.x === x + 1 && c.y === y + 1;
    });
    var top = alive.find(c => {
        return c.x === x - 1 && c.y === y;
    });
    var bottom = alive.find(c => {
        return c.x === x + 1 && c.y === y;
    });
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
    }, 1000000000000);

    var minY = alive.reduce((acc, val) => {
        var acc = acc;
        var val = val.y;
        return Math.min(acc, val);
    }, 1000000000000);

    for (var i = minX - 1; i < maxX + 1; i++) {
        for (var j = minY - 1; j < maxY + 1; j++) {
            console.log(i,j)
            getLiveNeighbors(i, j)
        }
    }
}
checkNeighbors();