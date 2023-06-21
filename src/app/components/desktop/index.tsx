import React from 'react'
import Image from 'next/image'

const Desktop = () => {
  const time = new Date().getTime()
  const date = new Date(time)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  const formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`

  return (
    <>
      <div className='absolute left-0'>
        <span title='double click!'>
          <button className='w-24 h-24 hover:bg-blue-50 hover:bg-opacity-25'>
            <div className='flex flex-col justify-between items-center space-y-2'>
              <Image alt='windows' height={40} src='https://static.wikia.nocookie.net/logopedia/images/a/a5/MSN_Messenger_2000_%28Icon%29.png/revision/latest?cb=20230101195823' width={40} />
              <p className='text-xs text-center'>Windows Messenger</p>
            </div>
          </button>
        </span>
      </div>
      <div className='bg-blueWindows h-10 w-full flex items-center justify-between overflow-hidden'>
        <div className='bg-greenWindows h-12 flex flex-row items-center w-[100px] justify-center rounded-r-[20px] shadow-inner drop-shadow-[2px_0_0_rgba(0,0,0,0.5)] border-[1px] border-[rgba(0,0,0,0.1)]'>
          {/* corregir imagen */}
          <Image alt='windows' height={35} src='' width={35} />
          <p className='text-center font-bold text-xl drop-shadow-[3px_1px_0_rgba(0,0,0,1)] italic'>start</p>
        </div>
        <div className='bg-blueWindows h-full flex row-span-1 items-center w-[120px] justify-center drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] border-[2px] border-[rgba(255,255,255,0.25)]'>
          <Image alt='windows' height={24} src='https://static.wikia.nocookie.net/logopedia/images/a/a5/MSN_Messenger_2000_%28Icon%29.png/revision/latest?cb=20230101195823' width={24} />
          <p className='text-xs text-center'>{formattedDate}</p>
        </div>
      </div>
    </>

  )
}

export default Desktop
