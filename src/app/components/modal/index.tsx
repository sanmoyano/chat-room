import React, { useState } from 'react'
import Image from 'next/image'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
import Draggable from 'react-draggable'

import { auth, googleProvider } from './firebase/config'
const cookies = new Cookies()

const Modal = ({ display, handleClose } : {display : boolean, handleClose: () => void}) => {
  const [activeDrags, setActiveDrags] = useState(0)
  const signIngWithGoogle = async () => {
    // const result = await signInWithPopup(auth, googleProvider)

    // cookies.set('auth-token', result.user.refreshToken)
    console.log('Sign in with google')
  }

  const onStartDrag = () => {
    setActiveDrags((prev) => prev + 1)
  }

  const onStopDrag = () => {
    setActiveDrags((prev) => prev - 1)
  }

  const dragHandlers = { onStartDrag, onStopDrag }

  return (
    <div aria-hidden='true' className={`fixed top-0 left-0 right-0 z-50 ${display ? 'flex' : 'hidden'} w-full overflow-x-hidden overflow-y-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
      <Draggable {...dragHandlers}>
        <div className='relative min-w-[300px] z-10 max-w-screen overflow-hidden resize min-h-[500px] max-h-full'>
          <div className='absolute flex min-w-full flex-col items-center min-h-full border-2 border-gray-200 justify-center rounded-lg shadow bg-gradient-to-b from-blue-50 to-blue-200 p-2'>
            <button className='absolute top-3 right-2.5 text-gray-500 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center' type='button' onClick={handleClose}>
              <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path clip-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' fill-rule='evenodd' /></svg>
            </button>
            <div className='flex shadow-md shandow-inner items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-2 border-violet-950 border-[1px] w-[100px] h-[100px] rounded-lg'>
              <Image alt='menssenger' height={100} src='/msn.png' width={100} />
            </div>
            <div className='px-6 py-6 lg:px-8'>
              <form action='#' className='space-y-4'>
                <div>
                  <label className='block mb-2 text-xs font-medium text-violet-950'>E-mail address:</label>
                  <input required className='bg-gray-50 border border-violet-950 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-1' id='email' name='email' />
                </div>
                <div>
                  <label className='block mb-2 text-xs font-medium text-violet-950'>Password:</label>
                  <input required className='bg-gray-50 border border-violet-950 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-1' id='password' name='password' type='password' />
                </div>
                <div className='flex item-center justify-center'>
                  <button className='text-xs text-blue-800 font-bold bg-gray-100 rounded-sm border-violet-950 border-[2px] p-2 w-[80px]' type='submit'>Sign In</button>
                </div>
              </form>
              <div className='flex flex-col items-center space-y-1 justify-center mt-4'>
                <p className='text-xs text-gray-900'>or</p>
                <button className='text-violet-950 text-xs text-center font-bold underline'>Sign in with Google</button>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  )
}

export default Modal
