import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as information from './information';
import Display from './display';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: information.grid(),
            userLocation: { x: 6, y: 1 },
            oldUserLocation: { x: 6, y: 1 },
            enemies: [],
            health: [],
            weapons: [{ name: 'knive', damage: 15, image: <p> &#9760;</p> }, { name: 'spear', damage: 19, image: <p>&#9935;</p> }, { name: ' pistol', damage: 26, image: <p> &#9755;</p> }],
            userLife: { life: 20 }

        }
    }
    componentDidMount() {
        document.onkeydown = this.moveKeys;
        var eAndH = information.enemiesAndHealth();
        this.setState({
            enemies: eAndH.enemySet,
            health: eAndH.healthSet,
            grid: information.movePlayer(this.state.oldUserLocation, this.state.userLocation).newBoard
        })
    }

    moveKeys = (event) => {
        console.log("just loaded")
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
        var newGridAndLocations = information.movePlayer(old, keys);
        this.setState({ userLocation: newGridAndLocations.currentLocation, grid: newGridAndLocations.newBoard, oldUserLocation: newGridAndLocations.oldLocation, enemies: this.state.enemies })

    }



    render() {
        return (
            <div >
                <h1> Dangeon Crawler</h1>
                <div className="grid">
                    {this.state.grid.map(e => {
                        if (e.occupied === "Enemies") {
                            e.display = <p>&#x263B;</p>
                        } else if (e.occupied === "Health") {
                            e.display = <p>&#9749;</p>
                        } else if (e.occupied === "player") {
                            e.display = <p>&#9641;</p>;
                        }
                        return <button key={this.state.grid.indexOf(e)} id={e.pathWay ? "pathWay" : "notPathway"}>{e.display}</button>
                    }


                    )}
                </div>

            </div >
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);


