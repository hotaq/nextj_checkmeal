"use client"
import Image from 'next/image'
import React from 'react'
import avatar from '@/public/image/avataaars.png'
import { motion } from 'framer-motion'
import grain from '@/public/image/download.jpeg'
const AvatarSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative '>
        <div className='absolute inset-0 -z-30 opacity-1' style={{
            backgroundImage: `url(${grain.src})`,
        }}></div>
        <motion.div className='square size-[620px]'
        initial={{
            outline: 'rgba(222, 23, 23, 0)'
        }}
        animate={{
            outline: 'rgba(255, 0, 0, 0.7)'
        }}
        transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }}></motion.div>
        
        <div className='square size-[820px]'></div>
        <div className='square size-[1020px]'></div>
        <div className='square size-[1070px] blur-[10px]'></div>
        <div className='square size-[1220px] blur-[30px]'></div>
        <div className='square size-[1420px] blur-[60px]'></div>
        <div className='square size-[1620px] blur-[60px]'></div>
        <div className='square size-[1820px] blur-[60px]'></div>
        

        

        <div className='container py-1'>
            <div className='flex flex-col items-center'>
                <Image src={avatar} alt="avatar" width={200} height={200} />
                <div className='bg-gray-950 border border-gray-800  px-4 py-1.5 inline-flex items-center gap-2 rounded-lg'>
                    <div>
                        <motion.div 
                            className='bg-green-500 size-2.5 rounded-full blur-[1px]'
                            animate={{
                            scale: [1, 1.2, 1, 1.2, 1],
                            opacity: [1, 0.8, 1]
                        }}
                        transition={{
                            
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            duration: 5,
                        
                        }}
                        ></motion.div>
                    </div>
                    <div className='text-sm font-medium'>Upload your image Photo for check your meal</div>
                </div>
            </div>
            <div className='max-w-lg mx-auto'>
                <h1 className='font-serif text-3xl text-center mt-8'>Upload your image Photo for check your meal good boyyyyyyyyyyy</h1>
                <p className='mt-4 text-center text-white/60 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center mt-8 gap-4'>
                <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12'>
                    <span className='font-semibold'>Explore More</span>
                </button>
                <button className='inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
                    <span>👻</span>
                    <span>Lets go</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AvatarSection