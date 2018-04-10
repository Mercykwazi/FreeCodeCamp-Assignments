

import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import './index.css';
import List from './list'
class Main extends React.Component {
    constructor() {
        super()

        this.state = { fromLocalStorage: [], Name: "", Ingredients: '' }
    }

    changeName(item) {
        this.setState({ Name: item })
    }
    changeIngredients(item) {
        this.setState({ Ingredients: item })
    }

    storeRecipe() {
        var recipe = { Name: this.state.Name, Ingredients: this.state.Ingredients };
        var list = this.state.fromLocalStorage;
        list.push(recipe);
        localStorage.setItem('data', JSON.stringify(list));
        console.log('fromLs', this.state.fromLocalStorage)
        var parsed = JSON.parse(localStorage.getItem('data'));
        this.setState({ fromLocalStorage: parsed });
    }
    componentDidMount() {
        var parsed = JSON.parse(localStorage.getItem('data'));
        if (parsed) {
            this.setState({ fromLocalStorage: parsed });
        }
    }

    render() {
        return (
            <div>
                <h1>Recipe Box</h1>
                <Input changeName={this.changeName.bind(this)} changeIngredients={this.changeIngredients.bind(this)} />

                <button onClick={this.storeRecipe.bind(this)} class="btn btn-secondary" > Add Recipe</button>
                <List list={this.state.fromLocalStorage} />
            </div>
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);

