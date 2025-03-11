import Image from 'next/image'
import React from 'react'
import logo from '@/public/image/mealcheck-high-resolution-logo-transparent (1).png'
const Header = () => {
  return (
    <div className='flex justify-center w-full px-2 sm:px-3 items-center relative top-3 z-10 dm-sans-400'>
      <nav className='flex flex-wrap justify-center sm:flex-nowrap sm:justify-between gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm max-w-full overflow-x-auto'>
        <a href="#" className='px-3 sm:px-4 py-1.5 rounded-full flex-shrink-0'>
          <Image src={logo} alt="logo" width={30} height={30} />
        </a>
        
        <div className='flex flex-wrap justify-center sm:flex-nowrap gap-1'>
          <a href="#" className='nav-item'>Home</a>
          <a href="#" className='nav-item'>About</a>
          <a href="#" className='nav-item'>Gallery</a>
          <a href="#" className='nav-item'>Upload</a>
          <a href="#" className='nav-item bg-white text-gray-900'>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Header