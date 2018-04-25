import React from 'react';
import Status from './status';
export default class List extends React.Component {


    display(recipeName) {
        var obj = this.props.list.find(item => item.Name === recipeName);
        console.log("obj", obj)
        this.props.showOrHide(obj)


    }
    eventHandler(name) {

        this.props.deleteButton(name)
    }
    edit(name) {
        this.props.editButton(name)
    }

    render() {
        console.log("this is the list", this.props)

        return (
            < div >
                {
                    this.props.list.map(element => {
                        return <div>
                            < button className="button" onClick={() => this.display(element.Name)}>{element.Name}</button><br />
                            <Status list={element.Ingredients} Name={element.Name} status={element.status} />
                        </div>
                    })
                }
            </div >
        )
    }
}
