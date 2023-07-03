'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Cookies from 'universal-cookie'
import { User } from 'firebase/auth'

import Modal from '../modal'
import Login from '../login'
import ChatsList from '../../chatsList'
import Chat from '../chat'
import PersonalChat from '../chat/personalChat'

const crypto = require('crypto')

export interface Chats {
  name: string,
  id: string
}
const cookies = new Cookies()

const Desktop = ({ goFullScreen }:{goFullScreen: () => void}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenChat, setOpenChat] = useState(false)
  const [openPersonal, setOpenPersonal] = useState(true)
  const [user, setUser] = useState<User>(cookies.get('user'))
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [chat, setChat] = useState<Chats>({ name: '', id: '' })
  const [chatList, setChatLits] = useState<Chats[]>([])
  const [selectedChat, setSelectedChat] = useState<Chats>({ name: '', id: '' })
  const [date, setDate] = useState(new Date())

  const createChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = crypto.randomBytes(16).toString('hex')
    const newChat: Chats = { name: chat.name, id }

    setChatLits([
      ...chatList,
      newChat
    ])
    setChat({ name: '', id: '' })
  }

  const dateString = date.toLocaleDateString('es-AR')
  const timeString = date.toLocaleTimeString('es-AR', {
    hour: 'numeric',
    minute: 'numeric'
  })

  const handleOpenModal = () => {
    setIsOpen(!isOpen)
    // goFullScreen()
  }

  const handleOpenChat = () => {
    setOpenChat(!isOpenChat)
  }

  const handleSelectedChat = (chat: Chats) => {
    setSelectedChat(chat)
    setOpenPersonal(true)
  }

  const closeModal = () => {
    setOpenPersonal(false)
  }

  useEffect(() => {
    setInterval(() => setDate(new Date()), 60000)
  }, [])

  return (
    <>
      <div className='absolute top-0 left-0'>
        <button className='w-24 h-24 hover:bg-blue-50 hover:bg-opacity-25' type='button' onClick={handleOpenModal}>
          <div className='flex flex-col justify-between items-center space-y-2'>
            <Image alt='windows' height={40} src='/msn.png' width={40} />
            <p className='text-xs text-center'>Windows Messenger</p>
          </div>
        </button>
        <Modal close={handleOpenModal} display={isOpen}>
          {!isAuth
            ? <Login setIsAuth={setIsAuth} setUser={setUser} />
            : <ChatsList chat={chat} chatList={chatList} createChat={createChat} handleOpenChat={handleOpenChat} openChat={handleSelectedChat} setChat={setChat} user={user} />}
        </Modal>
        <Modal close={handleOpenChat} display={isOpenChat} style='top-[25%] left-[25%]'>
          <Chat />
        </Modal>
        <Modal close={closeModal} display={openPersonal}>
          <PersonalChat chat={selectedChat} />
        </Modal>
      </div>
      <div className='bg-blueWindows absolute bottom-0 h-10 w-full flex items-center justify-between overflow-hidden border-t-[3px] border-[rgba(255,255,255,0.25)] shadow-inner'>
        <div className='bg-greenWindows h-12 flex flex-row items-center w-[100px] justify-center rounded-r-[20px] shadow-inner drop-shadow-[2px_0_0_rgba(0,0,0,0.5)] border-r-2 border-r-[rgba(0,0,0,.25)]'>
          <Image alt='windows' height={30} src='/xp.png' width={30} />
          <p className='text-center font-bold text-xl drop-shadow-[2px_1px_0_rgba(0,0,0,1)] italic'>start</p>
        </div>
        <div className='bg-blueWindows h-full flex row-span-1 items-center w-[120px] justify-between px-2 drop-shadow-[1px_1px_3px_rgba(0,0,0,1)] border-l-2  border-l-[rgba(255,255,255,.1)] shadow-inner'>
          <Image alt='windows' height={24} src='/msn.png' width={24} />
          <p className='text-[10px] absolute top-5 left-6'>{!isAuth ? '⛔' : '🟢'}</p>
          <div>
            <p className='text-xs text-center'>{timeString}</p>
            <p className='text-xs text-center'>{dateString}</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Desktop
