import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export default class Display extends React.Component {
    render() {

        return (
            <div>
                <p>enemies:<h7>&#x263B;</h7> {this.props.infor.enemies.amount} </p>
                <p>health:<h7>&#9749;</h7> {this.props.infor.health.amount} </p>
                <p>weapon:<h7>&#9935;</h7> {this.props.infor.weapon.amount} </p>
            </div>

        )
    }
}