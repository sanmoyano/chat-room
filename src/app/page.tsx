'use client'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
import Image from 'next/image'

import Desktop from './components/desktop'
import { auth, googleProvider } from './firebase/config'
const cookies = new Cookies()

export default function Home () {
  const signIngWithGoogle = async () => {
    // const result = await signInWithPopup(auth, googleProvider)

    // cookies.set('auth-token', result.user.refreshToken)
    console.log('Sign in with google')
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-[url(https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg)] bg-center bg-cover'>
      <div>
        <p>Sign in with Google Account</p>
        <button onClick={signIngWithGoogle}>Sign in with Google</button>
      </div>
      <Desktop />
    </main>
  )
}
