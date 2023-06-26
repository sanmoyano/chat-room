import React, { useState } from 'react'
import { addDoc } from 'firebase/firestore'

const Chat = () => {
  const [newMessage, setNewMessage] = useState('')
  const handleSubmit = async (e) => {
    // e.preventDefault()
    // if (newMessage === '') return
    // await addDoc
    console.log('hola')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Escribir mensaje...' onChange={(e) => setNewMessage(e.target.value)} />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Chat
