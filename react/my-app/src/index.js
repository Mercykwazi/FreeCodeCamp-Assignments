
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyApp extends React.Component{
    getname(name){
        return "mercy"
    }
    render(){
        return(<h1>My name is {this.getname()}</h1>);
    }
}
const app =document.getElementById("app");
ReactDOM.render(<MyApp/>,app);
