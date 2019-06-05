import React from 'react'
import { Comment , Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import { Image } from 'semantic-ui-react'
import './Messages.css'
import { GiBodySwapping } from 'react-icons/gi';
import ScrollToBottom from 'react-scroll-to-bottom'
import Linkify from 'react-linkify'

const componentDecorator = (href, text, key) => (
  <a href={href} key={key} target='_blank'>
    {text}
  </a>
)
const GatherMessages = ({ messageArr }) => {
  return (
    <div className='container'>
      <ScrollToBottom>
        <div style={{ flexGrow: 1 }}>
          <Comment.Group>
            {messageArr.map(({ id, message, username, image }) => (

              <Comment key={id} id="comments">
                <Comment.Avatar src={image} id="avatar"/>
                <Comment.Content >
                  
                  <Comment.Author className='user'as="a">
                 
                   {username}:
                  </Comment.Author>
                  <Linkify componentDecorator={componentDecorator}>
                    <Comment.Text  className='messages'> {message} </Comment.Text>
                  </Linkify>

                </Comment.Content>

              </Comment>
            ))}

          </Comment.Group>
        </div>
      </ScrollToBottom>
    </div>

  )
}

export default GatherMessages
