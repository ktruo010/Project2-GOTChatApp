import React from 'react'

const WriteMessage = ({ handleFormSubmit, handleInputChange, username, message }) =>
  <form>
    <label htmlFor='title' id='username' value={username} />
    <label htmlFor='title'>New Messgae:</label>
    <input type='text' id='WriteMessage' value={message} onChange={handleInputChange} />
    <button id='send' onClick={handleFormSubmit}>Send</button>
  </form>

export default WriteMessage
