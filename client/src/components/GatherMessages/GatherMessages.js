import React from 'react'

const GatherMessages = ({ messageArr }) =>
  <ul>
    {
      messageArr.map(({ id, message, username }) => (
        <p key={id}>{username}: {message}</p>
      ))
    }
  </ul>

export default GatherMessages
