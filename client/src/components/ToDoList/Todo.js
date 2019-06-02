import React, { Component } from 'react'
import { Button , Form , Input } from 'semantic-ui-react'

export default class Todo extends Component {
    render() {
        const {name, handleChange,handleSubmit} = this.props
        return (
            <div >
            <Form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary 
                        text-white">
                            <i className="fas fa-book"/>
                        </div>
                    </div>
                    <Input type="text" className="form-control"
                    placeholder="add name"
                    value={name}
                    onChange={handleChange}
                    />
                </div>
                <Button type="submit" className="ui black button">
                Add Name
                </Button>
            </Form>
                
            </div>
        );
    }
}