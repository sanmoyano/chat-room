import React, { useEffect, useState } from 'react'
import { addDoc, collection, onSnapshot, query, serverTimestamp, FieldValue } from 'firebase/firestore'
import Image from 'next/image'

import { auth, db } from '@/app/firebase/config'
interface Message {
  id: string
  message: string
  createAt:FieldValue
  user: string
  avatar: string
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
      user: auth.currentUser?.displayName,
      avatar: auth.currentUser?.photoURL
    })

    setNewMessage('')
  }

  useEffect(() => {
    const queryMessages = query(messagesRef)

    onSnapshot(queryMessages, (snapshot) => {
      const messages:Message[] = []

      snapshot.forEach((doc) => {
        const { message, createAt, user, avatar } = doc.data()

        messages.push({ id: doc.id, message, createAt, user, avatar })
      })
      setAllMessages(messages)
    })
  }, []) /*eslint-disable-line*/

  return (
    <div className='min-h-full p-4 flex flex-col justify-center space-y-4'>
      <div className='mt-6 rounded-lg h-[70%] overflow-y-auto bg-[white] bg-opacity-80 border-[1px] border-violet-950'>
        {allMessages.map((message) => (
          <div key={message.id} className='flex flex-row items-center p-2 space-x-2 m-1 hover:bg-[rgba(0,0,0,0.1)]'>
            <Image alt={`${message.user}`} height={24} src={`${message.avatar}`} style={{ objectFit: 'cover', borderRadius: '100%' }} width={24} />
            <div>
              <p className='text-black font-bold text-[13px]'>{message.user}</p>
              <p className='text-black font-normal text-xs'>{message.message}</p>
              {/* <p className='text-gray-500 font-extralight text-[10px]'>{`${message.createAt}`}</p> */}
            </div>
          </div>
        ))}
      </div>
      <div className='w-full h-[30%] bg-white bg-opacity-80 p-2 flex items-center rounded-lg border-[1px] border-violet-950 justify-between'>
        <form className='flex flex-row justify-between w-full h-full items-center space-x-2' onSubmit={handleSubmit}>
          <textarea className='text-black font-normal bg-transparent focus:outline-none resize-none text-xs h-full w-full' placeholder='Escribir mensaje...' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <button className='text-xs text-blue-800 font-bold bg-gray-100 border-violet-950 border-[2px] p-2 h-[50px] w-[100px] rounded-md'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Chat
