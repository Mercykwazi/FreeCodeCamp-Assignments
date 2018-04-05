import React from 'react'

export default class Handler extends React.Component {
    eventHandler(e) {
        const title = e.target.value;
        this.props.newState(this.props.newValue)
    }   
    render() {
        console.log("props", this.props)
        return (
            <div>
                <input onChange={this.eventHandler.bind(this)} />
            </div>
        );
    }
}