import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const PrimaryButton = ({label, onClick, className, type, url}) => {

  return (url ? (
          <NavLink to={url}className={`bg-black_2 px-15 py-4 text-white font-bold text-sm  w-fit cursor-pointer transition-all duration-300 border border-black_2 hover:bg-transparent hover:text-black_2 ${className}`}>
            {label} </NavLink>
            ):(
             <button type={type} className={`bg-black_2 px-15 py-4 text-white font-bold text-sm  w-fit cursor-pointer transition-all duration-300 border border-black_2 hover:bg-transparent hover:text-black_2 ${className}`} onClick={onClick}> {label} </button>
           )
 )
} 

export default PrimaryButton
 