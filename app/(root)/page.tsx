"use client"
import AvatarSection from '@/component/AvatarSection'
import Header from '@/component/ui/Header'
import React from 'react'

const page = () => {
  return (
    <main className='dm-sans-400 w-full min-h-screen'>
      <Header />
      <AvatarSection />
    </main>
  )
}

export default page