import React, { Component } from 'react'
import { Button , Form , Input , } from 'semantic-ui-react'

export default class Todo extends Component {
    render() {
        const {name, handleChange,handleSubmit} = this.props
        return (
            <div id="addNameContainer" >
            <Form onSubmit={handleSubmit} id="listForm" >
                <div className="input-group" >
                    
                    <Input id="inputColor" type="text" transparent placeholder='Add a...' 
                    value={name}
                    onChange={handleChange}
                    />
                </div>
                <Button type="submit" color="black" size="medium" basic inverted id="faceBtn">
                Face
                </Button>
            </Form>
                </div>
            
        );
    }
}