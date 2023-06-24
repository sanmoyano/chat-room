'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import Modal from '../modal'

const Desktop = () => {
  const [date, setDate] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)

  const formattedDate = date.toLocaleDateString('en-AR', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000)
  }, [])

  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='absolute top-0 left-0'>
        <span title='double click!'>
          <button className='w-24 h-24 hover:bg-blue-50 hover:bg-opacity-25' type='button' onClick={handleOpenModal}>
            <div className='flex flex-col justify-between items-center space-y-2'>
              <Image alt='windows' height={40} src='/msn.png' width={40} />
              <p className='text-xs text-center'>Windows Messenger</p>
            </div>
          </button>
        </span>
        <Modal display={isOpen} handleClose={handleOpenModal} />
      </div>
      <div className='bg-blueWindows absolute bottom-0 h-10 w-full flex items-center justify-between overflow-hidden border-t-[3px] border-[rgba(255,255,255,0.25)] shadow-inner'>
        <div className='bg-greenWindows h-12 flex flex-row items-center w-[100px] justify-center rounded-r-[20px] shadow-inner drop-shadow-[2px_0_0_rgba(0,0,0,0.5)] border-r-2 border-r-[rgba(0,0,0,.25)]'>
          <Image alt='windows' height={30} src='/xp.png' width={30} />
          <p className='text-center font-bold text-xl drop-shadow-[2px_1px_0_rgba(0,0,0,1)] italic'>start</p>
        </div>
        <div className='bg-blueWindows h-full flex row-span-1 items-center w-[120px] justify-center drop-shadow-[1px_1px_3px_rgba(0,0,0,1)] border-l-2  border-l-[rgba(255,255,255,.1)] shadow-inner'>
          <Image alt='windows' height={24} src='/msn.png' width={24} />
          {/* <p className='text-xs text-center'>{formattedDate}</p> */}
        </div>
      </div>
    </>

  )
}

export default Desktop
