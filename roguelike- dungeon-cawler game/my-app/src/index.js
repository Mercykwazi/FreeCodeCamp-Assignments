import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as stages from './stages';
import * as information from './information';
import Display from './display';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: information.grid(),
            userLocation: { x: 5, y: 0 },
            oldUserLocation: { x: 5, y: 0 },
            enemies: { amount: 4, life: 15 },
            health: { amount: 4},
            weapon: { amount: 4, life: 10 },
            currentWeapon: { impact: 0 },
            userLife: { life: 20 }

        }
    }



    movePlayer = (event) => {
        var keys = this.state.userLocation;
        var old = this.state.userLocation;
        if (event.key === "ArrowUp") {
            keys = { x: keys.x - 1, y: keys.y }
        } else if (event.key === "ArrowDown") {
            keys = { x: keys.x + 1, y: keys.y }
        } else if (event.key === "ArrowLeft") {
            keys = { x: keys.x, y: keys.y - 1 }
        } else if (event.key === "ArrowRight") {
            keys = { x: keys.x, y: keys.y + 1 }
        }
        var newGridAndLocations = information.gridToDisplay(old, keys, this.state.userLife.life, this.state.enemies.life, this.state.weapon.life);
        this.setState({ grid: newGridAndLocations.newBoard, userLocation: newGridAndLocations.currentLocation, oldUserLocation: newGridAndLocations.oldLocation, userLife:{life:newGridAndLocations.playerLife}})
    }


    componentDidMount() {
        this.setState({ grid: information.gridToDisplay(this.state.oldUserLocation, this.state.userLocation).newBoard })
        document.onkeydown = this.movePlayer;
    }
    render() {
        this.state.grid.map(e => {
            if (e.occupied === "enemies") {
                e.display = <p>&#x263B;</p>;
            } else if (e.occupied === "player") {
                e.display = <p>&#9641;</p>;
            } else if (e.occupied === "health") {

                e.display = <p>&#9749;</p>
            } else if (e.occupied === "weapon")
                e.display = <p>&#9935;</p>
        })
        return (

            <div >
                <div>
                    <Display infor={this.state} /></div>
                <div className="grid">
                    {this.state.grid.map(e =>
                        < button key={this.state.grid.indexOf(e)} id={e.pathWay ? "pathWay" : "notPathway"}>{e.display}</button>
                    )}
                </div>

            </div >
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);