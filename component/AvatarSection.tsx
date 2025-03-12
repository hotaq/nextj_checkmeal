"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import avatar from '@/public/image/avataaars.png'
import { motion, AnimatePresence } from 'framer-motion'
import grain from '@/public/image/download.jpeg'
import Food1 from '@/public/donut-2-svgrepo-com.svg'
import ObjectRunFood from './ObjectRunFood'
import Food2 from '@/public/lean-sushi-svgrepo-com.svg'
import Food3 from '@/public/tomato-4-svgrepo-com.svg'
import Food4 from '@/public/udon-3-svgrepo-com.svg'
import Food5 from '@/public/can-juice-2-svgrepo-com.svg'
import Food6 from '@/public/candy-2-svgrepo-com.svg'
import avatar1 from '@/public/image/avataaars.png'
import avatar2 from '@/public/image/avataaars2.png'
import avatar3 from '@/public/image/avataaars3.png'
import avatar4 from '@/public/image/avataaars4.png'
const AvatarSection = () => {
    
    const avatarImages = [
        avatar1,
        avatar2,
        avatar3,
        avatar4
      ];
    const [currentAvatar, setCurrentAvatar] = React.useState(0);

      // 3. Move useEffect to the main component
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentAvatar((prev) => (prev + 1) % avatarImages.length);
        }, 10000);
        return () => clearInterval(interval);
      }, []);

  return (
    <div className='py-16 sm:py-24 md:py-32 lg:py-40 relative dm-sans-400 overflow-hidden w-full'>
        {/* Black background at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-black"></div>
        
        <div className='absolute inset-0 w-full h-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='absolute w-full h-full  left-0'>
              
                <div className='square absolute size-[50vmin] sm:size-[620px]' ></div>
                <div className='square absolute size-[50vmin] sm:size-[620px]' ></div>
                <div className='square absolute size-[50vmin] sm:size-[620px]' ></div>
                <div className='square absolute size-[50vmin] sm:size-[620px]' ></div>
                <div className='square absolute size-[60vmin] sm:size-[820px]' ></div>
                <div className='square absolute size-[60vmin] sm:size-[820px]' ></div>
                <div className='square absolute size-[60vmin] sm:size-[820px]' ></div>
                <div className='square absolute size-[70vmin] sm:size-[1020px]' ></div>
                <div className='square absolute size-[70vmin] sm:size-[1020px]' ></div>
                <div className='square absolute size-[80vmin] sm:size-[1220px]' ></div>
                <div className='square absolute size-[90vmin] sm:size-[1420px]' ></div>
                <div className='square absolute size-[100vmin] blur-[3px] sm:size-[1620px] sm:blur-[6px]' ></div>
                <div className='square absolute size-[110vmin] blur-[4px] sm:size-[1820px] sm:blur-[9px]' ></div>
                <div className='square absolute size-[120vmin] blur-[5px] sm:size-[2020px] sm:blur-[10px]' ></div>
                
                
            </div>
        </div>

        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-4 rotate-45 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px]'>
            <div className='relative inline-flex animate-[corner-move_17s_linear_infinite]'>
                <Image src={Food1.src} alt="food1" width={50} height={50} className='donut-svg sm:w-[70px] sm:h-[70px]' />
            </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-4 rotate-45 w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px]'>
            <div className='relative inline-flex animate-[corner-move_15s_linear_infinite]'>
                <Image src={Food2.src} alt="food1" width={50} height={50} className='donut-svg sm:w-[70px] sm:h-[70px]' />
            </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-4 rotate-45 w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px]'>
            <div className='relative inline-flex animate-[corner-move_13s_linear_infinite]'>
                <Image src={Food3.src} alt="food1" width={50} height={50} className='donut-svg sm:w-[70px] sm:h-[70px]' />
            </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-4 rotate-45 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px]'>
            <div className='relative inline-flex animate-[corner-move_11s_linear_infinite]'>
                <Image src={Food4.src} alt="food1" width={40} height={40} className='donut-svg sm:w-[60px] sm:h-[60px]' />
            </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-1 rotate-45 w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px]'>
            <div className='relative inline-flex animate-[corner-move_9s_linear_infinite]'>
                <Image src={Food5.src} alt="food1" width={40} height={40} className='donut-svg sm:w-[50px] sm:h-[50px]' />
            </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-1 rotate-45 w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px]'>
            <div className='relative inline-flex animate-[corner-move_9s_linear_infinite]'>
                <Image src={Food6.src} alt="food1" width={40} height={40} className='donut-svg sm:w-[50px] sm:h-[50px]' />
            </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-4 rotate-45 w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px]'>
            <div className='relative inline-flex animate-[corner-move_13s_linear_infinite]'>
                <Image src={Food6.src} alt="food1" width={50} height={50} className='donut-svg sm:w-[70px] sm:h-[70px]' />
            </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-1 rotate-45 w-[90vw] h-[90vw] max-w-[1400px] max-h-[1400px]'>
            <div className='relative inline-flex animate-[corner-move_11s_linear_infinite]'>
                <Image src={Food4.src} alt="food1" width={40} height={40} className='donut-svg sm:w-[60px] sm:h-[60px]' />
            </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-1 rotate-45 w-[90vw] h-[90vw] max-w-[1600px] max-h-[1600px]'>
            <div className='relative inline-flex animate-[corner-move_9s_linear_infinite]'>
                <Image src={Food5.src} alt="food1" width={40} height={40} className='donut-svg sm:w-[60px] sm:h-[60px]' />
            </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 sm:p-2 -translate-y-1/2 opacity-1 rotate-45 w-[90vw] h-[90vw] max-w-[1800px] max-h-[1800px]'>
            <div className='relative inline-flex animate-[corner-move_9s_linear_infinite]'>
                <Image src={Food5.src} alt="food1" width={40} height={40} className='donut-svg sm:w-[50px] sm:h-[50px]' />
            </div>
        </div>
           
        <div className='container py-1 px-4 sm:px-6'>
            <div className='flex flex-col items-center'>
                <div className='z-1 inset-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] justify-center'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentAvatar}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 1,}}
                            >
                            <Image 
                                src={avatarImages[currentAvatar]} 
                                alt="avatar" 
                                width={200} 
                                height={200} 
                                className="w-full h-full"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className='bg-gray-950 border border-gray-800 z-2 px-3 sm:px-4 py-1.5 inline-flex items-center gap-2 rounded-lg text-xs sm:text-sm'>
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
                    <div className='text-sm font-medium'>ระบพร้อมใช้งานแล้ว สามรถเข้ามาใช้งานได้</div>
                </div>
            </div>
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-lg mx-auto dm-sans-400'>
                <h1 className='font-serif text-xl sm:text-2xl md:text-3xl text-center mt-6 sm:mt-8'>อัปโหลดภาพถ่ายของคุณเพื่อเช็คมื้ออาหารของคุณ</h1>
                <p className='mt-3 sm:mt-4 text-center text-white/60 text-sm sm:text-base md:text-lg'>อัปโหลดภาพของคุณเพื่อเช็คมื้ออาหารของคุณได้แล้ววันนี้! เพียงแค่กดปุ่ม "เลือกไฟล์" และเลือกไฟล์รูปภาพของมื้ออาหารที่คุณต้องการตรวจสอบ ระบบของเราจะทำการประมวลผลและให้ข้อมูลเกี่ยวกับอาหารในภาพของคุณ เพื่อช่วยให้คุณทราบข้อมูลเพิ่มเติม เช่น ปริมาณแคลอรี่และสารอาหารที่คุณรับประทานในมื้อนั้นๆ ด้วยความสะดวกและรวดเร็ว เพียงแค่ไม่กี่ขั้นตอน ก็สามารถดูรายละเอียดได้ทันที!</p>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col relative z-20 sm:flex-row items-center justify-center mt-6 sm:mt-8 gap-3 sm:gap-4'>
                <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 px-4 sm:px-6 h-10 sm:h-12 hover:bg-white/10 hover:border-white/30 transition-all duration-200 active:scale-95 cursor-pointer'>
                    <span className='font-semibold'>Explore More</span>
                </button>
                <button className='w-full sm:w-auto inline-flex z-2 items-center justify-center gap-2 border-white bg-white text-gray-900 h-10 sm:h-12 px-4 sm:px-6 rounded-xl hover:bg-gray-100 hover:scale-[1.02] active:scale-95 transition-transform duration-200 cursor-pointer mt-3 sm:mt-0'>
                    <span className='font-semibold'>👻</span>
                    <span className='font-semibold'>Lets go</span>
                </button>
            </motion.div>
        </div>
    </div>
  )
}

export default AvatarSection