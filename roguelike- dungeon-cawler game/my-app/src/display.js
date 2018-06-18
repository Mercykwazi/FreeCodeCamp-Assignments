import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export default class Display extends React.Component {
    render() {

        return (
            <div>
                <p>enemies:&#x263B; {this.props.infor.enemies.amount} </p>
                <p>health:&#9749; {this.props.infor.health.amount} </p>
                <p>weapon:&#9935; </p>
            </div>

        )
    }
}