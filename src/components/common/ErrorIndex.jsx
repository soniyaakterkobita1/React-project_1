import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorIndex = () => {
  return ( 
    <div className='h-screen flex items-center justify-center '>
        <div className='flex flex-col items-center gap-6'>
      <span className='text-center block text-[100px] font-bold text-gray-900 leading-none'>404 Error</span>
      <NavLink to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 inline-block">Back To Home</NavLink>
        </div>
    </div>
  )
} 

export default ErrorIndex
