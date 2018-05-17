

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { grid, liveCells, getCellAndAliveNeighbors } from "./grid";

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: grid()
        }

    }

    componentWillMount() {

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
