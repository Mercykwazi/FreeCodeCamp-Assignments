import React from "react";
import ModalForEdits from "./modal-to-edit"
export default class Status extends React.Component {
    constructor() {
        super()
        this.state = { status: false }
    }

    render() {
        console.log("status", this.props.ingredients)
        console.log("active", { Name: this.props.name, ingredients: this.props.ingredients })
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
                        <button className="button2" onClick={() => this.props.delete({ Name: this.props.name, Ingredients: this.props.ingredients })}>delete </button>                      
                       <ModalForEdits className="button2" name={this.props.name} ingredients={this.props.ingredients} replacer={this.props.replacer}/>
                        </div> : <div></div>


                }
            </div>

        )
    }

}
