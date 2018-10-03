import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as stages from './stages'
import * as information from './information';
import Display from './display';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: information.grid(),
            userLocation: { x: 6, y: 1 },
            oldUserLocation: { x: 6, y: 1 },
            enemies: { life: 20 },
            door: {},
            AllStages: { stage1: stages.stage1, stage2: stages.stage2, stage3: stages.stage3 },
            currentStage: [],
            currentStageNum: 1,
            health: [],
            weapons: [{ name: 'knive', damage: 15, image: <p> &#9760;</p> }, { name: 'spear', damage: 19, image: <p>&#9935;</p> }, { name: ' pistol', damage: 26, image: <p> &#9755;</p> }],
            userLife: { life: 20 }

        }
    }   
    
    componentDidMount() {
        document.onkeydown = this.moveKeys;
        var results = information.stage1()
        var enemieAndHealth = results.enemiesAndHealth;
        var creatingWeapons = results.weapon;
        var door = results.door;
        var firstStage = results.gridOfFirstStage
        this.setState({
            enemies: enemieAndHealth,
            health: enemieAndHealth,
            weapons: creatingWeapons,
            currentStage: firstStage,
            grid: information.movePlayer(this.state.oldUserLocation, this.state.userLocation, this.state.userLife.life, this.state.enemies, this.state.weapons, this.state.door,firstStage).newBoard
        })
    }


    moveKeys = (event) => {
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
        var newGridAndLocations = information.movePlayer(old, keys, this.state.userLife.life, this.state.enemies, this.state.weapons, this.state.door, this.state.currentStage);
        this.setState({ userLocation: newGridAndLocations.currentLocation, grid: newGridAndLocations.newBoard, oldUserLocation: newGridAndLocations.oldLocation, enemies: newGridAndLocations.impactOfEnemies, userLife: { life: newGridAndLocations.playerLife }, weapons: newGridAndLocations.impactOfWeapons, door: this.state.door})
    }

    render() {
        console.log("all the stages in state",this.state.AllStages);
        
        return (
            <div >
                <h1> Dangeon Crawler</h1>
                <h2>Health:{this.state.userLife.life}</h2>
                <div className="grid">
                    {this.state.grid.map(e => {
                        if (e.occupied === "Enemies") {
                            e.display = <p>&#x263B;</p>
                        } else if (e.occupied === "Health") {
                            e.display = <p>&#9749;</p>
                        } else if (e.occupied === "player") {
                            e.display = <p>&#9641;</p>;
                        } else if (e.occupied === "weapon") {
                            e.display = <p>&#9935;</p>
                        } else if (e.occupied === "door") {
                            e.display = <p>door</p>
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

