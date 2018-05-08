function grid() {
    var Grid = [];
    for (var x = 0; x <= 10; x++) {
        for (var y = 0; y <= 10; y++) {
            Grid.push({
                x: x,
                y: y,
                status: "dead"
            })
        }
    }
    return Grid;
}
console.log(grid())