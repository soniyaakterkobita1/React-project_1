import React, { useEffect, useState } from 'react'
import Container from '../common/Container'
import Image from '../common/Image'
import logo from '../../assets/images/logo.png'
import { NavLink, useLocation } from 'react-router-dom'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const data = [
    {
        id: 1,
        label: "Home",
        url:"/"
    },
    {
        id: 2,
        label: "Shop",
        url:"/shop"
    },
    {
        id: 3,
        label: "About",
        url:"/about"
    },
    {
        id: 4,
        label: "Contacts",
        url:"/contacts"
    },
    {
        id: 5,
        label: "Journal",
        url:"/journal"
    },
]

const Navber = () => {
     
    
    const[showDropdown, setShowDropdown] = useState(false)
    const path= useLocation()
   console.log(path)

    

  return (
    <div>
    <nav className='py-8'>
        <Container>
            <div className=' flex justify-between items-center'>
                <NavLink to={"/"}>
                    <Image src={logo} alt="logo"/>
                </NavLink>
            <ul className='flex justify-end gap-10 text-[14px] font-normal leading-none text-#767676 font-dmsans'>
                {data.map((item,index)=>(
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
                <div className='relative'>
                <HiMiniBars3BottomLeft onClick={()=>setShowDropdown(!showDropdown)} className=' text-2xl cursor-pointer' />
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
                    <div className='cursor-pointer flex gap-2 items-center'>
                        <FaUser className='text-xl'/>
                        <FaSortDown />
                    </div>
                  <IoCart className='text-2xl  cursor-pointer'/>
                 </div>
            </div>
        </Container>
     </div>
    </div>
  )
}

export default Navber
