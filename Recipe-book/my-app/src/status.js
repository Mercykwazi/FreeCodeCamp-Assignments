import React from "react";

export default class Status extends React.Component {
    constructor() {
        super()
        this.state = { status: false}
    }

    render() {
        console.log("status", this.props.ingredients)
        console.log("active",{Name:this.props.name, ingredients:this.props.ingredients})
        console.log("status", this.props.status)
        return (
            <div>
                
                < button className="button" onClick={() => this.setState({ status: !this.state.status })}>{this.props.name}</button>
                {
                    this.state.status === true ? <div>
                        <li>
                            {
                                this.props.ingredients.split(",").map(element => {
                                    return <ul>{element}</ul>
                                })
                            }
                        </li>
                        <button className="button2" onClick={() => this.props.delete({Name:this.props.name, Ingredients:this.props.ingredients})}>delete </button>
                        <button className="button3" onClick={() => this.props.edit(this.props.ingredients)}>edit  </button></div> : <div></div>


                }
            </div>

        )
    }

}
