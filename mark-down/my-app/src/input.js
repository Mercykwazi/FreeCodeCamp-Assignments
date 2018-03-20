

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
                    <h4> is this even working</h4>
                    <input type="text" onChange={this.handleChange.bind(this)} />
                </label><br />
            
                
            </div>
        )
    }
}