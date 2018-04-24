import React from "react";

export default class Status extends React.Component {
    constructor() {
        super()
        this.state = { status: false }

    }
    componentWillReceiveProps() {
        if (this.props.status) {
            this.setState({
                status: <div>
                    <li>
                        {
                            this.props.list.split(",").map(element => {
                                return <ul>{element}</ul>
                            })
                        }
                    </li>
                    <button className="button1" onClick={() => this.eventHandler(this.props.Name)}>delete </button>
                    <button className="button2" onClick={() => this.edit(this.props.list)}>edit  </button></div>
            })
        } else {
            this.setState({ status: null })
        }
    }
    render() {
        console.log("status", this.props.status)
        return (
            <div>
                {this.state.status}
            </div>

        )
    }

}
