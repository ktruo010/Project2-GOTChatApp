import React, { Component } from 'react'
import { Header, Form , Icon , Button , Segment, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Login.css'
import { withRouter } from 'react-router-dom';

const faceOptions = [
  {
    key: 'Arya Stark',
    text: 'Arya Stark',
    value: 'Arya Stark',
    image: { avatar: true, src: '../media/profile-images/arya-stark.jpg' },
  },
  {
    key: 'Benjen Stark',
    text: 'Benjen Stark',
    value: 'Benjen Stark',
    image: { avatar: true, src: '../media/profile-images/benjen-stark.png' },
  },
  {
    key: 'Catelyn Stark',
    text: 'Catelyn Stark',
    value: 'Catelyn Stark',
    image: { avatar: true, src: '../media/profile-images/catelyn-stark.png' },
  },
  {
    key: 'Cersei Lannister',
    text: 'Cersei Lannister',
    value: 'Cersei Lannister',
    image: { avatar: true, src: '../media/profile-images/cersei-lannister.png' },
  },
  {
    key: 'Daenerys Targaryen',
    text: 'Daenerys Targaryen',
    value: 'Daenerys Targaryen',
    image: { avatar: true, src: '../media/profile-images/dany.png' },
  },
  {
    key: 'Jaime Lannister',
    text: 'Jaime Lannister',
    value: 'Jaime Lannister',
    image: { avatar: true, src: '../media/profile-images/jaime-lannister.png' },
  },
  {
    key: 'Jon Snow',
    text: 'Jon Snow',
    value: 'Jon Snow',
    image: { avatar: true, src: '../media/profile-images/jon-snow.png' },
  },
  {
    key: 'Melisandre',
    text: 'Melisandre',
    value: 'Melisandre',
    image: { avatar: true, src: '../media/profile-images/melisandre.png' },
  },
  {
    key: 'Ned Stark',
    text: 'Ned Stark',
    value: 'Ned Stark',
    image: { avatar: true, src: '../media/profile-images/ned-stark.png' },
  },
  {
    key: 'Oberyn Martell',
    text: 'Oberyn Martell',
    value: 'Oberyn Martell',
    image: { avatar: true, src: '../media/profile-images/oberyn-martell.png' },
  },
  {
    key: 'Robert Baratheon',
    text: 'Robert Baratheon',
    value: 'Robert Baratheon',
    image: { avatar: true, src: '../media/profile-images/robert-baratheon.png' },
  },
  {
    key: 'Sansa Stark',
    text: 'Sansa Stark',
    value: 'Sansa Stark',
    image: { avatar: true, src: '../media/profile-images/sansa-stark.png' },
  },
  {
    key: 'Tyrion Lannister',
    text: 'Tyrion Lannister',
    value: 'Tyrion Lannister',
    image: { avatar: true, src: '../media/profile-images/tyrion-lannister.png' },
  },
]

class Login extends Component {
  state={
    user:'',
    image: '',
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
                <Dropdown onSubmit={this.handleFormSubmit.bind(this)}
                    placeholder="Select your face"
                    fluid
                    selection
                    value={this.state.image}
                    options={faceOptions}
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
