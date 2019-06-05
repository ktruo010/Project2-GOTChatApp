import React, { Component } from 'react';
import './Logout.css'
import { Button , Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import { GiDrakkar } from 'react-icons/gi';

class Logout extends Component {
    handleFormSubmit=()=>{
        localStorage.removeItem('user');
        localStorage.setItem('Authenticate','false');
        this.props.history.push('/');
        
      }
    render() {
        return (
            <div className="logoutContainer">
             
             <Button animated='fade' fluid color="black" onClick={this.handleFormSubmit}>
                <Button.Content> <GiDrakkar/> Logout <GiDrakkar/> </Button.Content>
                
                </Button>
               
            </div>
        );
    }
}

export default withRouter(Logout);

//class Question extends React.Component {
//    render() {
//        return <h3> Lets go for a <FaBeer />? </h3>
//      }
//    }

