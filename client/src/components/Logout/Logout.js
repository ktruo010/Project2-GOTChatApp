import React, { Component } from 'react';
import './Logout.css'
import { Button , Icon } from 'semantic-ui-react'


class Logout extends Component {
    render() {
        return (
            <div className="logoutContainer">
             
             <Button animated='fade' fluid color="black" >
                <Button.Content>Logout</Button.Content>
                
                </Button>
               
            </div>
        );
    }
}

export default Logout;

