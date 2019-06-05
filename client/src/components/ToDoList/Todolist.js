import React, { Component } from 'react'
import Todoitem from './Todoitem';
import './MainToDo.css'
import { Checkbox , List , Grid, Container, Header, ListContent, GridColumn , Segment} from 'semantic-ui-react'

export default class Todolist extends Component {
    deleteName = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        this.props.HandleDelete(e.target.id)
    }

    render() {
        const {names}=this.props
        return (

            <Grid stackable columns={2} id="listGrid">
                <Grid.Column>
                     <Header id="listHeader" as="h3" textAlign="center">
                       Happy Hunting
                    </Header>
                
                    <List divided >
                        <List.Item id="listItem" textAlign="center">
                    {
                        names.map(name => {
                            return(
                            <Grid>   
                             <Grid.Column floated='left' width={13}>
                                
                            <Todoitem key={name.id} title={name.title}/>
                            
                         </Grid.Column>
                         <Grid.Column floated='left'>
                         
                            <Checkbox id={name.id} onClick={this.deleteName}/>
                            
                        </Grid.Column>
                          </Grid> 
                        )
                    })
            }
                        </List.Item>
                    </List>
                    
                        
                    
                </Grid.Column>
            </Grid>
        
                    
        );
    }
}