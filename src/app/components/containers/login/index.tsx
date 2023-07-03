import Image from 'next/image'
import React from 'react'
import { signInWithPopup, User } from 'firebase/auth'
import Cookies from 'universal-cookie'

import { auth, googleProvider } from '../../../firebase/config'
const cookies = new Cookies()

const Login = ({ setIsAuth, setUser }:{setIsAuth: (value: boolean) => void, setUser: (value: User) => void}) => {
  const signIngWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)

      setUser(result.user)

      setIsAuth(true)

      cookies.set('auth-token', result.user.refreshToken)
      cookies.set('user', result.user)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex flex-col min-h-full min-w-full items-center mt-10'>
      <div className='flex shadow-md shandow-inner items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-2 border-violet-950 border-[1px] w-[100px] h-[100px] rounded-lg'>
        <Image alt='menssenger' height={100} src='/msn.png' width={100} />
      </div>
      <div className='px-6 py-6 lg:px-8'>
        <form action='#' className='space-y-4'>
          <div>
            <label className='block mb-2 text-xs font-medium text-violet-950'>E-mail address:</label>
            <input disabled required className='bg-gray-50 border disabled:opacity-50 border-violet-950 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-1' id='email' name='email' />
          </div>
          <div>
            <label className='block mb-2 text-xs font-medium text-violet-950'>Password:</label>
            <input disabled required className='bg-gray-50 disabled:opacity-50 border border-violet-950 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-1' id='password' name='password' type='password' />
          </div>
          <div className='flex item-center justify-center'>
            <button disabled className='text-xs disabled:opacity-60 text-blue-800 font-bold bg-gray-100 rounded-sm border-violet-950 border-[2px] p-2 w-[80px]' type='submit'>Sign In</button>
          </div>
        </form>
        <div className='flex flex-col items-center space-y-1 justify-center mt-4'>
          <p className='text-xs text-gray-900'>or</p>
          <button className='text-violet-950 text-xs text-center font-bold underline' onClick={signIngWithGoogle}>Sign in with Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login
