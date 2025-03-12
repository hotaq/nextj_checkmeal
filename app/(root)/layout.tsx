import React from 'react'
import { EdgeStoreProvider } from '@/lib/edgestore'
const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-black '>
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </div>
  )
}

export default layout