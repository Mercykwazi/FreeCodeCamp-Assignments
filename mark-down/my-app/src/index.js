
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Input from './input'
import Markdown from './mark';



 class Main extends React.Component {
    constructor() {
        super();
        this.state = { input: "" };
    }
    changeState(item) {
        this.setState({ input: item })
    }


    render() {

        return (
            <div>
                <h1 >Markdown Previewer</h1>
                <Input changeState={this.changeState.bind(this)} />
                <h3><em>Your output is below...</em></h3>
                <Markdown result={this.state.input} />
               
            </div>
        )
    }
}
const app = document.getElementById("app")
ReactDOM.render(<Main />, app);



