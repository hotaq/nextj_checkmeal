import React from 'react'
import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
const ObjectRunFood = ({children, size}: PropsWithChildren<{size: number}>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-red-900  opacity-10 rotate-45 size-[800px] '>
        <div className='relative inline-flex animate-[corner-move_10s_linear_infinite] border-red-900' 
        style={{width: `${size}px`, height: `${size}px`}}>
            {children}
        </div>
    </div>
  )
}

export default ObjectRunFood