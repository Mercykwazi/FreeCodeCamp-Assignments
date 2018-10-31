import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as information from './information';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: information.grid(),
            userLocation: { x: 6, y: 1 },
            oldUserLocation: { x: 6, y: 1 },
            enemies: { life: 25 },
            door: {},
            currentStage: [],
            currentStageNum: 1,
            health: [],
            boss: {},
            weapons: [{ name: 'knife', damage: 15, image: <span>&#9760;</span> }, { name: 'sword', damage: 25, image: <span>&#9876;</span> }, { name: 'Pickaxe', damage: 40, image: <span>&#9935;</span> }, { name: ' pistol', damage: 60, image: <p> &#9755;</p> }],
            currentWeapon: {},
            currentWeaponNum: 1,
            userLife: { life: 20 },
            smallGrid: [],
            xp: 0,
            bossText: "In order to kill the boss and win the game you must have more than 200 points",
            showText: false,
            showOrHideGrid: true
        }
    }

    componentDidMount() {
        document.onkeydown = this.moveKeys;
        var results = information.stage1()
        var enemiesAndHealth = results.enemiesAndHealth;
        var firstStage = results.gridOfFirstStage;
        var gridSet = information.movePlayer(this.state.oldUserLocation, this.state.userLocation, this.state.userLife.life, this.state.enemies, this.state.weapons, this.state.door, firstStage, this.state.currentStageNum, this.state.xp);
        this.setState({
            enemies: enemiesAndHealth.enemySet,
            health: enemiesAndHealth.healthSet,
            currentWeapon: this.state.weapons[gridSet.newStageNum - 1],
            currentStage: firstStage,
            grid: gridSet.newBoard,
            currentStageNum: gridSet.newStageNum,
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

        var newGridAndLocations = information.movePlayer(old, keys, this.state.userLife.life, this.state.enemies, this.state.weapons, this.state.door, this.state.currentStage, this.state.currentStageNum, this.state.xp);
        if (newGridAndLocations.newBoard === "new board") {
            if (this.state.currentStageNum === 3) {
                this.setState({ showText: true })
            }
            var newGrid = information.changeStages(this.state.currentStageNum + 1);
            var boardCreated = information.createGrid(newGrid.grid);
            var toBeCurrentStage = boardCreated.board.filter(item => {
                return item.pathWay === true;
            });
            var newSmallGridCreated = information.createSmallGrid(keys, boardCreated.board);
            this.setState({ currentStageNum: this.state.currentStageNum + 1, currentWeapon: this.state.weapons[this.state.currentStageNum], currentStage: toBeCurrentStage, grid: boardCreated.board, userLocation: boardCreated.playerLoc, oldUserLocation: boardCreated.playerLoc, door: newGrid.door, enemies: newGrid.enemiesAndHealth.enemySet, health: newGrid.enemiesAndHealth.healthSet, xp: newGridAndLocations.currentXp });
        } else {
            newSmallGridCreated = information.createSmallGrid(keys, newGridAndLocations.newBoard);
            // this.hideGrid();
            this.setState({ smallGrid: newSmallGridCreated, currentStageNum: newGridAndLocations.newStageNum, userLocation: newGridAndLocations.currentLocation, grid: newGridAndLocations.newBoard, oldUserLocation: newGridAndLocations.oldLocation, enemies: newGridAndLocations.impactOfEnemies, userLife: { life: newGridAndLocations.playerLife }, weapons: newGridAndLocations.impactOfWeapons, door: this.state.door, xp: newGridAndLocations.currentXp })
        }
    }
    showGrid() {
        this.setState({ showOrHideGrid: true })
    }
    hideGrid() {
        this.setState({ showOrHideGrid: false });
    }
    restartGame() {
        window.location.reload();
    }

    render() {
        return (
            <div >
                <h1> Dungeon Crawler</h1>
                {this.state.showText && (
                    <p className="textStyle">{this.state.bossText}</p>
                )}
                <div className="grid-container">
                    <div className="grid-item">Stage:{this.state.currentStageNum}</div>
                    <div className="grid-item">XP:{this.state.xp}</div>
                    <div className="grid-item">Life:{this.state.userLife.life}</div>
                    <div className="grid-item">player:{<span> &#9975;</span>}</div>
                    <div className="grid-item">Health:{<span>&#9749;</span>}</div>
                    <div className="grid-item">Weapon:{this.state.currentWeapon.image}</div>
                    <div className="grid-item">Enemies:{<span>&#x263B;</span>}</div>
                    <div className="grid-item">Door:{<span>&#9641;</span>}</div></div>
                <div className="buttons">
                    <button className='show' onClick={() => this.showGrid()}>ShowGrid</button></div>
                {this.state.showOrHideGrid && (
                    <div className="grid">
                        {this.state.grid.map(e => {
                            if (e.occupied === "Enemies") {
                                e.display = <p>&#x263B;</p>
                            } else if (e.occupied === "Health") {
                                e.display = <p>&#9749;</p>
                            } else if (e.occupied === "player") {
                                e.display = <p> &#9975;</p>;
                            } else if (e.occupied === "weapon") {
                                e.display = this.state.currentWeapon.image
                            } else if (e.occupied === "door") {
                                e.display = <p>&#9641;</p>
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
                                e.display = <p> &#9975;</p>;
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
            </div >
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);

