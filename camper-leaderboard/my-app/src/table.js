//import React from "react"
import React from 'react'
import Axios from "axios";
export default class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            storage: [],
            position: [],
        };
    };
    recent() {
        Axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
            .then(response => {
                this.setState({ storage: response.data });

            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(response => {
                this.setState({ storage: response.data })
                // console.log(this.state.storage)
                // console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (
            <div >
                <button onClick={this.recent.bind(this)}>working!</button>
                <table >
                    <thead>
                        
                        <th>Camper-Name</th>
                        <th >Point-in-30-Days</th>
                        <th>All-Time-Points</th>
                    </thead>
                    {this.state.storage.map(userData =>

                        <tbody>
               
                            <td>{userData.username}</td>
                            <td>{userData.recent}</td>
                            <td>{userData.alltime}</td>
                        </tbody>)}


        
            
                </table>

            </div>
        )
    }
}
