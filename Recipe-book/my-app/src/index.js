import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import './index.css';
import List from './list'
class Main extends React.Component {
    constructor() {
        super()

        this.state = { fromLS: [], Name: "", Ingredients: '', on: false,list:"" }

    }
    displayer() {
        if(this.state.on===false){
            this.setState({on:false})
            this.setState({list:"Ingredients"})
            this.setState({Ingredients:list})
        }else{
            this.setState({on:true})
            this.setState({list:""})
        }
        console.log("is this working")
    }
    changeName(item) {
        this.setState({ Name: item })
    }

    changeIngredients(item) {
        this.setState({ Ingredients: item })
    }

    deleteRecipe(name) {
        this.state.fromLS.forEach(item => {
            if (item.Name === name) {
                this.state.fromLS.splice(this.state.fromLS.indexOf(item), this.state.fromLS.indexOf(item) + 1)
                this.setState({ fromLS: this.state.fromLS })


            }
        })
    }

    editRecipe(ingredients) {
        var updatedItems = prompt("please edit your Ingredients", ingredients);
        console.log("updated iteams", updatedItems)
        var recipeArray = this.state.fromLS;
        const recipes = recipeArray.find(function (r) { return r.Ingredients === ingredients })
        var position = this.state.fromLS.indexOf(recipes)
        recipes.Ingredients = updatedItems;
        this.state.fromLS[position] = recipes
        this.setState({ fromLS: this.state.fromLS })
        localStorage.setItem('data', JSON.stringify(this.state.fromLS));
        console.log('recipe', this.state.fromLS);
    }
    storeRecipe() {
        var recipe = { Name: this.state.Name, Ingredients: this.state.Ingredients };
        var list = this.state.fromLS;
        list.push(recipe);
        localStorage.setItem('data', JSON.stringify(list));
        console.log('fromLs', this.state.fromLS)
        var parsed = JSON.parse(localStorage.getItem('data'));
        this.setState({ fromLS: parsed });
    }
    componentDidMount() {
        var parsed = JSON.parse(localStorage.getItem('data'));
        if (parsed) {
            this.setState({ fromLS: parsed });
        }
    }


    render() {
        return (
            <div>
                <h1>Recipe Box</h1>
                <Input changeName={this.changeName.bind(this)} changeIngredients={this.changeIngredients.bind(this)} />
                <button onClick={this.storeRecipe.bind(this)} class="btn btn-secondary" > Add Recipe</button>
                <List  list={this.state.fromLS} deleteButton={this.deleteRecipe.bind(this)} displayer={this.displayer.bind(this)} editButton={this.editRecipe.bind(this)} />
            </div>
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);
