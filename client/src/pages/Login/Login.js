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
import JoffreyImage from '../media/profile-images/joffrey-baratheon.png'
import JonImage from '../media/profile-images/jon-snow.png'
import LittleImage from '../media/profile-images/little-finger.png'
import MelisandreImage from '../media/profile-images/melisandre.png'
import NedImage from '../media/profile-images/ned-stark.png'
import NightImage from '../media/profile-images/night-king.png'
import OberynImage from '../media/profile-images/oberyn-martell.png'
import RobImage from '../media/profile-images/rob-stark.png'
import RobertImage from '../media/profile-images/robert-baratheon.png'
import SansaImage from '../media/profile-images/sansa-stark.png'
import TormundImage from '../media/profile-images/tormund-giantsbane.png'
import TyrionImage from '../media/profile-images/tyrion-lannister.png'

const faceOptions = [
  {
    key: 'Arya Stark',
    text: 'Arya Stark',
    value: AryaImage,
    image: { avatar: true, src: AryaImage },
  },
  {
    key: 'Benjen Stark',
    text: 'Benjen Stark',
    value: BenjenImage,
    image: { avatar: true, src: BenjenImage },
  },
  {
    key: 'Catelyn Stark',
    text: 'Catelyn Stark',
    value: CatelynImage,
    image: { avatar: true, src: CatelynImage },
  },
  {
    key: 'Cersei Lannister',
    text: 'Cersei Lannister',
    value: CerseiImage,
    image: { avatar: true, src: CerseiImage },
  },
  {
    key: 'Daenerys Targaryen',
    text: 'Daenerys Targaryen',
    value: DanyImage,
    image: { avatar: true, src: DanyImage },
  },
  {
    key: 'Jaime Lannister',
    text: 'Jaime Lannister',
    value: JaimeImage,
    image: { avatar: true, src: JaimeImage },
  },
  {
    key: 'Joffrey Baratheon',
    text: 'Joffrey Baratheon',
    value: JoffreyImage,
    image: { avatar: true, src: JoffreyImage },
  },
  {
    key: 'Jon Snow',
    text: 'Jon Snow',
    value: JonImage,
    image: { avatar: true, src: JonImage },
  },
  {
    key: 'Little Finger',
    text: 'Little Finger',
    value: LittleImage,
    image: { avatar: true, src: LittleImage },
  },
  {
    key: 'Melisandre',
    text: 'Melisandre',
    value: MelisandreImage,
    image: { avatar: true, src: MelisandreImage },
  },
  {
    key: 'Ned Stark',
    text: 'Ned Stark',
    value: NedImage,
    image: { avatar: true, src: NedImage },
  },
  {
    key: 'Night King',
    text: 'Night King',
    value: NightImage,
    image: { avatar: true, src: NightImage },
  },
  {
    key: 'Oberyn Martell',
    text: 'Oberyn Martell',
    value: OberynImage,
    image: { avatar: true, src: OberynImage },
  },
  {
    key: 'Rob Stark',
    text: 'Rob Stark',
    value: RobImage,
    image: { avatar: true, src: RobImage },
  },
  {
    key: 'Robert Baratheon',
    text: 'Robert Baratheon',
    value: RobertImage,
    image: { avatar: true, src: RobertImage },
  },
  {
    key: 'Sansa Stark',
    text: 'Sansa Stark',
    value: SansaImage,
    image: { avatar: true, src: SansaImage },
  },
  {
    key: 'Tormund Giantsbane',
    text: 'Tormund Giantsbane',
    value: TormundImage,
    image: { avatar: true, src: TormundImage },
  },
  {
    key: 'Tyrion Lannister',
    text: 'Tyrion Lannister',
    value: TyrionImage,
    image: { avatar: true, src: TyrionImage },
  },
]

class Login extends Component {
  state={
    user:'',
    image: '',
    isAuth:'false'

  };
  handleChange=(event, { value })=>{
    this.setState({[event.target.name]:event.target.value})
    this.setState({image:value})
  };

  handleFormSubmit=(e)=>{
    const user=this.state.user;
    const image=this.state.image;

    if(user===''){
      localStorage.setItem('user','No one');
    }

    else{
      localStorage.setItem('image',image);
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
                    data-value={faceOptions.image}
                    value={faceOptions.image}
                    options={faceOptions}
                    onChange={this.handleChange}
                    />
                <Button className="loginButton" basic inverted  fluid type="submit" onClick={this.routeChange}>
                  Login
                </Button>
                </Form>
          </Segment>
      </div>

    )
  }
}

export default withRouter(Login)
