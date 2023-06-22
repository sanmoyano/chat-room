import Image from 'next/image'
import React from 'react'

const Modal = ({ display, handleClose } : {display : boolean, handleClose: () => void}) => {
  return (

    <div className={`relative w-full max-w-md max-h-full ${display ? 'flex' : 'hidden'}`}>
      <div className='relative flex flex-col items-center border-2 border-gray-200 justify-center rounded-lg shadow bg-gradient-to-b from-blue-50 to-blue-200 p-2'>
        <button className='absolute top-3 right-2.5 text-gray-500 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center' type='button' onClick={handleClose}>
          <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path clip-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' fill-rule='evenodd' /></svg>
        </button>
        <div className='flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100  p-2 border-blueWindows border-2 w-[100px] h-[100px] rounded-lg'>
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
            <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'>Login to your account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
