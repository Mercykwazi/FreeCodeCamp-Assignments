import React from 'react';

export default class List extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.list.map(element => {
                    return <div><button>{element.Name}</button><br />
                        <li>{element.Ingredients.split(",").map(e => { return <ul>{e}</ul> })}</li></div>
                })}


            </div>
        )
    }
}
