import React, { useEffect, useState } from 'react'
import { addDoc, collection, onSnapshot, query, serverTimestamp, orderBy, Timestamp } from 'firebase/firestore'
import Image from 'next/image'

import { auth, db } from '@/app/firebase/config'
interface Message {
  id: string
  text: string
  createAt:Timestamp
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
      text: newMessage,
      createAt: serverTimestamp(),
      user: auth.currentUser?.displayName,
      avatar: auth.currentUser?.photoURL
    })

    setNewMessage('')
  }
  const formatDate = (createAt: Timestamp) => {
    if (!createAt) {
      return ''
    }
    const timestamp = createAt?.toDate()
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }

    return timestamp.toLocaleString(undefined, options)
  }

  useEffect(() => {
    const queryMessages = query(messagesRef, orderBy('createAt'))

    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      const messages:Message[] = []

      snapshot.forEach((doc) => {
        const { text, createAt, user, avatar } = doc.data()

        messages.push({ id: doc.id, text, createAt, user, avatar })
      })

      setAllMessages(messages)
    })

    return () => unsuscribe()
  }, []) /*eslint-disable-line*/

  return (
    <div className='min-h-full p-4 flex flex-col justify-center space-y-4'>
      <div>
        <p className='text-black text-[10px] font-normal p-1'>¡Bienvenidos! Este es un proyecto de hobbie donde probamos herramientas como Firestore Database, React, Next.js y Tailwind CSS. Únite, interactúa y diviértete con quien quiera que este del otro lado! Nos cuidemos con los comentarios, muchas gracias!
          PD:Es una aplicación en tiempo real, así que compartila con quien quieras para probarla, o simplemente alguien responderá...
        </p>
      </div>
      <div className='mt-6 rounded-lg h-[70%] overflow-y-auto bg-[white] bg-opacity-80 border-[1px] border-violet-950'>
        {allMessages.map((message) => (
          <div key={message.id} className='flex flex-row items-center p-2 rounded-md space-x-2 m-1 hover:bg-[rgba(0,0,0,0.1)]'>
            <Image alt={`${message.user}`} height={24} src={`${message?.avatar}`} style={{ objectFit: 'cover', borderRadius: '100%' }} width={24} />
            <div>
              <div className='flex flex-row items-baseline space-x-2'>
                <p className='text-black font-bold text-[13px]'>{message.user}</p>
                <p className='text-gray-500 font-extralight text-[9px]'>{`${formatDate(message?.createAt)}`}</p>
              </div>
              <p className='text-black font-normal text-xs'>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full h-[30%] bg-white bg-opacity-80 p-2 flex items-center rounded-lg border-[1px] border-violet-950 justify-between'>
        <form className='flex flex-row justify-between w-full h-full items-center space-x-2' onSubmit={handleSubmit}>
          <textarea className='text-black font-normal bg-transparent focus:outline-none resize-none text-xs h-full w-full' placeholder='Escribir mensaje...' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <div className='space-y-5'>
            <button className='text-xs text-blue-800 font-bold bg-gray-100 border-violet-950 border-[2px] p-2 h-[50px] w-full rounded-md'>Enviar</button>
            <button disabled className='text-xs focus:outline-none disabled:opacity-50 text-blue-800 font-bold bg-gray-100 border-violet-950 border-[2px] p-2 h-[50px] rounded-md w-full'>Zumbido</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat
