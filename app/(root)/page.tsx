"use client"
import AvatarSection from '@/component/AvatarSection'
import Header from '@/component/ui/Header'
import React from 'react'

const page = () => {
  return (
    <main className='dm-sans-400 w-full overflow-x-hidden relative'>
      
      <AvatarSection />
      
      {/* Creator attribution - simplified responsive design */}
      <div className="fixed bottom-4 left-4 flex items-center gap-2 z-60 bg-black/50 backdrop-blur-sm p-2 rounded-lg border border-gray-800 shadow-lg">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
          C
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-gray-300">
            Created by
          </span>
          <span className="text-xs font-bold text-white">
            Chinnaphat khuncharoen
          </span>
          <span className="text-[10px] italic text-gray-400">
            Chulalongkorn University
          </span>
        </div>
      </div>
    </main>
  )
}

export default page