import React, { Component } from 'react';
import Todo from './Todo'
import Todolist from './Todolist';
import './MainToDo.css'
import { Segment , Grid , Divider , Icon} from 'semantic-ui-react'


import uuid from "uuid";
class MainTodo extends Component {
  state={
    names:[],
    id:uuid(),
    name:"",
    editName:false
  };
  handleChange = e => {
    this.setState({
      name:e.target.value
    });
  };
  handleSubmit = (e)=> {
    e.preventDefault();

  const newName ={
    id:this.state.id,
    title:this.state.name
  };
console.log(newName);
  const updatedName =[...this.state.names,newName];
  this.setState({
    names:updatedName,
    name:'',
    id:uuid(),
    editName:false
  })


  };
  render(){
   // const SidePanel = () => {
  
      return (

  


        <Segment id="segmentBody">
          <Grid columns={2}  >
            <Grid.Column floated='left' width={8}>
            <h3 id="addFaceHeader"> Faces To Collect </h3>
            <Todo name={this.state.name} handleChange=
            {this.handleChange} handleSubmit = {this.handleSubmit}/>
            </Grid.Column>
            <Grid.Column floated='right' width={8}>
            <Todolist names={this.state.names}/>
            </Grid.Column>
          </Grid>

          <Divider vertical ><Icon circular inverted name='angle double right' />
          </Divider>
        </Segment>
        
      );
    }
    }
    
    
    export default MainTodo;



