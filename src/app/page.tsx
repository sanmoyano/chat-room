'use client'
import React, { useState } from 'react'
import Draggable from 'react-draggable'

import Desktop from './components/desktop'

export default function Home () {
  return (
    <main className='flex h-screen fixed w-screen flex-col items-center justify-between bg-[url(https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg)] bg-center bg-cover'>
      {/* <Draggable {...dragHandlers}> */}
      <Desktop />
      {/* </Draggable> */}
    </main>
  )
}
