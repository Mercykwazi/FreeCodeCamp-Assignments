import React from "react";

export default class Status extends React.Component {
    constructor() {
        super()
        this.state = { status: false }

    }
    render() {
        console.log("status", this.props.status)
        return (
            <div>
                {
                 this.props.status===true?<div>
                 <li>
                     {
                         this.props.list.split(",").map(element => {
                             return <ul>{element}</ul>
                         })
                     }
                 </li>
                 <button className="button1" onClick={() => this.eventHandler(this.props.Name)}>delete </button>
                 <button className="button2" onClick={() => this.edit(this.props.list)}>edit  </button></div>:<div></div> 
                }
            </div>

        )
    }

}
