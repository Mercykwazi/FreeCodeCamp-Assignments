

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { liveCells, getCellAndAliveNeighbors, newGeneration,initialise } from "./grid";

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: [], aliveCells: [{ x: 2, y: 1, status: "alive" }, { x: 2, y: 2, status: "alive" }, { x: 2, y: 3, status: "alive" }]
        }

    }

componentWillMount(){
    initialise();
}

    changeBoard(cell) {
        var newGrid = liveCells(this.state.grid, this.state.aliveCells);
        if (cell.status === "alive") {
            newGrid[newGrid.indexOf(cell)].status = "dead"

        } else if (cell.status === "dead") {
            newGrid[newGrid.indexOf(cell)].status = "alive"

        }
        console.log("n", newGrid)
        this.setState({ liveCells: newGrid })
        return newGrid;

    }

    grid() {
        var gridOfDeadCells = [];
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
    
    start() {
        //var counter = 0;
        var generator = setInterval(() => {
            var change = liveCells(this.state.grid, this.state.aliveCells);
            var newGen = newGeneration(change);
            var onlyAlive = newGen.filter((item) => { return item.status === "alive" });
            this.setState({ grid: newGen, aliveCells: onlyAlive })
            //counter++;
            // if (counter === 5) {
            //     clearInterval(generator)
            // }
            console.log("yes")
        }, 1000)
    }
    componentDidMount() {
        this.setState({ grid: this.grid() })

    }


    render() {
        console.log('grid', this.state.grid)
        return (
            <div>
                <div className="grid">
                    {this.state.grid.map(e => <button onClick={() => this.changeBoard(e)} id={e.status}>{e.status}</button>)}
                </div>
                <button onClick={() => this.start()}>start</button>
            </div>

        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);