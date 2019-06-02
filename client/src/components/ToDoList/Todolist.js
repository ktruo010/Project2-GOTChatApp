import React, { Component } from 'react'
import Todoitem from './Todoitem';
export default class Todolist extends Component {
    deleteName = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        this.props.HandleDelete(e.target.id)
    }
    render() {
        const {names}=this.props
        
        return (
            <ul className="ShowCurrentName">
                <h3 className="showName">
                    Current Chat Names
                </h3> 
        {
            names.map(name => {
                return(
                    <>
                    <Todoitem key={name.id} title={name.title}/>
                    <button type="button" id={name.id} onClick={this.deleteName}/>
                    </>
                )
            })
        }
            </ul>           
        );
    }
}


