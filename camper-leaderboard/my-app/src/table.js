
import React from 'react'
import Axios from "axios";
export default class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            storage: [],
       
           
        };
    };


    getUser(currentApi) {
        Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/'+currentApi)
            .then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    response.data[i]["number"] = i + 1;
                }
                this.setState({ storage: response.data });

            })
    }
    

    render() {
        return (
            <div >
                <table >
                    <thead >
                        <th>#</th>
                        <th>Images</th>
                        <th>Camper-Name</th>
                        <th ><button className="button" onClick={()=>this.getUser("recent")}>recent </button></th>
                        <th >< button className="button" onClick={()=>this.getUser("alltime")}>alltime</button></th>

                    </thead>
                    
                    {this.state.storage.map(userData =>
                     
                    <tbody>
                        <td>{userData.number}</td>

                        <td><img alt="" src={userData.img} /> </td>
                        <td>{userData.username}</td>
                        <td>{userData.recent }</td>
                        <td>{userData.alltime}</td>

                    </tbody>)}




                </table>

            </div>

        )

    }

}
