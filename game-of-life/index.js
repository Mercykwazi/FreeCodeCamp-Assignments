var gridOfDeadCells = [];
var gridOfLiveCells = [];
function grid() {
    for (var x = 0; x <= 10; x++) {
        for (var y = 0; y <= 10; y++) {
            gridOfDeadCells.push({
                x: x,
                y: y,
                status: "dead"
            })
        }
        // return gridOfDeadCells
    }
}
    console.log(grid())

function liveCells(){
    var aliveCells=[{x:2,y:1,status:"alive"},{x:2,y:2,status:"alive"},{x:2,y:3,status:"alive"}]
    console.log("aliveCells",aliveCells)

}
console.log(liveCells())


