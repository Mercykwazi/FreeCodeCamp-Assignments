

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { liveCells, getCellAndAliveNeighbors } from "./grid";

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: [], aliveCells: [{ x: 2, y: 1, status: "alive" }, { x: 2, y: 2, status: "alive" }, { x: 2, y: 3, status: "alive" }]
        }

    }

    grid() {
        var gridOfDeadCells = [];
        for (var x = 0; x < 4; x++) {
            for (var y = 0; y < 4; y++) {
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
        var grid = this.state.grid;
        getCellAndAliveNeighbors(this.state.grid);
        var change=liveCells(grid,this.state.aliveCells);
        this.setState({ grid: change })
        return change;
    }
    runGame(){
        setInterval(this.start(),1000)
    }
    componentDidMount() {
        this.setState({ grid: this.grid() })

    }


    render() {
        console.log('grid', this.state.grid)
        return (
            <div className="grid">
                {this.state.grid.map(e => <button id={e.status}>{e.status}</button>)}
                <button onClick={this.runGame.bind(this)}>play</button>
            </div>
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);
