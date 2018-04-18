import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import './index.css';
import List from './list'
class Main extends React.Component {
    constructor() {
        super()

        this.state = { fromLS: [], Name: "", Ingredients: '' }
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

    editRecipe(recipe) {
        var updatedItems = prompt("please edit your Ingredients", recipe);
        console.log("updated iteams", updatedItems)
        console.log("fromLs", this.state.fromLS)
        var ingredients = this.state.fromLS;
        const ingr = ingredients.find(ingri => ingri.Ingredients === "Ingredients")
        console.log('ingr', ingr);
        
        
    }
    //function isCherries(fruit) { 
    //     return fruit.name === 'cherries';
    // }
    // console.log("ingridients", ingridients)


    // this.state.fromLS.forEach(iteam => {
    //     if (iteam.item === item) {
    //         this.state.fromLS.indexOf(iteam);
    //         this.state.fromLS.splice(this.state.fromLS.indexOf(iteam), this.state.fromLS.indexOf(iteam), updatedItems);
    //          localStorage.setItem("editedRecipe", updatedItems);
    // localStorage.getItem('editedRecipe')
    // this.setState({ fromLS: localStorage.setItem("editedRecipe", updatedItems) })

    //     }
    // })
//}

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
            <List list={this.state.fromLS} deleteButton={this.deleteRecipe.bind(this)} editButton={this.editRecipe.bind(this)} />
        </div>
    )
}
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);
