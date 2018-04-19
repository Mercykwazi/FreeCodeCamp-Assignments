
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
                for (var i = 1; i < response.data.length; i++) {
                    this.state.position.push(i)
                 console.log("position",this.state.position)
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    what() {
        Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    response.data[i]["number"] = i + 1;        
                }
                this.setState({ storage: response.data });
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
                        <th>#</th>
                        <th>Images</th>
                        <th>Camper-Name</th>
                        <th ><button  onClick={this.recent.bind(this)}>recent </button></th>
                        <th >< button  onClick={this.recent.bind(this)}>Point-in-30-Days</button></th>
                     
                    </thead>
                    {this.state.storage.map(userData =>

                        <tbody>
                            <td>{userData.number}</td>

                            <td><img alt="" src={userData.img} /> </td>
                            <td>{userData.username}</td>
                            <td>{userData.recent}</td>
                            <td>{userData.alltime}</td>
                        </tbody>)}




                </table>

            </div>
            
        )
    }
}
