import React from 'react';

export default class Input extends React.Component {
    eventHandler(e) {
        const newName = e.target.value;
        this.props.changeName(newName)
    }
    ingredient(e) {
        const newIngredient = e.target.value;
        this.props.changeIngredients(newIngredient)
    }

    render() {
        return (
            <div>

                <input  onChange={this.eventHandler.bind(this)} type="text" placeholder="Recipe Name" />

                <br />
                <br />

                <textarea onChange={this.ingredient.bind(this)} placeholder="Enter your ingredients..."></textarea>
            </div>
        )
    }

}