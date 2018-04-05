

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './table'
import 'bootstrap/dist/css/bootstrap.css';


class Main extends React.Component {
  render() {
    return (
      <div>
          <h1 class="container-fluid" >  Camper Leaderboard</h1>
            <Table />
      </div>
      
    );
  }
}
ReactDOM.render(<Main />, document.getElementById("app"));