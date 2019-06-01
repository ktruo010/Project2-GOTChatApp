import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        const {name, handleChange,handleSubmit} = this.props
        return (
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
                <button type="submit" className="btn btn-block
                btn-primary mt-3">
                Add Name
                </button>
            </form>
                
            </div>
        );
    }
}

