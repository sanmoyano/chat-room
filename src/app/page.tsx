'use client'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
import Image from 'next/image'

import { auth, googleProvider } from './firebase/config'
const cookies = new Cookies()

export default function Home () {
  const signIngWithGoogle = async () => {
    // const result = await signInWithPopup(auth, googleProvider)

    // cookies.set('auth-token', result.user.refreshToken)
    console.log('Sign in with google')
  }

  const time = new Date().getTime()
  const date = new Date(time)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`

  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-[url(https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg)] bg-center bg-cover'>
      <div>
        <p>Sign in with Google Account</p>
        <button onClick={signIngWithGoogle}>Sign in with Google</button>
      </div>
      <div className='absolute left-0'>
        <span title='double click!'>
          <button className='w-24 h-24 hover:bg-blue-50 hover:bg-opacity-25'>
            <div className='flex flex-col justify-between items-center'>
              <p>ICONO</p>
              <p className='text-xs text-center'>Windows Messenger</p>
            </div>
          </button>
        </span>
      </div>
      <div className='bg-blueWindows h-10 w-full flex items-center justify-between overflow-hidden'>
        <div className='bg-greenWindows h-12 flex flex-row items-center w-[100px] justify-center rounded-r-[20px] shadow-inner drop-shadow-[2px_0_0_rgba(0,0,0,0.5)] border-[1px] border-[rgba(0,0,0,0.1)]'>
          {/* corregir imagen */}
          <Image alt='windows' height={24} src='/public/icons8-windows-95-48.png' width={24} />
          <p className='text-center font-bold text-xl drop-shadow-[3px_1px_0_rgba(0,0,0,1)] italic'>start</p>
        </div>
        <div className='bg-blueWindows h-full flex row-span-1 items-center w-[100px] justify-center drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] border-[2px] border-[rgba(255,255,255,0.25)]'>
          <p className='text-xs text-center'>{formattedDate}</p>
        </div>
      </div>
    </main>
  )
}
