import React, { Component } from 'react'
import Todoitem from './Todoitem';
export default class Todolist extends Component {
    render() {
        const {names}=this.props
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    Current Chat Names
                </h3>
        {
            names.map(name => {
                return(
                    <Todoitem key={name.id} title={name.title}/>
                )
            })
        }
                <button type="button"
                className="btn btn-danger btn-block text-capitalize mt-5"
                >
                clear name

                </button>
            </ul>           
        );
    }
}


