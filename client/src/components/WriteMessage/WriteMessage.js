import React from 'react'
import './SendMessage.css'
import { Button , Input , Form , Label , Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const WriteMessage = ({ handleFormSubmit, handleInputChange, username, message }) =>
  <Form style={{display:"flex"}} id="sendMsg">
    <label htmlFor='title' id='username' value={username} />
<<<<<<< HEAD
    <label htmlFor='title'>New Message:</label>
    <input type='text' id='WriteMessage' value={message} onChange={handleInputChange} />
    <button id='send' onClick={handleFormSubmit}>Send</button>
  </form>
=======
    <Label  color='black' htmlFor='title' id='send'>
    <Label.Detail as="h3" id="msg"> Message:
    </Label.Detail>
    </Label>
    <Input style={{flexGrow:1}} type='text' id='WriteMessage' value={message} onChange={handleInputChange} />
    <Button color='black'  onClick={handleFormSubmit}>Send</Button>
  </Form>




>>>>>>> e2a518a24c67b1e6d3b679b6789dd74d46b42c28

export default WriteMessage
