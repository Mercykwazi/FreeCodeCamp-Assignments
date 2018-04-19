import React from 'react';
import ListC from './listC';


export default class List extends React.Component {
    eventHandler(name) {
        this.props.deleteButton(name)
    }
    edit(name) {
        this.props.editButton(name)
    }

    render() {
        console.log(this.props)
        localStorage.clear()
        return (
            <div>
                {this.props.list.map(element => {
                    return <div>
                        <button onClick={() => this.eventHandler(element.Name)}>delete {element.Name} </button>
                        <button onClick={() => this.edit(element.Ingredients)}>edit {element.Name} </button>
                    </div>
                })}
            </div>
        )
    }
}
