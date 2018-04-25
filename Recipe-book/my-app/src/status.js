import React from "react";

export default class Status extends React.Component {
    constructor() {
        super()
        this.state = { status: false }
    }

    render() {
        console.log("status", this.props.list)
        console.log("what is this",this.props.edit)
        return (
            <div>
                {
                    this.props.status === true ? <div>
                        <li>
                            {
                                this.props.list.split(",").map(element => {
                                    return <ul>{element}</ul>
                                })
                            }
                        </li>
                        <button className="button1" onClick={() => this.props.delete}>delete </button>
                        <button className="button2" onClick={() => this.props.edit}>edit  </button></div> : <div></div>
                }
            </div>

        )
    }

}
