import React, { Component } from 'react'
import Todoitem from './Todoitem';
import { Button , Segment , Header } from 'semantic-ui-react'
export default class Todolist extends Component {
    render() {
        const {names}=this.props
        return (
            <ul >
                
                    <h3>Current Chat Names</h3>
                   
                
        {
            names.map(name => {
                return(
                <Todoitem key={name.id} title={name.title}/>
                )
            })
        }
                <Button type="button"
                className="ui black button"
                >
                clear name

                </Button>
            </ul>           
        );
    }
}