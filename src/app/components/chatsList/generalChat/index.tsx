import React from 'react'
import Image from 'next/image'

const GeneralChat = () => {
  return (
    <button className='hover:bg-[rgba(255,255,255,0.3)]' type='button' onClick={() => console.log('open chat')}>
      <div className='flex flex-col px-2'>
        <div className='flex flex-row items-center space-x-1'>
          <div className='h-6 w-6 object-contain flex-shrink-0'>
            <Image alt='menssenger' height={20} src='/msn_avatar.png' width={20} />
          </div>
          <p className='text-sm text-black font-bold text-ellipsis overflow-hidden whitespace-nowrap'>
            {':P /** T H E * C H A T R O O M **/ :D'}
          </p>
          <p className='text-xs text-gray-500 font-normal text-ellipsis overflow-hidden whitespace-nowrap'>chatroom general, para hablar entre todos los conectados</p>
        </div>
      </div>
    </button>
  )
}

export default GeneralChat
