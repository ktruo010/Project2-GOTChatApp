import React, { Component } from 'react'

export default class Todoitem extends Component {
    render() {
        const {title}=this.props
        return (
           
            <h3>{title}</h3>
           
        );
    }
}