import React from 'react'
import { Comment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import { Image } from 'semantic-ui-react'
import './Messages.css'
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

              <Comment key={id}>

                <Comment.Content >
                  <Comment.Avatar src={image} />
                  <Comment.Author className='user'>
                    {username}:
                  </Comment.Author>
                  <Linkify componentDecorator={componentDecorator}>
                    <Comment.Text className='messages'> {message} </Comment.Text>
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
