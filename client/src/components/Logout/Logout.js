import React, { Component } from 'react';
import './Logout.css'
import { Button , Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class Logout extends Component {
    handleFormSubmit=()=>{
        localStorage.removeItem('user');
        this.props.history.push('/');
        
      }
    render() {
        return (
            <div className="logoutContainer">
             
             <Button animated='fade' fluid color="black" onClick={this.handleFormSubmit}>
                <Button.Content>Logout</Button.Content>
                
                </Button>
               
            </div>
        );
    }
}

export default withRouter(Logout);

