
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from 'reactstrap';
import { getCellAndAliveNeighbors, newGeneration, minMax, makeGrid } from "./grid";

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: [], aliveCells: [{ x: 2, y: 1, status: "alive" }, { x: 2, y: 2, status: "alive" }, { x: 2, y: 3, status: "alive" }], speed: 1000, pause: false, generation: 0,
        }
    }

    changeBoard(cell) {
        var aliveOnly = this.state.aliveCells;
        var newGrid = this.state.grid;
        var cellFound = newGrid.find(item => item.x === cell.x && item.y === cell.y)
        cellFound = cellFound.status === "alive" ? { ...cellFound, status: "dead" } : { ...cellFound, status: "alive" };
        if (cellFound.status === "alive") {
            newGrid[newGrid.indexOf(cell)] = cellFound;

            aliveOnly.push(cellFound);
            console.log("only", aliveOnly)

        } else if (cellFound.status === "dead") {
            newGrid[newGrid.indexOf(cell)].status = "dead"
            aliveOnly = aliveOnly.splice(aliveOnly.indexOf(cellFound), 1)
        }
        this.setState({ grid: newGrid, aliveCells: aliveOnly })
        return newGrid;

    }

    grid() {
        var gridOfDeadCells = [];
        for (var x = 0; x < 20; x++) {
            for (var y = 0; y < 20; y++) {
                gridOfDeadCells.push({
                    'x': x,
                    'y': y,
                    status: "dead"
                })
            }
        }
        return gridOfDeadCells
    }
    generator = "";

    start() {
        var generation = this.state.generation
        this.setState({
            pause: false
        })
        this.generator = setInterval(() => {
            var newAliveCells = newGeneration(minMax(this.state.aliveCells));
            var newGen = makeGrid(newAliveCells)
            this.setState({ grid: newGen, aliveCells: newAliveCells })
            this.setState({ generation: generation++ })
            if (newAliveCells.length === 0) {
                clearInterval(this.generator)
                this.setState({ generation: 0 })
            } else if (this.state.pause === true) {
                clearInterval(this.generator, generation)
            }
        }, this.state.speed)
    }
    randomPicker() {
        var randomStorage = [];
        var livingCells = this.minMax
        for (var i = 0; i < 18; i++) {
            for (var z = 0; z < 18; z++) {
                var random = { x: Math.floor(Math.random() * 18), y: Math.floor(Math.random() * 18), status: "alive" }
                randomStorage.push(random)
            }
        }
        return randomStorage;
    }

    liveCells(aliveCells) {
        var board = this.grid();
        for (var i = 0; i < board.length; i++) {
            for (var z = 0; z < aliveCells.length; z++) {
                if (aliveCells[z].x === board[i].x && aliveCells[z].y === board[i].y) {
                    board[i] = aliveCells[z]
                }
            }
        }
        return board;
    }

    componentDidMount() {
        var randomly = this.randomPicker()
        this.setState({ grid: this.liveCells(randomly), aliveCells: randomly })
        this.start()
    }

    clear() {
        this.setState({ grid: this.grid(), aliveCells: [] })
    }

    pause() {
        this.setState({ pause: true });
    }
    highSpeed() {
        this.setState({ speed: this.state.speed - 500 })
        clearInterval(this.generator)
        this.start()
    }

    lowSpeed() {
        this.setState({ speed: this.state.speed + 300 })
        clearInterval(this.generator)
        this.start()
    }

    render() {
        return (
            <div>
                <h1>Game of Life</h1>
                <p>Generation:{this.state.generation}</p>
                <button id="btn3" onClick={() => this.start()}>start</button>
                <button id="btn2" onClick={() => this.pause()}>pause</button>
                <button id="btn" onClick={() => this.clear()}>clear</button>

                <div className="grid">
                    {this.state.grid.map(e => <button onClick={() => this.changeBoard(e)} key={this.state.grid.indexOf(e)} id={e.status}></button>)}
                </div><br />
                <div>
                    <h2>Speed</h2>
                    <button id="btn3" onClick={() => this.highSpeed()}>high</button>
                    <button id="btn3" onClick={() => this.lowSpeed()}>low</button>

                </div>
            </div>
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);