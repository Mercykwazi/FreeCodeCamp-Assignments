import React from 'react';


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Name: this.props.Name, ingredients: this.props.ingredients, storage: this.props.storage }
    }

    saveRecipe(ingredients) {
        this.props.edit(ingredients);
        
    
    }
    eventHandler(e) {
        const newName = e.target.value;
        this.props.changeIngredients(newName);
        
        this.setState({ingredients:newName})
        console.log("changeI",this.state.ingredients)
    }

    render() {
   

        return (

<div>
            <textarea value={this.state.ingredients} onChange={this.eventHandler.bind(this)}  ></textarea>
           
            <button onClick={()=> this.saveRecipe(this.state.ingredients)}>Save Recipe</button>
</div>

        )


    }
    
}