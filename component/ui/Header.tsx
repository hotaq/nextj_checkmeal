"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/image/mealcheck-high-resolution-logo-transparent (1).png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 w-full px-4 py-3 z-60 dm-sans-400 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm'>
      <div className='max-w-6xl mx-auto'>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <a href="/" className='flex items-center'>
            <Image 
              src={logo} 
              alt="logo" 
              width={36} 
              height={36} 
              className="mr-2"
            />
            <span className='hidden sm:block text-white font-medium'>MealCheck</span>
          </a>
          
          {/* Desktop navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            <a href="/" className='nav-item'>Home</a>
            <a href="#" className='nav-item'>About</a>
            <a href="#" className='nav-item'>Gallery</a>
            <a href="/Upload" className='nav-item'>Upload</a>
            <a href="#" className='nav-item-highlight'>Login</a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className='md:hidden p-2 text-white rounded-full hover:bg-white/10 transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>
      </div>
      
      {/* Mobile navigation dropdown */}
      {isMenuOpen && (
        <div className='absolute top-16 left-0 right-0 mx-4 p-4 rounded-xl bg-black/90 backdrop-blur-md border border-white/10 shadow-lg md:hidden z-50 animate-fadeIn'>
          <div className='flex flex-col space-y-2'>
            <a href="/" className='mobile-nav-item'>Home</a>
            <a href="#" className='mobile-nav-item'>Dashbord</a>
            <a href="#" className='mobile-nav-item'>Gallery</a>
            <a href="/Upload" className='mobile-nav-item'>Upload</a>
            <div className='h-px w-full bg-white/10 my-1'></div>
            <a href="#" className='mobile-nav-item-highlight'>Login</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header