import React from "react";

export default class Status extends React.Component {
    constructor() {
        super()
        this.state = { status: false }
    }

    render() {
        console.log("status", this.props.ingredients)
        console.log("status",this.props.status)
        return (
            <div>
                {
                    this.props.status === true ? <div>
                        <li>
                            {
                                this.props.ingredients.split(",").map(element => {
                                    return <ul>{element}</ul>
                                })
                            }
                        </li>
                        <button className="button1" onClick={() => this.props.delete(this.props.name)}>delete </button>
                        <button className="button2" onClick={() => this.props.edit(this.props.ingredients)}>edit  </button></div> : <div></div>
                     // localStorage.setItem('data', JSON.stringify(this.state.storage));

              }
            </div>

        )
    }

}
