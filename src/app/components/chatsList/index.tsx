import React from 'react'
import Image from 'next/image'

const ChatsList = ({ user }: {user: any}) => {
  return (
    <div className='flex bg-green-500 flex-col min-h-full min-w-full items-center'>
      <div className='flex shadow-md shandow-inner items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden border-violet-950 border-[1px] p-2 w-[100px] h-[100px] rounded-lg'>
        <Image alt='menssenger' height={100} src={`${user.photoURL}`} width={100} />
      </div>
      ChatList
    </div>
  )
}

export default ChatsList
