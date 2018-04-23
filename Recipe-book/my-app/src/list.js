import React from 'react';
// import ListC from './listC';


export default class List extends React.Component {
    constructor() {
        super()
        this.state = {
            status: true, storage: {},
        }

    }

    display(recipeName) {
        var obj = this.props.list.find(item => item.Name === recipeName);
        console.log(obj)
        this.props.showOrHide(obj)
        //     if (this.state.status) {
        //         this.setState({ status: false });
        //         this.setState({
        //             storage:<div>
        //             < button >{element.Name}</button><br />
        //             <li>{element.Ingredients.split(",").map(e => { return <ul>{e}</ul> })}</li>
        //             <button onClick={() => this.eventHandler(element.Name)}>delete {element.Name} </button>
        //             <button onClick={() => this.edit(element.Ingredients)}>edit {element.Name} </button></div>
        //             })
        //     } else {
        //         this.setState({ status: true });
        //         this.setState({ storage: < button>{element.Name}</button> })
        //     }


    }
    eventHandler(name) {

        this.props.deleteButton(name)
    }
    edit(name) {
        this.props.editButton(name)
    }

    render() {
        console.log(this.props)
        return (
            < div >
                {
                    this.props.list.map(element => {
                        return <div>
                            < button onClick={() => this.display(element.Name)}>{element.Name}</button><br />
                            <li>{element.Ingredients === null ? <div></div> : element.Ingredients.split(",").map(e => { return <ul>{e}</ul> })}</li>
                            <button onClick={() => this.eventHandler(element.Name)}>delete {element.Name} </button>
                            <button onClick={() => this.edit(element.Ingredients)}>edit {element.Name} </button></div>
                    })
                }
            </div >
        )
    }
}
