'use client'
import React, { useEffect } from 'react'

import Desktop from './components/containers/desktop'

export default function Home () {
  useEffect(() => {
    document.documentElement.requestFullscreen()

    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }
    }
  }, [])

  return (
    <main className='flex h-screen fixed w-screen flex-col items-center justify-between bg-[url(https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg)] bg-center bg-cover'>
      <Desktop />
    </main>
  )
}
