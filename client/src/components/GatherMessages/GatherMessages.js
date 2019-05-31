import React from 'react'

const GatherMessages = ({ messageArr }) =>
  <ul>
    {
      messageArr.map(({ id, message }) => (
        <p key={id}>{message}</p>
      ))
    }
  </ul>

export default GatherMessages
