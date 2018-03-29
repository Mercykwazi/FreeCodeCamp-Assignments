//import React from "react"
import React from 'react'
import Axios from "axios";
export default class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            storage: [],
        
        };
    };
    componentDidMount() {
        Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(response => {
                this.setState({ storage: response.data})
                console.log(this.state.storage)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (
            <div >
                <table >
                    <thead>

                        <th>Camper-Name</th>
                        <th>Point-in-30-Days</th>
                        <th>All-Time-Points</th>
                    </thead>
                    {this.state.storage.map(uData =>
                        <tbody>
                            <td>{uData.username}</td>
                            <td>{uData.recent}</td>
                            <td>{uData.alltime}</td>
                        </tbody>)}


                </table>

            </div>
        )
    }
}
