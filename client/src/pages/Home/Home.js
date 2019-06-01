import React, { Component } from 'react'
import WriteMessage from '../../components/WriteMessage'
import GatherMessages from '../../components/GatherMessages'
import Messages from '..//../utils/Message.js'
import MainTodo from '../../components/ToDoList/MainTodo';

class Home extends Component {
    state = {
        username: 'Kevin',
        WriteMessage: '',
        messageArr: []
    }
    retrieveUsers() {
        Messages.getAll()
            .then(({ data }) => {
                this.setState({ messageArr: data })
                console.log(data)
            })
    }
    componentWillMount() {
        this.retrieveUsers()
        setInterval(_ => {
            Messages.getLength()
                .then(({ data: { count } }) => {
                    if (count !== this.state.messageArr.length) {
                        this.retrieveUsers()
                    }
                })
                .catch(error => console.log(error))
        }, 2000)
    }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        let message = {
            message: this.state.WriteMessage,
            username: this.state.username
        }
        let messageArr = this.state.messageArr
        Messages.postOne(message)
        messageArr.push(message)
        this.setState({ messageArr })
    }

    render() {
        return (
            <>
                <h1>Chat App</h1>
                <GatherMessages messageArr={this.state.messageArr} />
                <WriteMessage handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} username={this.state.username} message={this.state.message} />
                <MainTodo/>
            </>
        )
    }
}

export default Home
