import React, { Component } from 'react'
import Todoitem from './Todoitem';
import './MainToDo.css'
import { Button , List , Grid, Icon, Header } from 'semantic-ui-react'

export default class Todolist extends Component {
    render() {
        const {names}=this.props
        return (

            <Grid stackable columns={2}>
                <Grid.Column>
                     <Header id="listHeader" as="h3">
                       Happy Hunting
                    </Header>
                </Grid.Column>
                 <Grid.Column>
                    <List>
                        <List.Item id="listItem">
                    {
                        names.map(name => {
                            return(
                            <Todoitem key={name.id} title={name.title}/>
                        )
                    })
            }
                        </List.Item>
                    </List>
                        <Button color="black" basic inverted id="clearBtn" size="medium">Collected</Button>
                    
                </Grid.Column>
            </Grid>
        
                    
        );
    }
}