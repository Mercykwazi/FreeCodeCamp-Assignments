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
            enemies: { life: 25 },
            door: {},
            AllStages: { stage1: stages.stage1, stage2: stages.stage2, stage3: stages.stage3, stage4: stages.stage4 },
            currentStage: [],
            currentStageNum: 1,
            health: [],
            boss: {},
            weapons: [{ name: 'knive', damage: 15, image: <p> &#9760;</p> }, { name: 'sword', damage: 25, image: <p>&#9876;</p> }, { name: 'Pickaxe', damage: 40, image: <p>&#9935;</p> }, { name: ' pistol', damage: 60, image: <p> &#9755;</p> }],
            currentWeapon: {},
            currentWeaponNum: 1,
            userLife: { life: 20 },
            smallGrid: [],
            showOrHideGrid:true
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
            currentWeapon: this.state.weapons[gridSet.newStageNum - 1],
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
        var newSmallGridCreated = information.createSmallGrid(keys,newGridAndLocations.newBoard);
        if (newGridAndLocations.newBoard === "new board") {
            var innialGrid = this.state.grid;
            var newGrid = information.changeStages(this.state.currentStageNum + 1);
            var boardCreated = information.createGrid(newGrid.grid);
            var toBeCurrentStage = boardCreated.board.filter(item => {
                return item.pathWay === true;
            });
            this.setState({ currentStageNum: this.state.currentStageNum + 1, currentWeapon: this.state.weapons[this.state.currentStageNum], currentStage: toBeCurrentStage, grid: boardCreated.board, userLocation: boardCreated.playerLoc, oldUserLocation: boardCreated.playerLoc, door: newGrid.door, enemies: newGrid.enemiesAndHealth.enemySet, health: newGrid.enemiesAndHealth.healthSet });
        } else {
            this.setState({ smallGrid: newSmallGridCreated, currentStageNum: newGridAndLocations.newStageNum, userLocation: newGridAndLocations.currentLocation, grid: newGridAndLocations.newBoard, oldUserLocation: newGridAndLocations.oldLocation, enemies: newGridAndLocations.impactOfEnemies, userLife: { life: newGridAndLocations.playerLife }, weapons: newGridAndLocations.impactOfWeapons, door: this.state.door })
        }
    }
    hideOrShow() {
        var innitalGrid=this.state.showOrHideGrid
        if(!innitalGrid){
            this.setState({showOrHideGrid:true})
        }else
        this.setState({showOrHideGrid: false});
      }
    
    render() {
    
        return (
            <div >
                <h1> Dangeon Crawler</h1>
                <h2>XP:{this.state.userLife.life}</h2>
                <button onClick={()=>this.hideOrShow()}>hideOrShow</button>
                {this.state.showOrHideGrid && (
                    <div className="grid">
                    {this.state.grid.map(e => {
                        if (e.occupied === "Enemies") {
                            e.display = <p>&#x263B;</p>
                        } else if (e.occupied === "Health") {
                            e.display = <p>&#9749;</p>
                        } else if (e.occupied === "player") {
                            e.display = <p>&#9641;</p>;
                        } else if (e.occupied === "weapon") {
                            e.display = this.state.currentWeapon.image
                        } else if (e.occupied === "door") {
                            e.display = <p>door</p>
                        } else if (e.occupied === "boss") {
                            e.display = <p>boss</p>
                        }
                        
                        return <button key={this.state.grid.indexOf(e)} id={e.pathWay ? "pathWay" : "notPathway"}>{e.display}</button>
                    }
                    )}
                </div>
                )}
                {!this.state.showOrHideGrid && (
                    <div className="smallGrid">
                    {this.state.smallGrid.map(e => {
                        if (e.occupied === "Enemies") {
                            e.display = <p>&#x263B;</p>
                        } else if (e.occupied === "Health") {
                            e.display = <p>&#9749;</p>
                        } else if (e.occupied === "player") {
                            e.display = <p>&#9641;</p>;
                        } else if (e.occupied === "weapon") {
                            e.display = this.state.currentWeapon.image
                        } else if (e.occupied === "door") {
                            e.display = <p>door</p>
                        } else if (e.occupied === "boss") {
                            e.display = <p>boss</p>
                        }
                        <h3>yess</h3>
                        return <button key={this.state.grid.indexOf(e)} id={e.pathWay ? "pathWay" : "notPathway"}>{e.display}</button>
                    }
                    )}
                </div> 
                )}
            </div >
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);

