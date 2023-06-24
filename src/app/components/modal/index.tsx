import React, { useState } from 'react'
import Draggable from 'react-draggable'
import Cookies from 'universal-cookie'

import ChatsList from '../chatsList'
import Login from '../login'
const cookies = new Cookies()

const Modal = ({ display, handleClose } : {display : boolean, handleClose: () => void}) => {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [activeDrags, setActiveDrags] = useState(0) /*eslint-disable-line*/

  const onStartDrag = () => {
    setActiveDrags((prev) => prev + 1)
  }
  const onStopDrag = () => {
    setActiveDrags((prev) => prev - 1)
  }

  const dragHandlers = { onStartDrag, onStopDrag }

  return (
    <div aria-hidden='true' className={`fixed top-0 left-0 right-0 z-50 ${display ? 'flex' : 'hidden'} w-full overflow-x-hidden overflow-y-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
      <Draggable {...dragHandlers} handle='strong'>
        <div className='relative min-w-[300px] max-w-screen overflow-hidden resize min-h-[500px] max-h-full'>
          <div className='absolute flex min-w-full flex-col items-center min-h-full border-2 border-gray-200 justify-around rounded-lg shadow bg-gradient-to-b from-blue-50 to-blue-200'>
            <button className='absolute top-3 right-2.5 text-gray-500 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center' type='button' onClick={handleClose}>
              <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path clip-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' fill-rule='evenodd' /></svg>
            </button>
            <strong className='w-full h-full'>
              {!isAuth
                ? <Login />
                : <ChatsList />}
            </strong>
          </div>
        </div>
      </Draggable>
    </div>
  )
}

export default Modal
