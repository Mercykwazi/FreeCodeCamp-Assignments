

import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import './index.css';

class Main extends React.Component {
    constructor() {
        super()
        this.state = { Name: "", Ingredients: '' }
    }

    changeName(item) {
        this.setState({ Name: item })
    }
    changeIngredients(item) {
        this.setState({ Ingredients: item })
    }
    // componentDidMount(){
    //     alert(this.state.Ingredients)
    // }
    render() {
        return (
            <div>
              {this.state.Ingredients}
                <h1>Recipe Box</h1>
                <Input changeName={this.changeName.bind(this)} changeIngredients={this.changeIngredients.bind(this)} />
                {this.state.Name}
               
            </div>
        )
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);

