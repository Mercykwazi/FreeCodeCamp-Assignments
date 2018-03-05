
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyApp extends React.Component{
    render(){
        return(<h1>Hello react world</h1>);
    }
}
const app =document.getElementById("app");
ReactDOM.render(<MyApp/>,app);
