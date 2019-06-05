import React, { Component } from 'react'
import { Header, Form , Icon , Button , Segment, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Login.css'
import { withRouter } from 'react-router-dom';
import { GiBloodySword } from 'react-icons/gi';
import { GiDoubleFaceMask } from 'react-icons/gi';

//Import all character icons
import AryaImage from '../media/profile-images/arya-stark.png'
import BenjenImage from '../media/profile-images/benjen-stark.png'
import CatelynImage from '../media/profile-images/catelyn-stark.png'
import CerseiImage from '../media/profile-images/cersei-lannister.png'
import DanyImage from '../media/profile-images/dany.png'
import JaimeImage from '../media/profile-images/jaime-lannister.png'
import JonImage from '../media/profile-images/jon-snow.png'
import MelisandreImage from '../media/profile-images/melisandre.png'
import NedImage from '../media/profile-images/ned-stark.png'
import OberynImage from '../media/profile-images/oberyn-martell.png'
import RobImage from '../media/profile-images/rob-stark.png'
import RobertImage from '../media/profile-images/robert-baratheon.png'
import SansaImage from '../media/profile-images/sansa-stark.png'
import TyrionImage from '../media/profile-images/tyrion-lannister.png'

const faceOptions = [
  {
    key: 'Arya Stark',
    text: 'Arya Stark',
    value: 'Arya Stark',
    image: { avatar: true, src: AryaImage },
  },
  {
    key: 'Benjen Stark',
    text: 'Benjen Stark',
    value: 'Benjen Stark',
    image: { avatar: true, src: BenjenImage },
  },
  {
    key: 'Catelyn Stark',
    text: 'Catelyn Stark',
    value: 'Catelyn Stark',
    image: { avatar: true, src: CatelynImage },
  },
  {
    key: 'Cersei Lannister',
    text: 'Cersei Lannister',
    value: 'Cersei Lannister',
    image: { avatar: true, src: CerseiImage },
  },
  {
    key: 'Daenerys Targaryen',
    text: 'Daenerys Targaryen',
    value: 'Daenerys Targaryen',
    image: { avatar: true, src: DanyImage },
  },
  {
    key: 'Jaime Lannister',
    text: 'Jaime Lannister',
    value: 'Jaime Lannister',
    image: { avatar: true, src: JaimeImage },
  },
  {
    key: 'Jon Snow',
    text: 'Jon Snow',
    value: 'Jon Snow',
    image: { avatar: true, src: JonImage },
  },
  {
    key: 'Melisandre',
    text: 'Melisandre',
    value: 'Melisandre',
    image: { avatar: true, src: MelisandreImage },
  },
  {
    key: 'Ned Stark',
    text: 'Ned Stark',
    value: 'Ned Stark',
    image: { avatar: true, src: NedImage },
  },
  {
    key: 'Oberyn Martell',
    text: 'Oberyn Martell',
    value: 'Oberyn Martell',
    image: { avatar: true, src: OberynImage },
  },
  {
    key: 'Rob Stark',
    text: 'Rob Stark',
    value: 'Rob Stark',
    image: { avatar: true, src: RobImage },
  },
  {
    key: 'Robert Baratheon',
    text: 'Robert Baratheon',
    value: 'Robert Baratheon',
    image: { avatar: true, src: RobertImage },
  },
  {
    key: 'Sansa Stark',
    text: 'Sansa Stark',
    value: 'Sansa Stark',
    image: { avatar: true, src: SansaImage },
  },
  {
    key: 'Tyrion Lannister',
    text: 'Tyrion Lannister',
    value: 'Tyrion Lannister',
    image: { avatar: true, src: TyrionImage },
  },
]

class Login extends Component {
  state={
    user:'',
    image: '',
    isAuth:'false'

  };
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  };
  imageDropDown=(event)=>{
    this.setState({value:event.target.value})
  }
  handleFormSubmit=(e)=>{
    const user=this.state.user;
    if(user===''){
      localStorage.setItem('user','No one');
      
    }
    else{
    localStorage.setItem('user',user);
    
    }
    localStorage.setItem('Authenticate','true');
    this.props.history.push('/home');
    
  }


  render () {
    return (

      <div className="Login">
          <Segment className="formLogin">
            <Header className="Header1" as="h2">
              <Icon name="fort awesome alternate"></Icon>
              Braavos Connect
            </Header>
                <Form onSubmit={this.handleFormSubmit.bind(this)}>
                    <Form.Input 
                    name="user"
                    icon="user secret"
                    iconPosition="right"
                    placeholder="Death Is Certain..." 
                    type="text"
                    value={this.state.user}
                    onChange={this.handleChange}
                    />
                <Dropdown onSubmit={this.handleFormSubmit.bind(this)}
                    placeholder="Select Your Face"
                    fluid
                    selection
                    value={faceOptions.image}
                    options={faceOptions}
                    onChange={this.imageDropDown}
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
