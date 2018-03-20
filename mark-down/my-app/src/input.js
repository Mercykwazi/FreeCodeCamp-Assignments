

import React from 'react';

export default class Input extends React.Component {
    handleChange(e) {
        const iteam = e.target.value;
        this.props.changeState(iteam);
    }
    render() {
        return (
            <div>
                <label>

                    <textarea onChange={this.handleChange.bind(this)} ></textarea>
                </label><br />
            </div>
        )
    }
}