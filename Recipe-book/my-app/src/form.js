import React from 'react';


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Name: this.props.Name, ingredients: this.props.ingredients, storage: this.props.storage }
    }

    saveRecipe(name) {
        this.props.edit(name);
    }

    render() {
        return (

<div>
            <textarea save={this.saveRecipe.bind(this)}  ></textarea>
            <button onClick={this.saveRecipe.bind(this)}>Save Recipe</button>
</div>
        )


    }
}