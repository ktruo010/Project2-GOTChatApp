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

  handleClear = () => {this.setState({names:[],
    id:"",
    name:"",
    editName:false})
  console.log("Handle clear working@!")
  } 

  handleDelete = (id) =>{
    console.log(`deleting ${id}`)
    let nameArr = this.state.names;
    for (let i = 0; i<nameArr.length; i++){
      if (nameArr[i].id === id){
        nameArr.splice(i,1)
      }
    }
    this.setState({names: nameArr})
  }

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
    
    

            <Todolist names={this.state.names} HandleDelete={this.handleDelete}/>
            <button type="button"
                className="ClearName"
                onClick={this.handleClear}
                >
                clear name
                </button>
            </div>
          </div>
        </div>
      );
    }
  }


    export default MainTodo;



