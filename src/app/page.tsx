'use client'
import React, { useState, useEffect } from 'react'

import Desktop from './components/containers/desktop'

export default function Home () {
  const [fullScreen, setFullScreen] = useState(false)

  useEffect(() => {
    document.documentElement.requestFullscreen()

    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }
    }
  }, [fullScreen])

  const goFullScreen = () => {
    setFullScreen(true)
  }

  return (
    <main className='flex h-screen fixed w-screen flex-col items-center justify-between bg-[url(https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg)] bg-center bg-cover'>
      <Desktop goFullScreen={goFullScreen} />
    </main>
  )
}
