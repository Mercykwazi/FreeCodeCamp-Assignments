import React, { Component } from 'react'

export default class CoolButton extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false };
    }

    render() {

        const text = this.state.show ?
            <div style={{ display: this.state.show ? "block" : "none" }}>This is some text</div> :
            null;

        return (
            <div>
                <button onClick={() => this.setState({ show: !this.state.show })}>{this.props.text}</button>
                {text}
            </div>);
    }
}