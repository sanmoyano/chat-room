import React, { useEffect, useState } from 'react'
import { addDoc, collection, onSnapshot, query, serverTimestamp, FieldValue } from 'firebase/firestore'

import { auth, db } from '@/app/firebase/config'
interface Message {
  id: string;
  message: string;
  createAt:FieldValue
  user: string;
}

const Chat = () => {
  const [newMessage, setNewMessage] = useState('')
  const [allMessages, setAllMessages] = useState<Message[]>([])
  const messagesRef = collection(db, 'chatRoom')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (newMessage === '') return
    await addDoc(messagesRef, {
      message: newMessage,
      createAt: serverTimestamp(),
      user: auth.currentUser?.displayName
    })

    setNewMessage('')
  }

  useEffect(() => {
    const queryMessages = query(messagesRef)

    onSnapshot(queryMessages, (snapshot) => {
      const messages:Message[] = []

      snapshot.forEach((doc) => {
        const { message, createAt, user } = doc.data()

        messages.push({ id: doc.id, message, createAt, user })
      })
      setAllMessages(messages)
    })
  }, []) /*eslint-disable-line*/

  return (
    <div>
      <div>
        {allMessages.map((message) => (
          <p key={message.message} className='text-black text-xs'>{message.message}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input className='text-black font-normal text-xs' placeholder='Escribir mensaje...' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button className='bg-[red]'>Enviar</button>
      </form>
    </div>
  )
}

export default Chat
