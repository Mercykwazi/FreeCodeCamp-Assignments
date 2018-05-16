

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getLiveNeighbors, greedOfDeeadCells, board, nextGeneration, setInter } from "./newGrid";

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: []
        }
        this.greedOfDeeadCells = this.greedOfDeeadCells.bind(this)
    }

    greedOfDeeadCells() {
        var deadCells = [];
        for (var x = 0; x < 10; x++) {
            for (var y = 0; y < 10; y++) {
                deadCells.push({ "x": x, "y": y, status: "dead" })
            }
        }
        this.setState({ grid: deadCells })
        return deadCells
    }
    changeStatus(){
        
    }
    setAliveCells() {
        var newGrid = this.greedOfDeeadCells();
        for (var i = 0; i < newGrid.length; i++) {
            for (var j = 0; j < nextGeneration.length; j++) {
                if (newGrid[i].x === nextGeneration[j].x && newGrid[i].y === nextGeneration[j].y) {
                    newGrid[i] = nextGeneration[j]
                }
            }
        }
        return this.nextGeneration
    }
    componentWillMount() {
        this.setInter
        this.setAliveCells()
        console.log("live", nextGeneration)
    }


    render() {
        console.log(this.state.grid)
        return (
            <div className="grid">
                {this.state.grid.map(e => <button id={e.status}>{e.status}</button>)}
            </div>
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);
