import React, { Component } from 'react'

export default class ListC extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false };
    }

    render() {
        return (
            <div>
                {this.props.list.map(element => {
                    <div>
                        <button onClick={() => this.setState({ show: !this.state.show })} ><li>{element.Ingredients.split(",").map(e => { return <ul>{e}</ul> })}</li></button><br /> 
                    </div>
                })}
            </div>

        )
    }
}