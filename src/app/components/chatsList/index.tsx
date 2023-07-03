import React from 'react'
import Image from 'next/image'
import { User } from 'firebase/auth'

import { Chats } from '../containers/desktop'

import GeneralChat from './generalChat'

interface ChatsProps {
  user: User
  handleOpenChat: () => void
  chatList: Chats[]
  createChat: (e: React.FormEvent<HTMLFormElement>) => void
  chat: Chats
  setChat: (chat: Chats) => void
  openChat?: (chat: Chats) => void
}

const ChatsList = ({ user, handleOpenChat, chatList, createChat, chat, setChat, openChat } : ChatsProps) => {
  return (
    <>
      <div className='flex flex-col min-h-full min-w-full items-center overflow-hidden'>
        <div className='flex flex-row items-center space-x-4 p-2 bg-gradient-to-b from-blue-50 to-blue-300 w-full'>
          <div className='flex shadow-md shandow-inner items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden border-violet-950 border-[1px] p-2 w-[100px] h-[100px] rounded-lg'>
            <Image priority alt='menssenger' blurDataURL='/msn_avatar.png' height={100} src={`${user.photoURL}`} style={{ borderRadius: '4px' }} width={100} />
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
          <p className='text-black font-bold pl-2 pt-2 text-sm'>{`Chatrooms (${1})`}</p>
          <GeneralChat openChat={handleOpenChat} />
        </div>
        <div className='w-full flex flex-col space-y-2'>
          <p className='text-black font-bold pl-2 pt-2 text-sm'>{`Chats (${chatList.length})`}</p>
          <div className='flex flex-col'>
            {chatList?.map((chat) => (
              <button key={chat.id} className='hover:bg-[rgba(255,255,255,0.3)]' type='button'>
                <div className='flex flex-col px-2'>
                  <div className='flex flex-row items-center space-x-1'>
                    <div className='h-6 w-6 object-contain items-baseline flex-shrink-0'>
                      <Image alt='menssenger' height={20} src='/msn_avatar.png' width={20} />
                    </div>
                    <div className='flex flex-row items-baseline space-x-2'>
                      <p className='text-sm text-black font-bold text-ellipsis overflow-hidden whitespace-nowrap'>
                        {chat.name}
                      </p>
                      <p className='text-xs text-gray-500 font-normal text-ellipsis overflow-hidden whitespace-nowrap'>chat</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
            <div className='flex flex-row items-center bg-greenWindow absolute p-2 bottom-0 space-x-2'>
              <span title='proximamente'>
                <div className='flex flex-col space-y-1'>
                  <label className='text-gray-400 text-xs font-bold'>Create Chat:</label>
                  <form onSubmit={createChat}>
                    <div className='flex flex-row space-x-2'>
                      <input disabled className='text-black text-xs h-6 border-black border-[1px] rounded-md font-normal p-2 w-[150px]' placeholder='enter chat name...' value={chat.name} onChange={(e) => setChat({ ...chat, name: e.target.value })} />
                      <button disabled className='text-xs focus:outline-none disabled:opacity-50 text-blue-800 font-bold bg-gray-100 border-violet-950 border-[2px] w-[100px] rounded-md'>Crear Chat</button>
                    </div>
                  </form>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatsList
