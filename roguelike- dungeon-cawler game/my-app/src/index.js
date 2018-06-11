import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as stages from './stages';
import * as information from './information'


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: information.grid(),
            userLocation: { x: 5, y: 0, pathWay: true },

        }
    }


    gridToDisplay(stage1) {
        var board = information.grid();
        for (var i = 0; i < board.length; i++) {
            for (var z = 0; z < stages.stage1.length; z++) {
                if (stages.stage1[z].x === board[i].x && stages.stage1[z].y === board[i].y) {
                    board[i] = stages.stage1[z]
                }
            }
        }
        var userFoud = board.find(element => element.x === this.state.userLocation.x && element.y === this.state.userLocation.y)
        board[board.indexOf(userFoud)].occupied = "player";
        this.setState({ grid: board })

        return board;
    }

    componentDidMount() {
        this.setState({ grid: this.gridToDisplay() })
    }
    render() {

        this.state.grid.map(e => {
            if (e.occupied === "enemies") {
                e.display = <p>&#x263B;</p>;
            } else if (e.occupied === "player") {
                e.display = <p>&#9641;</p>;
            }
        })
        return (
            <div >
                <div className="grid"> 
                {this.state.grid.map(e =>
                    < button id={e.pathWay}>{e.display}</button>)}

                </div>
            </div >
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);