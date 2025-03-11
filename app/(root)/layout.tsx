import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-gray-900 text-white '>{children}</div>
  )
}

export default layout