import React from 'react'
import { Comment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import Linkify from 'react-linkify';
const GatherMessages = ({ messageArr }) => {      
  return (
    <div className="container">
      <ScrollToBottom>
        <div style={{flexGrow:1}}>
          <Comment.Group>
            {messageArr.map(({ id, message, username }) => (
            
            <Comment key={id}>
            
          

            <Comment.Content >

            <Comment.Author className="user">
              {username}:
            </Comment.Author>
            <Linkify>
           <div className="messages"> {message}</div>
           </Linkify>
 
            </Comment.Content>
            
            </Comment>
            ))}
            
           
          
        </Comment.Group>
      </div>
    </ScrollToBottom>
    </div>
                
   );
  }


export default GatherMessages


