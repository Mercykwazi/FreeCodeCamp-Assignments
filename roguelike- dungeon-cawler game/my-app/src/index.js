import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as stages from './stages'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: [],
            user: [{ lifeGriven: 50 }, { points: 0 }],
            userLocation: { x: 5, y: 0, pathWay: true },
            enemies: [],
            boss: [{ potions: {} }, { points: 50 }],
            weapons: [],
            health: [],
        }
    }

    grid() {
        var gridOfDeadCells = [];
        for (var x = 0; x < 10; x++) {
            for (var y = 0; y < 10; y++) {
                gridOfDeadCells.push({
                    'x': x,
                    'y': y,
                    pathWay: "false"
                })
            }
        }
        this.setState({ grid: gridOfDeadCells })
        return gridOfDeadCells
    }

    gridToDisplay(stage1) {
        var board = this.grid();
        for (var i = 0; i < board.length; i++) {
            for (var z = 0; z < stage1.length; z++) {
                if (stage1[z].x === board[i].x && stage1[z].y === board[i].y) {
                    board[i] = stage1[z]
                }
            }
        }
        var userFoud = board.find(element => element.x === this.state.userLocation.x && element.y === this.state.userLocation.y)
        board[board.indexOf(userFoud)].occupied = "player";
        this.setState({ grid: board })
        console.log("gr", board)
        return board;
    }

    componentDidMount() {
        this.setState({ grid: this.grid() })
    }
    render() {
        this.state.grid.map(e => { e.display = e.occupied === "player" ? e.display = <p>&#9641;</p> : e.display = null })
        return (
            <div >
                <h1> roguelike dungeon-cawler game</h1>
                <div className="grid"> {this.state.grid.map(e =>
                    < button onClick={() => this.gridToDisplay(stages.stage1)} id={e.pathWay}>{e.display}</button>)}</div>
                {/* <button onClick={() => this.gridToDisplay(stages.stage1)}>grid</button> */}
            </div >
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);