

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { checkNeighbors} from "./newGrid";

class Main extends React.Component {
    constructor() {
        super()
        this.state = { liveCells: liveCells() };
    }


    render() {
        return (
            <div className="grid">
                {this.state.checkNeighbors.map(c => {
                    return <button className="grid-container">{c.status}</button>
                })}
            </div>
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);
