import React, { Component } from 'react'
import { Button , Form , Input , } from 'semantic-ui-react'


export default class Todo extends Component {
    render() {
        const {name, handleChange,handleSubmit} = this.props
        return (

            <div id="addNameContainer">
            <Form onSubmit={handleSubmit} id="listForm">
                <div className="input-group" >
                    
                    <Input id="inputColor" type="text" transparent placeholder='Add a...' 

            <div className="card-card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary 
                        text-white">
                            <i className="fas fa-book"/>
                        </div>
                    </div>
                    <input type="text" className="form-control"
                    placeholder="add name"
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

                <button type="submit" className="btn btn-block
                btn-primary mt-3">
                Add Name
                </button>
            </form>
                
            </div>
        );
    }
}


