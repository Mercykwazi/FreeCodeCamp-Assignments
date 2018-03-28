
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './heading';
import Input from './input'
import Markdown from './mark';



export default class Convertor extends React.Component {
    constructor() {
        super();
        this.state = { input: "" };
    }
    changeState(iteam) {
        this.setState({ input: iteam })
    }
  

    render() {
        console.log(this.state)
        return (
            <div>
                <Heading />
                <Input changeState={this.changeState.bind(this)} />
                <Markdown result = {this.state.input}/>
            </div>
        )
    }
}
const app = document.getElementById("app")
ReactDOM.render(<Convertor />, app);


