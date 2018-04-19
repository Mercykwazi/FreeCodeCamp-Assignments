import React from 'react';

export default class List extends React.Component {
    eventHandler(name) {
        this.props.deleteButton(name)
    }
    edit(name) {
        this.props.editButton(name)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.list.map(element => {
                    return <div>
                        < button onClick={()=>this.props.displayer()}>{element.Name}</button><br />
                        <li>{element.Ingredients.split(",").map(e => { return <ul>{e}</ul> })}</li>
                        <button onClick={() => this.eventHandler(element.Name)}>delete {element.Name} </button>
                        <button onClick={() => this.edit(element.Ingredients)}>edit {element.Name} </button></div>
                })}
            </div>
        )
    }
}
