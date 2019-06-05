import React from 'react'
import './SendMessage.css'
import { Button, Input, Form, Label, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { GiScrollUnfurled } from 'react-icons/gi';
import { GiPointySword } from 'react-icons/gi';

const WriteMessage = ({ handleFormSubmit, handleInputChange, username, message }) =>
  <Form style={{ display: 'flex' }} id='sendMsg'>
    <label htmlFor='title' id='username' value={username} />
    <Input style={{flexGrow:1}} type='text' id='WriteMessage' placeholder="Valar Morghulis"value={message} onChange={handleInputChange} />
    <Button color='black'  onClick={handleFormSubmit}><GiPointySword/>Send<GiPointySword/></Button>
  </Form>

export default WriteMessage
