import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import './index.css';
import List from './list';


class Main extends React.Component {
    constructor() {
        super()
        this.state = { storage: [], Name: "", Ingredients: '' }


    }
    // clearInput() {
    //     this.setState({ Name: "", Ingredients: "" })
    // }
    changeName(item) {
        this.setState({ Name: item })
    }

    changeIngredients(item) {
        this.setState({ Ingredients: item })
    }

    deleteRecipe(currentRecipe) {
        var renewed = [];
        var stored = this.state.storage;
        for (var i = 0; i < stored.length; i++) {
            if (stored[i].Name !== currentRecipe.Name || stored[i].Ingredients !== currentRecipe.Ingredients) {
                renewed.push(stored[i])
            } else if (stored[i].Name !== currentRecipe.Name && stored[i].Ingredients !== currentRecipe.Ingredients) {
                renewed.push(stored[i])

            }
            this.setState({ storage: renewed })
        }


        localStorage.setItem('data', JSON.stringify(renewed));
    }

    editRecipe(ingredients) {
        var updatedItems = prompt("please edit your Ingredients", ingredients);
        console.log("updated items", updatedItems)
        var recipeArray = this.state.storage;
        const recipe = recipeArray.find(function (r) { return r.Ingredients === ingredients })
        recipe.Ingredients = updatedItems;
        this.setState({ storage: recipeArray })
        localStorage.setItem('data', JSON.stringify(this.state.storage));
        console.log('recipe', this.state.storage);
    }
    storeRecipe() {
        var recipe = { Name: this.state.Name, Ingredients: this.state.Ingredients, status: false };
        if (this.state.Name === undefined || this.state.Name === "") {
            alert("unable to add empty product")
        //  } else if (recipe.Ingredients) {
        //      alert("recipe name already exist")
        } else {
            var list = this.state.storage;
            list.push(recipe);
            localStorage.setItem('data', JSON.stringify(list));
            console.log('storage', this.state.storage)
            var parsed = JSON.parse(localStorage.getItem('data'));
            this.setState({ storage: parsed });
        }
        //this.clearInput()
    }
    componentDidMount() {
        var parsed = JSON.parse(localStorage.getItem('data'));
        if (parsed) {
            this.setState({ storage: parsed });
        }
    }


    render() {
        return (
            <div className="container-fluid">
                <h1>Recipe Box</h1>
                <Input changeName={this.changeName.bind(this)} changeIngredients={this.changeIngredients.bind(this)} />
                <button className="button1" onClick={this.storeRecipe.bind(this)}  > Add Recipe</button>
                <List list={this.state.storage} deleteButton={this.deleteRecipe.bind(this)} editButton={this.editRecipe.bind(this)} />

            </div>
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);
