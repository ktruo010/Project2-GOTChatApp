import React, { Component } from 'react';
import Todo from './Todo'
import Todolist from './Todolist';
import './MainToDo.css'


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
        <div className="toDoContainer">
          
            
            <h3> Faces To Collect </h3>
            <Todo name={this.state.name} handleChange=
            {this.handleChange} handleSubmit = {this.handleSubmit}/>
            <Todolist names={this.state.names}/>
            
          
        </div>
      );
    }
    }
  
    
    export default MainTodo;



