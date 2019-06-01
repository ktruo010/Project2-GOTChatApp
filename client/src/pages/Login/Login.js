import React, { Component } from 'react'
import { Header, Form , Icon , Button , Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Login.css'

class Login extends Component {
  render () {
    return (

      <div className="Login">
          <Segment className="formLogin">
            <Header className="Header" as="h2">
              <Icon name="fort awesome alternate"></Icon>
              Braavos Connect
            </Header>
                <Form>
                    <Form.Input 
                    icon="user secret"
                    iconPosition="right"
                    placeholder="Death is certain...›"
                    type="text"
                    />
                    <Button  basic inverted  fluid type="text" id='username'>
                      Login
                    </Button>
                </Form>
          </Segment>
      </div>

    )
  }
}

export default Login
