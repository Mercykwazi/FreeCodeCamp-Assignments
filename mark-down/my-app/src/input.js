
import React from 'react';

export default class Input extends React.Component {
    handleChange(e) {
        const item = e.target.value;
        this.props.changeState(item);
    }
    render() {
        return (
            <div>
                <label>
                    <textarea placeholder="Please type your text here..." onChange={this.handleChange.bind(this)} ></textarea>
                </label><br />
            </div>
        )
    }
}