import React from 'react'

const PrimaryButton = ({label, onClick, className}) => {
  return (
   <button className={`bg-black_2 px-15 py-4 text-white font-bold text-sm  w-fit cursor-pointer transition-all duration-300 border border-black_2 hover:bg-transparent hover:text-black_2 ${className}`} onClick={onClick}>{label}</button>
  )
} 

export default PrimaryButton
 