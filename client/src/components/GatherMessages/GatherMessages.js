import React from 'react'
import { Comment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Image } from 'semantic-ui-react'
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom';

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
            <Image src ='' avatar circular/>
             {username}:
              
            </Comment.Author>
          
           <div className="messages"> {message}</div>
           
 
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


