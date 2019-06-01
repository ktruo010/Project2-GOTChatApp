import React, { Component } from 'react'
import { Header, Form , Icon , Button , Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Login.css'
import { withRouter } from 'react-router-dom';


class Login extends Component {
  state={
    user:''
  };
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  };
  handleFormSubmit=(e)=>{
    const user=this.state.user;
    if(user===''){
      localStorage.setItem('user','No one');
    }
    else{
    localStorage.setItem('user',user);
    }
    this.props.history.push('/home');
    
  }


  render () {
    return (

      <div className="Login">
          <Segment className="formLogin">
            <Header className="Header" as="h2">
              <Icon name="fort awesome alternate"></Icon>
              Braavos Connect
            </Header>
                <Form onSubmit={this.handleFormSubmit.bind(this)}>
                    <Form.Input 
                    name="user"
                    icon="user secret"
                    iconPosition="right"
                    placeholder="Death is certain...›"
                    type="text"
                    value={this.state.user}
                    onChange={this.handleChange}
                    />
                    <Button  basic inverted  fluid type="submit" onClick={this.routeChange}>
                      Login
                    </Button>
                </Form>
          </Segment>
      </div>

    )
  }
}

export default withRouter(Login)
