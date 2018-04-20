

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './table'
import 'bootstrap/dist/css/bootstrap.css';


class Main extends React.Component {
  render() {
    return (
      <div  className="col-sm-12">
        <h1 className="container-fluid">Camper Leaderboard</h1>
        <Table />
      </div>

    );
  }
}
ReactDOM.render(<Main />, document.getElementById("app"));