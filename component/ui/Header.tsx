import Image from 'next/image'
import React from 'react'
import logo from '@/public/image/mealcheck-high-resolution-logo-transparent (1).png'
const Header = () => {
  return (
    <div className='flex justify-center items-center relative top-3'>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm'>
        <a href="#" className='px-4 py-1.5 rounded-full'>
          <Image src={logo}alt="logo"  width={30} height={30} />
        </a>
        
        <a href="#" className='nav-item'>Home</a>
        <a href="#" className='nav-item'>About</a>
        <a href="#" className='nav-item'>Gallery</a>
        <a href="#" className='nav-item bg-white text-gray-900'>Contact</a>
      </nav>
    </div>
  )
}

export default Header