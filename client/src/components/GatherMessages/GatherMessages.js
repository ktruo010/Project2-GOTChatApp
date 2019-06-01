import React from 'react'
import { Comment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Messages.css'

const GatherMessages = ({ messageArr }) => {      
  return (
    <div className="container">
        <div style={{flexGrow:1}}>
          <Comment.Group>
            {messageArr.map(({ id, message, username }) => (
            
            <Comment key={id}>
            
          

            <Comment.Content >

            <Comment.Author className="user">
              {username}:
            </Comment.Author>
          
           <div className="messages"> {message}</div>
           
 
            </Comment.Content>
            
            </Comment>
            ))}
            
           
          
        </Comment.Group>
      </div>
    </div>
   
                
   );
  }


export default GatherMessages


