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

    changeName(item) {
        this.setState({ Name: item })
    }

    changeIngredients(item) {
        this.setState({ Ingredients: item })
    }

    deleteRecipe(name) {
        this.state.storage.forEach(item => {
            if (item.Name === name) {
                this.state.storage.splice(this.state.storage.indexOf(item), this.state.storage.indexOf(item) + 1)
                this.setState({ storage: this.state.storage })


            }
        })
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
        var list = this.state.storage;
        list.push(recipe);
        localStorage.setItem('data', JSON.stringify(list));
        console.log('storage', this.state.storage)
        var parsed = JSON.parse(localStorage.getItem('data'));
        this.setState({ storage: parsed });
    }
    componentDidMount() {
        var parsed = JSON.parse(localStorage.getItem('data'));
        if (parsed) {
            this.setState({ storage: parsed });
        }
    }
    hideOrShow(recipeToHide) {
        var position = this.state.storage.indexOf(recipeToHide);
        if (recipeToHide.status) {
            this.state.storage[position].status = false;
            this.setState({ storage: this.state.storage })
        } else {
            var parsed = JSON.parse(localStorage.getItem('data'));
            this.state.storage[position].status = true;
            this.setState({ storage: this.state.storage })
            console.log("parsed", parsed[position].Ingredients)
        }
    }

    render() {
        return (
            <div>
                <h1>Recipe Box</h1>
                <Input changeName={this.changeName.bind(this)} changeIngredients={this.changeIngredients.bind(this)} />
                <button onClick={this.storeRecipe.bind(this)} className="btn btn-secondary" > Add Recipe</button>
                <List list={this.state.storage} showOrHide={this.hideOrShow.bind(this)} deleteButton={this.deleteRecipe.bind(this)} editButton={this.editRecipe.bind(this)} />
               
            </div>
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);
