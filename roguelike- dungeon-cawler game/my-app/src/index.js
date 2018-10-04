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
            currentWeapon: {},
            userLife: { life: 20 }

        }
    }

    componentDidMount() {
        document.onkeydown = this.moveKeys;
        var results = information.stage1()
        var enemieAndHealth = results.enemiesAndHealth;
        var creatingWeapons = results.weapon;
        var door = results.door;
        var firstStage = results.gridOfFirstStage;
        var gridSet = information.movePlayer(this.state.oldUserLocation, this.state.userLocation, this.state.userLife.life, this.state.enemies, this.state.weapons, this.state.door, firstStage, this.state.currentStageNum);
        this.setState({
            enemies: enemieAndHealth.enemySet,
            health: enemieAndHealth.healthSet,
            weapons: creatingWeapons,
            currentStage: firstStage,
            grid: gridSet.newBoard,
            currentStageNum: gridSet.newStageNum
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
        var newGridAndLocations = information.movePlayer(old, keys, this.state.userLife.life, this.state.enemies, this.state.weapons, this.state.door, this.state.currentStage, this.state.currentStageNum);
        if (newGridAndLocations.newBoard === "new board") {
            var innialGrid = this.state.grid;
            var newGrid = information.changeStages(this.state.currentStageNum + 1, this.state.userLocation);
            console.log("newGrid", newGrid.theResults.grid);
            var boardCreated = information.createGrid(newGrid.theResults.grid);
            console.log("boardCreated", boardCreated);
            this.setState({ currentStageNum: this.state.currentStageNum + 1, currentStage: boardCreated, grid: boardCreated, userLocation: newGrid.currentLocation, door: newGrid.theResults.door, currentWeapon: newGrid.theResults.weapon, enemies: newGrid.theResults.enemiesAndHealth.enemySet, health: newGrid.theResults.enemiesAndHealth.healthSet });
        } else {
            this.setState({ currentStageNum: newGridAndLocations.newStageNum, userLocation: newGridAndLocations.currentLocation, grid: newGridAndLocations.newBoard, oldUserLocation: newGridAndLocations.oldLocation, enemies: newGridAndLocations.impactOfEnemies, userLife: { life: newGridAndLocations.playerLife }, weapons: newGridAndLocations.impactOfWeapons, door: this.state.door })
        }
    }

    render() {
  return (
            <div >
                <h1> Dangeon Crawler</h1>
                <h2>XP:{this.state.userLife.life}</h2>
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

