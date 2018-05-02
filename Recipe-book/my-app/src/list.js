import React from 'react';
import Status from './status';
export default class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = { storage: this.props.list }
    }
    // display(recipeName) {
    //     var obj = this.props.list.find(item => item.Name === recipeName);
    //     console.log("obj", obj)
    //     this.props.showOrHide(obj)


    // }

    delete(name) {
        this.props.deleteButton(name)
    }
    edit(name) {
        this.props.editButton(name)
    }

    render() {
        console.log("this is the list", this.props.list)
        console.log("deleting", this.props.deleteButton)
        

        return (
            < div >
                {
                    this.props.list.map(element => {
                        return <div>
                            <Status ingredients={element.Ingredients} name={element.Name} delete={this.delete.bind(this)} edit={this.edit.bind(this)} status={element.status} />
                        </div>
                    })
                }
            </div >
        )
    }
}
