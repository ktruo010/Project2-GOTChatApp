import React, { Component } from 'react'
import WriteMessage from '../../components/WriteMessage'
import GatherMessages from '../../components/GatherMessages'
import Messages from '..//../utils/Message.js'
import ChatBanner from '../../components/Banner/Banner'
import Logout from '../../components/Logout/Logout'
import MainToDo from '../../components/ToDoList/MainTodo'
import ScrollToBottom from 'react-scroll-to-bottom';
///css imports

import 'semantic-ui-css/semantic.min.css'

class Home extends Component {
    state = {
        image: localStorage.getItem('image'),
        username: localStorage.getItem('user'),
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
        if(this.state.WriteMessage===''){
            this.state.WriteMessage='Valar Dohaeris'
        }
        let message = {
            message: this.state.WriteMessage,
            username: this.state.username,
            image: this.state.image
        }
        let messageArr = this.state.messageArr
        Messages.postOne(message)
        messageArr.push(message)
        this.setState({ messageArr, WriteMessage: '' })
    }

    render() {
        return (
            <div>
                <ChatBanner/>
                <MainToDo/>
                <ScrollToBottom >
                <GatherMessages messageArr={this.state.messageArr} />
                </ScrollToBottom>

                

                <WriteMessage placeholder="Valar Mogulis" handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} username={this.state.username} message={this.state.WriteMessage} />

                

                <Logout/>
            </div>
        )
    }
}

export default Home
