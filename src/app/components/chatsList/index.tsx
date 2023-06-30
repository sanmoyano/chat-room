import React from 'react'
import Image from 'next/image'
import { User } from 'firebase/auth'

import GeneralChat from './generalChat'

const ChatsList = ({ user, handleOpenChat } : {user: User, handleOpenChat: () => void}) => {
  return (
    <>
      <div className='flex flex-col min-h-full min-w-full items-center overflow-hidden'>
        <div className='flex flex-row items-center space-x-4 p-2 bg-gradient-to-b from-blue-50 to-blue-300 w-full'>
          <div className='flex shadow-md shandow-inner items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden border-violet-950 border-[1px] p-2 w-[100px] h-[100px] rounded-lg'>
            <Image alt='menssenger' height={100} src={`${user.photoURL}`} style={{ borderRadius: '4px' }} width={100} />
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center space-x-2'>
              <p className='text-black font-semibold text-ellipsis overflow-hidden whitespace-nowrap'>{user.displayName}</p>
              <p className='text-xs font-normal text-gray-500'>(conectado)</p>
            </div>
            <input className='text-xs font-normal focus:outline-none w-full bg-transparent text-black' placeholder='<Escribe un mensaje personal>' />
          </div>
        </div>
        <div className='w-full flex flex-col space-y-2'>
          <p className='text-black font-bold pl-2 pt-2 text-sm'>{`Conectados (${1})`}</p>
          {/* {chat
            ? (
              <>
                <GeneralChat openChat={handleOpenChat} />
                <div className='flex flex-col w-[200px]'>
                  <label>Create Chat</label>
                  <input ref={chatInputRef} />
                  <button onClick={() => setChat(chatInputRef?.current?.value)}>Enter chat</button>
                </div>
              </>
              )
            : (
              <>
                <GeneralChat openChat={handleOpenChat} />
                <p className='text-black font-bold pl-2 pt-2 text-sm'>Create Chat</p>
                <div className='flex flex-col w-[200px]'>
                  <label>Create Chat</label>
                  <input ref={chatInputRef} />
                  <button onClick={() => setChat(chatInputRef?.current?.value)}>Enter chat</button>
                </div>
              </>
              )} */}
          <GeneralChat openChat={handleOpenChat} />
        </div>
      </div>
    </>
  )
}

export default ChatsList
