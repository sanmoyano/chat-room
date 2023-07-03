import React from 'react'

import { Chats } from '../../desktop'

const PersonalChat = ({ chat } : {chat: Chats}) => {
  return (
    <div>
      <p className='text-black'>{chat.name}</p>
    </div>
  )
}

export default PersonalChat
