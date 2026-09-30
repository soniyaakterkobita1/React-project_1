import React, { useEffect, useRef, useState } from 'react'
import Container from '../common/Container'
import Image from '../common/Image'
import logo from '../../assets/images/logo.png'
import { NavLink, useLocation } from 'react-router-dom'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";
import { NavData, profileDropdownData } from '../../dummyData/NavData'
import { IoMdClose } from "react-icons/io";
import useOutsideClick from '../../hooks/useOutsideClick'
import { MdLogin } from "react-icons/md";


const Navber = () => {
     
    
    const[showDropdown, setShowDropdown] = useState(false)
    const[showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const path= useLocation()
    const dropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);

    useOutsideClick(dropdownRef, ()=>{
        setShowDropdown(false);
    })
    useOutsideClick(profileDropdownRef, ()=>{
        setShowProfileDropdown(false);
    })
    

  return (
    <div>
    <nav className='py-8'>
        <Container>
            <div className=' flex justify-between items-center'>
                <NavLink to={"/"}>
                    <Image src={logo} alt="logo"/>
                </NavLink>
            <ul className='flex justify-end gap-10 text-[14px] font-normal leading-none text-#767676 font-dmsans'>
                {NavData.map((item,index)=>(
                <li key={index}>
                    <NavLink to={item.url} className={`${item.url == path.pathname ? "text-red-600" : "text-black" } text-[14px] font-normal leading-none transition-all duration-300 hover:text-[#262626]`}>
                         {
                            item.label
                         }
                    </NavLink>
                </li>
                ))
                }
            </ul>
            </div>
        </Container>
    </nav>
     <div className='bg-gray_1 py-6.25'>
        <Container>
            <div className=' flex justify-between items-center'>
                <div ref={dropdownRef} className='relative'>
                    {showDropdown ? 
                     <IoMdClose onClick={()=>setShowDropdown(!showDropdown)} className='text-2xl cursor-pointer'/>
                     :
                     <HiMiniBars3BottomLeft onClick={()=>setShowDropdown(!showDropdown)} className=' text-2xl cursor-pointer' />
                    }
                {showDropdown &&
                <div className='bg-white shadow-2xl absolute left-0 -bottom-2 translate-y-full w-50 '>
                    <ul> 
                        {[0,1,2,3,4,5].map((item,index)=>(
                            <li className='px-5 py-3 cursor-pointer border-b last:border-b-0'>Category-1</li>
                        ))}
                    </ul>
                </div>
                }
                </div>
                <div className='w-150 relative'>
                    <input  type="text" name='search' className='w-full bg-white py-4 px-5 font-normal text-sm font-dmsans placeholder:text-[#C4C4C4]' placeholder='Search Product' />
                    <IoSearch className='absolute  right-5 top-1/2 -translate-y-1/2 text-xl'/>
                </div>
                 <div className='flex gap-10 items-center'>
                    {isLogin ?
                    <div ref={profileDropdownRef} className='relative'>
                    <div onClick={()=>setShowProfileDropdown(!showProfileDropdown)} className='cursor-pointer flex gap-2 items-center'>
                        <FaUser className='text-xl'/>
                        <FaSortDown />
                    </div>
                    {showProfileDropdown && 
                    <div className='w-32 bg-white absolute -bottom-3 left-0 translate-y-full shadow'>
                        {profileDropdownData.map((item,index)=>( 
                         <NavLink key={item.id} to={item.url} className="px-5 py-3 block cursor-pointer border-b last:border-b-0">
                            {item.label}
                        </NavLink>
                        )) }
                    </div>
                    }
                    </div>
                    :
                    <NavLink to="/login">
                        <MdLogin className='text-2xl' />
                    </NavLink>
                    }
                    <NavLink to="/cart">
                      <IoCart className='text-2xl  cursor-pointer'/>
                    </NavLink>
                 </div>
            </div>
        </Container>
     </div>
    </div>
  )
}

export default Navber
