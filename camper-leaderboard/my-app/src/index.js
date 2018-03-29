

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './table'

class Main extends React.Component {
  render() {
    return (
      <div>
         <h1> Camper Leaderboard </h1>
        <Table/>
      </div>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById("app"));